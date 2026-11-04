# Överlämning: så bygger du den nya designen

Den här designen ersätter utseendet i beta.aikollegorna.se. Funktionen är densamma. Läs **KOMPONENTER.md** först: där står vad som är samma, vad som är flyttat, vad som är nytt och vad som saknas.

## Filer

| Mapp / fil | Innehåll |
|---|---|
| `prototype/*.html` | Alla 14 sidor, körbara i vanlig webbläsare. Börja med `prototype/Main.html`. Allt är klickbart: menyn, kollegaväljaren, fäll in/ut och flikar |
| `handoff/tokens.css` | Alla designvärden: färger, typsnitt, storlekar, radier och layout |
| `handoff/exa-shared.css` | Delade komponentstilar för alla sidor utom Start (knappar, kort, brunnar, flikar, etiketter, tabeller, fält, menyer) |
| `handoff/screens/` | Skärmbilder per sida, dator (`-desktop.jpg`) och mobil (`-mobil.jpg`), plus lägen: kollegaväljaren, infälld meny, Moa vald, Kundkort Säljkort och Överlämning, öppnat förslag, alla flikar i Inställningar |
| `design/*.dc.html` | Källfilerna i Claudes designformat. Sidspecifik CSS ligger mellan `/* @page */` och `/* @endpage */` |
| `assets/` | Eriks och Moas foton |
| `ERIK-PIPELINE.md` | Hur Erik jobbar från lead till möte. Oförändrad från förra versionen |

## Designspråket i korthet

Förebilden är Exas dashboard (dashboard.exa.ai): vitt, platt och luftigt, med få element per kort.

- **Bakgrund:** vit. Ingen gradient, inga skuggor utom på menyer och popovers.
- **Kort:** 1 px kant `#E6E6E8`, radie 12 px, 16–22 px luft. Data ligger i grå "brunnar" (`#F8F8F9`, radie 8 px) med mono-text.
- **Typsnitt:**
  - Inter för all text.
  - Rosario 400 bara för sidrubriken (h1): 52 px på Start, 32 px på övriga sidor.
  - Geist Mono för siffror, datum, adresser och etiketter.

  Exa använder ABC Diatype och ABC Arizona Flare, som är kommersiella. Köper vi licens byter vi bara `--sans` och `--display`.
- **Färg:**
  - Bara två blå:
    - `#3E1FF3` för primärknappen (rund pill, en per sida).
    - `#1326D2` för etiketter och status, på `#EEF2FA`.
  - Inget grönt.
  - Rött bara för fel.
- **Knappar:**
  - Primär: blå pill.
  - Sekundär: vit med grå kant, radie 8 px, 32 px hög (40 px på mobil).
  - Textknappar har en klickyta på minst 32 px.
- **Flikar:** segmentväljare på grå botten. Vald flik är vit. Antal står i mono.
- **Etiketter:** mono, VERSALER, 11 px, radie 4 px. Blå för status som betyder något (SÄLJARE, MATCHNING 8/10), grå för övrigt.
- **Text:** minst 13 px för sekundär text och 12 px för metadata. Kontrast AA överallt (`--fg-3` är 5,6:1).

## Sidomenyn (samma på alla sidor)

1. Överst sitter kollegaväljaren: foto 24 px, namn, blå etikett med roll och en pil. Klick öppnar en lista med Erik, Moa och "Lägg till kollega". Bredvid sitter knappen för att fälla in menyn.
2. Under den kommer Start och gruppen med kollegans namn: Förslag (räknare), Identifierade företag (räknare), Pågående sälj och Körningar.
3. Sedan gruppen Inställningar: Kundprofiler, Arbetsflöden, Integrationer och Inställningar.
4. Efter en linje kommer "Ge oss feedback".
5. Längst ner sitter Moa-kortet och användaren.

- **Mått:** 272 px utfälld, 72 px infälld.
- **Menyval:** 36 px höga, 16 px text, 18 px ikoner.
- **Valt menyval:** grå bakgrund `#F3F3F4`.
- **Under 900 px:** menyn blir en låda som öppnas med ☰ och stängs vid klick utanför.

## Innehållsytan

- **Bredd:** full bredd bredvid menyn, med 48 px luft (16 px på mobil). Ingen maxbredd, utom att formulärfält stannar på 720 px.
- **Rutnät:** kortrutnät (Integrationer och Kundprofiler) fyller hela bredden i lika breda kolumner med lika höga kort.
- **Sidhuvud:** rubriken (Rosario) står först, med en kort förklarande rad under. Primärknappen sitter till höger.

## Rekommenderad ordning

1. Tokens och typsnitt, sidomenyn och skalet (påverkar alla sidor).
2. Start, Förslag (inklusive kontaktförslagen som finns i beta) och Identifierade företag.
3. Pågående sälj och Företagssidan/Kundkort. Börja med fliken Research, som mest är omflyttning av det som redan finns i beta.
4. Körningar, Kundprofiler, Arbetsflöden, Integrationer, Inställningar, Moa och Logga in.
5. Det som är NY med Agent- eller API-jobb i KOMPONENTER.md: Säljkort, Överlämning, signaler, Träna Erik och så vidare.

## Öppna prototypen lokalt

Öppna `prototype/Main.html` direkt i webbläsaren. Den behöver internet för typsnitten från Google Fonts. All data är påhittad.
