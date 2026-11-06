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
  - IBM Plex Sans för all text och UI.
  - IBM Plex Serif, vikt 500, **bara** för sidrubriken (h1): 42 px på Start, 30 px på övriga sidor.
  - IBM Plex Mono för siffror, datum, adresser och etiketter. Alla siffror i tabeller och siffrekort har tabellsiffror (`font-variant-numeric: tabular-nums`).

  Inter, Geist och Rosario är medvetet bortvalda: designskillarna flaggar dem som typiska för AI-genererade gränssnitt.
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

## Regler: så undviker vi AI-looken

De här reglerna gäller alla sidor och allt som byggs framöver. Bryter något mot en regel är det en bugg.

1. **Inga gradienter och inget glow.** Platta färger. Skugga bara på det som svävar ovanpå sidan: menyer, kollegaväljaren, feedback-rutan och mobilmenyn. Fokusringar på fält räknas inte, de behövs för tillgänglighet.
2. **Riktiga ikoner, aldrig emojis.** Linjeikoner (1,5 px streck, 16–20 px) i gränssnittet. Varumärken visas med sina officiella loggor (`assets/logo-*.png`).
3. **Inga etiketter som inte betyder något.** En etikett ska ändra vad användaren gör eller förstår. Har alla rader samma etikett ska den bort. Exempel vi tagit bort: "NY" på Moa-kortet, "Nytt" på varje förslag i Underlag, "Körs automatiskt" och "Avgör på egen hand" på arbetsflödesstegen. Kvar finns till exempel typ (E-POST/LINKEDIN/ANBUD), status (BERIKAT, I DIALOG) och det som kräver handling (VÄNTAR PÅ DITT GODKÄNNANDE, ÅTGÄRD BEHÖVS).
4. **Inga kort i kort.** Ett kort har ram. Det som ligger inuti har ingen egen ram, utan är en grå brunn (`--subtle`), en rad med tunn avdelare eller ett vanligt fält. Undantaget är formulärfält, som alltid har ram.
5. **Det som hör ihop står ihop.** Status står bredvid det den gäller, inte i ett annat hörn. Exempel: "Aktiv" står på samma rad som profilnamnet, och "Ansluten" på samma rad som Gmail. Knappar står vid det de påverkar.
6. **Inre hörn följer det yttre.** Inre radie = yttre radie − avståndet till kanten (minst 4 px). Det gäller när något ligger nära kanten, till exempel rader i en meny (12 − 6 = 6 px) eller fältet i feedback-rutan (14 − 8 = 6 px). Ligger något långt in (16 px eller mer) räcker 8 px. Runda pill-knappar är undantagna.
7. **Ingen animation som loopar.** Rörelse bara när något händer: hover, öppna/stänga och en pil som flyttar sig 2 px. Max 200 ms. Inga pulserande prickar, ingen shimmer och inga snurrande ikoner som pynt.
8. **En platt accentfärg, och färg betyder något.** Blått bara på primärknappen, på status som kräver något och på valt läge. Ingen gradient på knappar, staplar eller diagram.
9. **Inga färgade ikonrutor.** Ingen pastellruta per kort eller rad. I ett siffrekort är siffran huvudsaken. Initialer och ikoner visas bara där de ersätter något, till exempel ett foto av en person.
10. **Hierarki bland siffror.** Aldrig en rad med lika stora kort med samma vikt. Ett huvudtal är stort, resten är mindre och grå (`.stats.lead`, se Körningar).
11. **Tunna kanter, mindre radie på mindre delar.** 12 px på kort och stora ytor, 8 px på brunnar, fält och knappar, 4–6 px på etiketter, kryssrutor och chips. Inget över 14 px. Kort, fält, etiketter och diagram har ingen skugga.
12. **Riktig text och siffror med form.** Inga platshållare ("[namn]", "Välkommen tillbaka", emojis). Varje förändring säger vilken period den gäller ("senaste 7 dagarna"). Alla siffror har tabellsiffror (`font-variant-numeric: tabular-nums`). Förändring över tid visas som en liten linjegraf eller som text med period, inte som en procentetikett. Ingen trend hittas på där data saknas.

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
- **Storlek:** innehållsytan på undersidorna visas i 115 % på dator och 106 % på mobil (`zoom` på `.main`). Sidomenyn och Start har sina mått som de är. I riktig kod: skala hellre upp tokens med 1,15 än att använda `zoom`.
- **Rutnät:** kortrutnät (Integrationer och Kundprofiler) fyller hela bredden i lika breda kolumner med lika höga kort.
- **Sidhuvud:** rubriken (Plex Serif) står först, med en kort förklarande rad under. Primärknappen sitter till höger.

## Rekommenderad ordning

1. Tokens och typsnitt, sidomenyn och skalet (påverkar alla sidor).
2. Start, Förslag (inklusive kontaktförslagen som finns i beta) och Identifierade företag.
3. Pågående sälj och Företagssidan/Kundkort. Börja med fliken Research, som mest är omflyttning av det som redan finns i beta.
4. Körningar, Kundprofiler, Arbetsflöden, Integrationer, Inställningar, Moa och Logga in.
5. Det som är NY med Agent- eller API-jobb i KOMPONENTER.md: Säljkort, Överlämning, signaler, Träna Erik och så vidare.

## Öppna prototypen lokalt

Öppna `prototype/Main.html` direkt i webbläsaren. Den behöver internet för typsnitten från Google Fonts. All data är påhittad.
