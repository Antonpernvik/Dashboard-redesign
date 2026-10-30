# Överlämning till utveckling

Allt för att föra över Dashboard v2 till den riktiga appen. Börja här.

## Vad som finns

| Mapp/fil | Vad | Använd till |
|---|---|---|
| `handoff/tokens.css` | Alla designvärden som CSS-variabler, ljust och mörkt läge | **Kopiera rakt in.** Grunden för allt. |
| `handoff/components.css` | Rena klasser för meny, toppfält, kort, knappar, flikar, taggar, fält, switch, popover, KPI, steg och tidslinje | Kopiera eller översätt till ert komponentbibliotek |
| `handoff/components.html` | Komponentark med ren HTML (nästan inga inline-stilar), inklusive JS för temabyte | Facit för markup och tillstånd |
| `handoff/fonts/` + `fonts.css` | Outfit (OFL-licens), lokala filer | Self-hosta i stället för Google Fonts |
| `handoff/screens/` | Skärmbilder av alla sidor i ljust och mörkt läge, plus viktiga lägen (öppna popovers, flikar, utfälld meny) | Pixelreferens |
| `prototype/` | Alla 14 sidor körbara i vanlig webbläsare, utan Claude | Klicka runt och se beteendet. Öppna `prototype/Main.html`. |
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
  fontFamily: { sans: ['Outfit', 'system-ui', 'sans-serif'] },
}}
```

Kort = `bg-glass border border-glass-line shadow-glass rounded-card`. Lägg även till `rail`, `rail-ink` m.fl. från tokens.css för menyn.

## Saker att veta

- **Stilen (30 okt 2026):** Enfärgad varm benvit bakgrund (`--base`), fasta vita kort med mjuk skugga (inget glas), menyn i mjuk grågrön (`--rail` #4A6457) där menyns färger sätts som lokala CSS-variabler (se `.rail`). Outfit i mellanvikt: 500 för stora siffror och sidrubriker, 600 för korttitlar. Svart "pill" för valt läge och knappen "Ge Erik ett uppdrag" (`.btn--dark`). Startsidan har ett grönt huvudkort (`.card--hero`, `--hero`). Tunna ikoner (stroke 1,5). Toppbaren är 80 px hög med 52 px knappar.

- **Glaset är borttaget.** Variablerna heter fortfarande `--glass` m.fl. men är nu fasta färger. `backdrop-filter` ligger kvar på några ställen i prototypen men gör ingen synlig skillnad och kan tas bort.
- **Menyn** fälls ut med ren CSS (`:hover` och `:focus-within`). Oskärpan bakom använder `:has()`. Vill ni stödja äldre webbläsare, sätt klassen `.is-open` med JS i stället.
- **Temat:** ljust är standard. Valet sparas per flik i `sessionStorage` (nyckel `aik-theme-tab`), inte mellan flikar. Det är medvetet, eftersom synk mellan flikar skapade buggar. Cirkelanimationen använder View Transitions API och faller tillbaka till direktbyte.
- **Popovers** stängs vid klick utanför och med Esc. Spärren (`.popover-catcher`) måste ligga **utanför** element med `backdrop-filter`/`filter`/`transform` (t.ex. toppfältet) – annars blir den bara lika stor som det elementet. Enklast: rendera popover och spärr i en portal på `<body>`.
- **Datan** är påhittad eller platshållare (`[Förnamn]`, `[Kundens bolag]`); bolagen i exemplen är fiktiva. Siffrorna hänger ihop: 9 bolag i Pågående sälj, 6 identifierade väntar, 11 förslag, 7 möten senaste 30 dagarna. Datum och vecka i toppfältet räknas live.
- **Kostnad per körning i USD** visas medvetet inte för kunden.
- **Grönt som text** använder `--greenText` (mörkare i ljust läge, ljusare i mörkt) för att klara kontrast 4,5:1. `--green` är bara för fyllda knappar och ytor.
- **Utkast från Erik** säger alltid att det är en AI-kollega (öppning och signatur). Inga påhittade rekommendationer eller kontakter.
- **Mobil/surfplatta** är inte designat än – sidorna är byggda för ≥ 1024 px.
- **Prototypen** (`prototype/`) har inline-stilar och en liten egen körmiljö (`dc-runtime.js`). Den är facit för utseende och beteende, inte kod att kopiera. Ren markup finns i `handoff/`.

## Öppna prototypen lokalt

Dubbelklicka på `prototype/Main.html`. Alternativt:

```sh
npx serve .   # öppna sedan http://localhost:3000/prototype/Main.html
```
