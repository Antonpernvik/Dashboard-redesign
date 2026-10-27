/*
 * dc-runtime.js – liten fristående körmiljö för designfilerna (.dc.html).
 * Gör att varje sida i /prototype kan öppnas direkt i en vanlig webbläsare,
 * utan Claude. Bara för referens/klicktest – inte tänkt som produktionskod.
 *
 * Mallsyntax som stöds:
 *   {{a.b}}                         – värde från renderVals() (eller loopvariabel)
 *   <sc-if value="{{x}}">…</sc-if>  – visas om x är sant
 *   <sc-for list="{{xs}}" as="x">   – upprepas för varje element i xs
 *   onClick / onChange / onMouseDown / onMouseEnter / onMouseLeave /
 *   onFocus / onBlur / onKeyDown / onSubmit = "{{funktion}}"
 */
(function () {
  'use strict';
  var HOLE = /\{\{\s*([\w.$]+)\s*\}\}/g;
  var ONLY = /^\s*\{\{\s*([\w.$]+)\s*\}\}\s*$/;
  var EVENTS = { onclick: 'click', onchange: 'change', onmousedown: 'mousedown', onmouseenter: 'mouseenter', onmouseleave: 'mouseleave', onfocus: 'focusin', onblur: 'focusout', onkeydown: 'keydown', onsubmit: 'submit', oninput: 'input' };
  var SVGNS = 'http://www.w3.org/2000/svg';

  function lookup(path, scopes) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    var parts = path.split('.');
    var head = parts[0], obj, found = false;
    for (var i = scopes.length - 1; i >= 0; i--) {
      if (scopes[i] && Object.prototype.hasOwnProperty.call(scopes[i], head)) { obj = scopes[i][head]; found = true; break; }
    }
    if (!found) return undefined;
    for (var j = 1; j < parts.length; j++) { if (obj == null) return undefined; obj = obj[parts[j]]; }
    return obj;
  }
  function interp(str, scopes) {
    return str.replace(HOLE, function (_, p) { var v = lookup(p, scopes); return v == null || v === false ? '' : String(v); });
  }
  function evt(el, name) {
    if (name === 'onchange') {
      var tag = el.tagName;
      if (tag === 'SELECT') return 'change';
      if (tag === 'INPUT' && (el.type === 'checkbox' || el.type === 'radio')) return 'change';
      return 'input';
    }
    return EVENTS[name];
  }

  // Bygger en ny (ej monterad) DOM-gren från mallen.
  function build(tpl, scopes, out) {
    for (var n = tpl.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) { out.appendChild(document.createTextNode(interp(n.data, scopes))); continue; }
      if (n.nodeType !== 1) continue;
      var tag = n.localName;
      if (tag === 'sc-if') {
        var cond = n.getAttribute('value') || '';
        var m = cond.match(ONLY);
        if (m ? lookup(m[1], scopes) : cond) build(n, scopes, out);
        continue;
      }
      if (tag === 'sc-for') {
        var lm = (n.getAttribute('list') || '').match(ONLY);
        var list = lm ? lookup(lm[1], scopes) : null;
        var as = n.getAttribute('as') || 'item';
        if (Array.isArray(list)) list.forEach(function (item, idx) { var s = {}; s[as] = item; s[as + 'Index'] = idx; build(n, scopes.concat([s]), out); });
        continue;
      }
      var el = n.namespaceURI === SVGNS ? document.createElementNS(SVGNS, n.localName) : document.createElement(n.localName);
      el.__h = {}; el.__p = {};
      for (var a = 0; a < n.attributes.length; a++) {
        var at = n.attributes[a], name = at.name, raw = at.value;
        if (name.indexOf('hint-') === 0) continue;
        var only = raw.match(ONLY);
        if (EVENTS[name]) { if (only) el.__h[name] = lookup(only[1], scopes); continue; }
        var val = only ? lookup(only[1], scopes) : interp(raw, scopes);
        if (name === 'value' && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) { el.__p.value = val == null ? '' : String(val); continue; }
        if (name === 'checked' && el.tagName === 'INPUT') { el.__p.checked = !!val; continue; }
        if (val === false || val == null) continue;
        if (val === true) val = '';
        if (name === 'href' && typeof val === 'string') val = val.replace(/\.dc\.html(#|$)/, '.html$1');
        if (at.namespaceURI) el.setAttributeNS(at.namespaceURI, name, String(val)); else el.setAttribute(name, String(val));
      }
      build(n.content || n, scopes, el);
      out.appendChild(el);
    }
    return out;
  }

  function bindEvents(el, handlers) {
    el.__h = handlers;
    if (!el.__bound) el.__bound = {};
    Object.keys(handlers).forEach(function (name) {
      var type = evt(el, name);
      if (!type || el.__bound[type]) return;
      el.__bound[type] = name;
      el.addEventListener(type, function (e) { var fn = el.__h && el.__h[el.__bound[type]]; if (typeof fn === 'function') fn(e); });
    });
  }
  function applyProps(el, p) {
    if (!p) return;
    if ('value' in p && el.value !== p.value) el.value = p.value;
    if ('checked' in p) el.checked = p.checked;
  }
  function fresh(n) { // monterar en nybyggd nod: binder event och properties i hela grenen
    if (n.nodeType !== 1) return n;
    for (var c = n.firstChild; c; c = c.nextSibling) fresh(c);
    bindEvents(n, n.__h || {}); applyProps(n, n.__p);
    return n;
  }
  // Uppdaterar befintlig DOM mot den nya grenen (behåller fokus, scroll och CSS-övergångar).
  function morph(old, neu) {
    if (old.nodeType !== neu.nodeType || old.nodeName !== neu.nodeName || old.namespaceURI !== neu.namespaceURI) { old.parentNode.replaceChild(fresh(neu), old); return; }
    if (old.nodeType === 3) { if (old.data !== neu.data) old.data = neu.data; return; }
    if (old.nodeType !== 1) return;
    var i, a;
    for (i = old.attributes.length - 1; i >= 0; i--) { a = old.attributes[i]; if (!neu.hasAttribute(a.name)) old.removeAttribute(a.name); }
    for (i = 0; i < neu.attributes.length; i++) { a = neu.attributes[i]; if (old.getAttribute(a.name) !== a.value) old.setAttribute(a.name, a.value); }
    morphChildren(old, neu);
    bindEvents(old, neu.__h || {});
    applyProps(old, neu.__p);
  }
  function morphChildren(old, neu) {
    var oc = Array.prototype.slice.call(old.childNodes), nc = Array.prototype.slice.call(neu.childNodes);
    for (var i = 0; i < nc.length; i++) {
      if (i < oc.length) morph(oc[i], nc[i]); else old.appendChild(fresh(nc[i]));
    }
    for (var j = oc.length - 1; j >= nc.length; j--) old.removeChild(oc[j]);
  }

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (update, cb) {
    var patch = typeof update === 'function' ? update(this.state, this.props) : update;
    if (patch) this.state = Object.assign({}, this.state, patch);
    this.__dc && this.__dc.schedule(cb);
  };
  window.DCLogic = DCLogic;

  window.DC = {
    mount: function (Component, props, tplId, rootId) {
      var tpl = document.getElementById(tplId || 'dc-tpl').content;
      var root = document.getElementById(rootId || 'app');
      var inst = new Component(props || {});
      var pending = false, cbs = [], prevState = inst.state, mounted = false;
      function render() {
        pending = false;
        var vals = inst.renderVals();
        var frag = build(tpl, [vals], document.createDocumentFragment());
        var wrap = document.createElement('div'); wrap.appendChild(frag);
        if (!mounted) { while (wrap.firstChild) root.appendChild(fresh(wrap.firstChild)); }
        else morphChildren(root, wrap);
        var ps = prevState; prevState = inst.state;
        var list = cbs; cbs = [];
        if (!mounted) { mounted = true; inst.componentDidMount && inst.componentDidMount(); }
        else inst.componentDidUpdate && inst.componentDidUpdate(inst.props, ps);
        list.forEach(function (f) { try { f(); } catch (e) { console.error(e); } });
      }
      inst.__dc = { schedule: function (cb) { if (cb) cbs.push(cb); if (!pending) { pending = true; Promise.resolve().then(render); } } };
      render();
      return inst;
    }
  };
})();
