# Överlämning till utveckling

Allt för att föra över Dashboard v2 till den riktiga appen. Börja här.

## Vad som finns

| Mapp/fil | Vad | Använd till |
|---|---|---|
| `handoff/tokens.css` | Alla designvärden som CSS-variabler, ljust och mörkt läge | **Kopiera rakt in.** Grunden för allt. |
| `handoff/components.css` | Rena klasser för meny, toppfält, kort, knappar, flikar, taggar, fält, switch, popover, KPI, steg och tidslinje | Kopiera eller översätt till ert komponentbibliotek |
| `handoff/components.html` | Komponentark med ren HTML (inga inline-stilar), inklusive JS för temabyte | Facit för markup och tillstånd |
| `handoff/fonts/` + `fonts.css` | Geist och Geist Mono (OFL-licens), lokala filer | Self-hosta i stället för Google Fonts |
| `handoff/screens/` | Skärmbilder av alla sidor i ljust och mörkt läge, plus viktiga lägen (öppna popovers, flikar, utfälld meny) | Pixelreferens |
| `prototype/` | Alla 11 sidor körbara i vanlig webbläsare, utan Claude | Klicka runt och se beteendet. Öppna `prototype/Main.html`. |
| `design/` | Källfilerna (Claudes designformat) | Exakta mått om något är oklart |
| `SPEC.md` | Vad varje klickbar sak ska göra | Beteende |
| `NYA-FUNKTIONER.md` | Vad som är nytt jämfört med dagens app, och vad som saknas i designen | Planering och backlog |

## Rekommenderad ordning

1. **Tokens.** Lägg in `tokens.css` globalt. Mörkt läge styrs med `data-theme="dark"` på `<html>`.
2. **Skal.** Bygg bakgrunden (`.app-bg`), menyn (`.rail`), oskärpan (`.rail-scrim`) och toppfältet (`.topbar`). Då ser alla sidor rätt ut direkt.
3. **Komponenter.** Knapp, kort, seg/flikar, tagg, fält och popover. Se `components.html`.
4. **Sida för sida.** Jämför med `handoff/screens/` och klicka i `prototype/`.
5. **Beteende.** Följ `SPEC.md`.

## Tailwind?

Om ni kör Tailwind, peka färgerna mot variablerna så funkar mörkt läge automatiskt:

```js
// tailwind.config.js
theme: { extend: {
  colors: {
    base: 'var(--base)', glass: 'var(--glass)', 'glass-hi': 'var(--glassHi)', 'glass-line': 'var(--glassLine)',
    soft: 'var(--soft)', line: 'var(--line)', ink: 'var(--ink)', muted: 'var(--muted)',
    pill: 'var(--pill)', 'pill-ink': 'var(--pillInk)', green: 'var(--green)', 'on-green': 'var(--onGreen)',
    tint: 'var(--tintG)', down: 'var(--down)', up: 'var(--up)', field: 'var(--field)', 'field-line': 'var(--fieldLine)',
  },
  borderRadius: { card: '26px', panel: '28px', box: '16px' },
  boxShadow: { glass: 'var(--shadow)', pop: 'var(--shadow-pop)' },
  fontFamily: { sans: ['Geist', 'system-ui', 'sans-serif'], mono: ['Geist Mono', 'monospace'] },
}}
```

Glas = `bg-glass border border-glass-line backdrop-blur-[28px] backdrop-saturate-150 shadow-glass`.

## Saker att veta

- **Glaseffekten** kräver `backdrop-filter` med `-webkit-`-prefix för Safari. Den syns bara mot den suddiga bakgrunden, så bygg bakgrunden först.
- **Menyn** fälls ut med ren CSS (`:hover` och `:focus-within`). Oskärpan bakom använder `:has()`. Vill ni stödja äldre webbläsare, sätt klassen `.is-open` med JS i stället.
- **Temat:** ljust är standard. Valet sparas per flik i `sessionStorage` (nyckel `aik-theme-tab`), inte mellan flikar. Det är medvetet, eftersom synk mellan flikar skapade buggar. Cirkelanimationen använder View Transitions API och faller tillbaka till direktbyte.
- **Popovers** stängs vid klick utanför: en osynlig spärr (`.popover-catcher`) lyssnar på `mousedown`.
- **Datan** är påhittad eller platshållare (`[Förnamn]`, `[Kundens bolag]`). Datum och vecka i toppfältet räknas live.
- **Kostnad per körning i USD** visas medvetet inte för kunden.
- **Prototypen** (`prototype/`) har inline-stilar och en liten egen körmiljö (`dc-runtime.js`). Den är facit för utseende och beteende, inte kod att kopiera. Ren markup finns i `handoff/`.

## Öppna prototypen lokalt

Dubbelklicka på `prototype/Main.html`. Alternativt:

```sh
npx serve .   # öppna sedan http://localhost:3000/prototype/Main.html
```
