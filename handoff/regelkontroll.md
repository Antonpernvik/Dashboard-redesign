# Regelkontroll (6 nov 2026, oberoende granskning)

# Audit verdict – Exa-style dashboard, 14 pages × states × 12 rules

Method: an automated Playwright checker drives 93 page/state combinations at 1440×900, 14 defaults at 1280×800 and 23 at 390×844, neutralises `.main{zoom}` while reading computed styles, and reports: gradients, box-shadows (with element), animation-iteration-count/duration, transition-duration > 200 ms, emoji, border-radius > 14 px on non-pills, full borders nested in full borders, inner/outer radius mismatch when gap < outer radius, digits without tabular-nums, placeholder patterns, every accent-colour usage (#3E1FF3/#1326D2/#EEF2FA/#3417D9) with what it is attached to, tags/icon glyphs repeated on every item of a list, console/page errors, horizontal scroll, clipped text.

Legend: **P** pass, **F → P** failed before, fixed, **J** justified exception (explained below), **–** not applicable.

## Table (rules 1–12; one row per page, states listed where they matter)

| Page / state | 1 grad/shadow | 2 icons | 3 badges | 4 cards | 5 proximity | 6 radius | 7 motion | 8 accent | 9 icon tiles | 10 metric hierarchy | 11 borders/radius | 12 copy/numbers |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Start (default, who-open, Moa, mini, feedback open/sent, 390 drawer) | P (shadow only on who-menu/fb-pop/drawer) | P | P (SÄLJARE/EJ AKTIV differ) | P | P | P (menu 12−6=6, fb 14−8=6) | P (≤200 ms, none looping) | F → P (“Lägg till kollega” in who-menu was accent; now ink) | P | – | P | P |
| Login (default, error, forgot, sent, in) | P | P | – | P | P | P | P | P (primary only) | F → P (grey icon circle on “Kolla din inkorg” replaced nothing; removed) | – | P | F → P (“Erik har 2 förslag” vs 11 everywhere else) |
| Förslag (Alla/E-post/LinkedIn/Anbud, Läs den, Träna, Skriv om, godkänd, avvisad, en i taget) | P | P | P (type tag only on Alla, differs per row) | P | P | P | P | P (primary + done-note J) | P | – | P | F → P (preview “Hej Anders, Jag heter…” capitalised mid-sentence; tab said “Mail” while tag said E-POST) |
| Identifierade företag (Bolag, accepterad, Befintliga kunder, Exkluderade) | P | P (check icons per signal hidden) | J (“Signal” key label on every row, see below) | P | P (“Erik researchar” sits by Ångra in the action slot) | P | P | P (primary + done J) | P | – | P | F → P (“Konkurrent A AB / Tidigare kund X / Klagomål Y AB / Konkurrent B Tech”; signals “ICP-matchning”, “Funding-signal” were labels, not signals) |
| Pågående sälj (Alla, 4 stage filters, Åtgärder, lägg till, tillagd, profilfilter) | P | P (one chevron per link row = affordance) | P (BERIKAT/I DIALOG/GODKÄNT – kept per rule 3 text) | P | P | P | P | F → P (9 blue “now” progress segments; blue notice after adding a company) | P | – | P | P |
| Kundkort › Research (default, Åtgärder, uteslut-bekräfta, utesluten, flaggad, lägg till kontakt, feedback) | P (shadow only on menu/fb-pop) | P | F → P (“Från dig” tag on every tip row – all tips are yours; removed) | P | P | P | P | F → P (MATCHNING 8/10 accent tag; amber “Du behöver ta över” → accent since it requires action) | P (initials replace photos) | – | P | P |
| Kundkort › Säljkort (default, tråd öppen, skriv om, nudga, godkänd) | P | P | P (Erik föreslår/Klart/Erik är här/Väntar differ) | P | P | P (step chip 4 px at 12 px gap) | P | F → P (blue journey bar + “Erik är här” chips; “Connect accepterat” accent; blue chat bubbles; amber “Åtgärd behövs” → accent) | P | – | P | P |
| Kundkort › Överlämning (default, egen rad) | P | P | – | P | P | P | P | F → P (“Utkast · skickas…” status in accent; “Din rad” accent well) | P | – | P | P |
| Körningar (Alla, Pågår, Väntar, Klara, Misslyckade, försök igen, who-open, Moa, mini, 390 drawer) | P | P | P | P | P | P | P | F → P (“Pågår” text+dot accent; now ink ring dot. “Väntar på dig” stays blue – requires you) | P | P (`.stats.lead`: 12 large, rest 20 px grey) | P | F → P (“Misslyckade 1” had no period) |
| Körning (default, teknisk info, visa alla) | P | P | – | P | P | P | P | P (s-wait + primary) | P (numbered circles are numbers) | P (lead card) | P | F → P (“/foretag/bolag-x-ab”, “bolag-y-ab”; “Visa alla 22” showed 11 rows) |
| Underlag (default, ändra, avmarkera, godkänd, avvisad, nästa) | J (`.decide` sticky bar shadow) | P | P (tags appear only when changed/excluded) | P | P | P | P | F → P (“Ändrad av dig” accent tag) | P | – | P | F → P (org.nr 556000-0001/2/3; “[…]” bracket quote) |
| Kundprofiler | P | P | J (“Aktiv” on both cards, see below) | P | P (status on name row) | P | P | F → P (blue “Aktiv” dot → ink) | P | – | P | P |
| Kundprofil (default, sparad, ta bort-bekräfta, inaktiv) | P | P | P | P | P | P | P | F → P (blue Aktiv dot) / ok-note J | P | – | P | P |
| Arbetsflöden (default, regler utfällda, stängd) | P | P | P (only steps 1, 5, 6 carry a tag) | P | P | P | P | F → P (blue “Pågår” dot; “Aktivt” dot) | P | – | P | P |
| Integrationer (default, LinkedIn-id, Gmail frånkopplad) | P | P (brand logos) | P | P | P (Ansluten on the Gmail row) | P | P | F → P (blue “Ansluten” dot) | P | – | P | P |
| Inställningar (8 tabs, kontakta inte tillagd, sparad) | P | P | P | P | P | P (tabs 8−2=6) | P | F → P (blue “Erik kan skicka just nu” pill; amber rule warning) | P | – | P | P |

## Summary per rule (found → fixed)
1. Gradients/shadow: 0 gradients; shadows only on who-menu, Åtgärder menu, feedback popover, mobile drawer, field focus rings (allowed) and the sticky `.decide` bar (J). 0 fails.
2. Icons: 0 emoji; all icons are 1.5 px line icons or brand logos; no icon repeated purely as decoration (chevron on Pågående rows is the open affordance of a link row). 0 fails.
3. Badges: 1 fail (Kundkort “Från dig” on every tip) → fixed. 2 judged exceptions (below).
4. Cards in cards: checker found 0 full-bordered elements inside bordered cards outside form fields/buttons. 0 fails.
5. Proximity: visually checked on every page; statuses sit on the row they describe, buttons next to what they act on. 0 fails.
6. Radius: 0 mismatches with gap < outer radius (menu 6, feedback field 6, tabs 6, chips 4, step chip 4). 0 fails.
7. Motion: 0 animations; longest transition 200 ms (sidebar width/drawer). 0 fails.
8. One accent, colour means something: 14 fails across 10 pages → all fixed (list above). Remaining blue: primary buttons, “Väntar på dig/ditt godkännande”, “Du behöver ta över”, “Åtgärd behövs”, checked checkboxes/switch, selected colleague check, focus rings, and confirmation notes (J). Amber tokens removed entirely.
9. Coloured icon tiles: 1 fail (Login) → fixed. Initials tiles are grey and replace photos.
10. Metric hierarchy: both metric rows (Körningar, Körning) use `.stats.lead`. 0 fails.
11. Hairlines/radius ≤ 14: 0 radius > 14 on non-pills; no card/field/badge/chart shadows. 0 fails.
12. Copy/numbers: 6 fails (Förslag preview, Företag placeholder names + label-like signals, Körning placeholder slugs + 22/11 mismatch, Underlag placeholder org.nr + bracket quote, Login count, Körningar period) → fixed. All digits inherit tabular-nums (checker: 0 non-tabular text nodes).

## Judged exceptions
- **Underlag `.decide` shadow (rule 1):** the bar is `position:sticky; bottom:16px` and floats over the field list while scrolling, so it is in the “svävar ovanpå sidan” class even though the rule lists only menus/switcher/feedback/drawer.
- **“Signal” label on every Företag row (rule 3):** it is a key for the value next to it (there is no header row and the mobile layout stacks cells), not a badge. Values now differ per row. Owner may prefer a header row instead.
- **“Aktiv” on both Kundprofiler cards (rule 3):** identical on all 2 cards today, but rule 5 explicitly names “Aktiv on the profile name row” as the wanted pattern and a profile can be paused (Kundprofil switch). Kept, dot now ink.
- **Confirmation notes in accent (rule 8):** `.done-note`/`.ok-note`/`.co .done`/`.lang .saved` (“Godkänt – skickas…”, “Erik researchar”, “Sparad”, “Erik använder den här vinkeln”, “Startad igen”) appear only after the user pressed the primary action and mark the state they chose – read as “valt läge”. If the owner wants a stricter reading, change `.done-note,.ok-note,.co .done,.lang .saved{color:var(--accent)}` to `var(--fg)` in the shared block.
- **Checked checkboxes/switch/range in CTA blue (rule 8):** selected state of a control.

## Functional bug fixed on the way
- Kundkort: the meeting-plan feedback used the same hole names (`fbText`, `sendFb`) as the sidebar feedback popover, so “Förbättra planen” never showed its confirmation and instead flipped the popover state. Renamed to `planFbText`/`setPlanFb`/`sendPlanFb`.

## Still needs an owner decision
- Pågående sälj shows both a stage (“Steg 2 av 6 · Första kontakt”) and a status tag (BERIKAT on 7 of 9 rows). Rule 3 names BERIKAT as a kept label, so it stays, but the two columns overlap in meaning.
- Sidebar counts (Förslag 11, Identifierade 6) are static on inner pages and do not change when you accept/approve, and stay when Moa is selected (Start hides them for Moa).
- `input type=time` renders “08:00 AM” in the audit browser (en-US locale); real users on sv-SE get 24 h. Not fixable in markup.
- Who-menu “Lägg till kollega” is now ink, not blue; revert to `color:var(--accent)` in `.who-add` (pages + tools/exa-side.css) if blue was intended as the menu’s primary action.
