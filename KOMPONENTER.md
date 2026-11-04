# Komponentkarta: ny design jämfört med beta.aikollegorna.se

Till Tobias. Det här dokumentet listar varje komponent i dashboarden och var den finns i dagens beta och i den nya designen, så att du kan bygga om beta i den nya designen.

**Underlag:** genomklickning av beta den 4 nov 2026 (endast läsning, inga körningar startade), jämförd med filerna i `design/` och `prototype/`. Vi har inte tittat i koden, så en del kan finnas i backend utan att synas i gränssnittet.

## Hur du läser tabellerna

| Märkning | Betyder | Vad du gör |
|---|---|---|
| **SAMMA** | Finns i beta och på samma plats i nya designen | Byt bara utseende |
| **FLYTTAD** | Finns i beta, men på en annan plats eller i en annan form i nya designen | Flytta komponenten och behåll funktionen |
| **NY** | Finns i nya designen men inte i beta | Bygg. Typ: **UI** (bara frontend), **API** (ny endpoint eller nytt fält) eller **Agent** (ny logik i Erik) |
| **SAKNAS I DESIGN** | Finns i beta men inte i nya designen | Behåll från beta i nytt utseende. Vi lägger in den i designen eller fattar ett beslut |

Skärmbilder av varje sida och de viktigaste lägena finns i `handoff/screens/`. Rutterna nedan är betas egna.

---

## Nytt i beta sedan förra genomgången (26 okt)

Detta har tillkommit i beta. Den nya designen täcker det bara delvis:

| Nytt i beta | Var i beta | Läget i nya designen |
|---|---|---|
| Banner "Svar – 1 svar väntar på att besvaras" + "Läs svaren" | Start, länk till `/erik/companies/:id#conversation` | **FLYTTAD:** länken "Läs svarsutkast" på Start. Räknaren för antal svar saknas i designen (se Start) |
| Svarsutkast, körningen "Draft answer to …" | Förslag, Körningar | **SAMMA** som mejlutkast i Förslag, men svarsutkast har ingen egen markering. Förslag: märk kortet "SVAR" |
| Kontaktförslag ("Nytt · Kontakt": namn, titel, motivering, Godkänn / Redigera / Avvisa) | Förslag | **SAKNAS I DESIGN** (se Förslag) |
| Filter i Förslag: Alla / Kontakter / Utkast | Förslag | **FLYTTAD:** designen har Alla / Mail / LinkedIn / Anbud (se Förslag) |
| "Konversation": tråd per kontakt med Skickat, "Du, från din brevlåda", inkommande svar och status "Väntar på ditt svar" | Företagssidan | **FLYTTAD:** Kundkort › Säljkort › "All dialog" (trådar) och "Erik väntar på dig" |
| Arbetsflöde som träd per företag (Enrich › Bedöm › Find contacts › Hitta på LinkedIn, med skäl när ett steg hoppas över) | Företagssidan | **FLYTTAD:** Kundkort › Research › "Eriks arbete med …" |
| Steg-status "Följs inte" i stegaren | Företagssidan | **SAKNAS I DESIGN:** designen har bara KLART / ERIK ÄR HÄR / NÄSTA |
| Status "Kontaktat" på bolagskort | Pågående | **SAKNAS I DESIGN:** designen har BERIKAT / I DIALOG / GODKÄNT |
| Gmail: "Erik läser svaren … var femte minut. Senast läst …" | Integrationer | **SAKNAS I DESIGN** (se Integrationer) |
| LinkedIn ansluten: "Erik agerar som [namn] — [LinkedIn-url]", ConnectSafely konto-id, Spara konto-id, Ta bort | Integrationer | **SAKNAS I DESIGN** för läget Ansluten (se Integrationer) |
| "Avsändarens namn" och "Avsändarens titel" | Inställningar › Företag | **SAMMA** (finns i designen) |
| Gräns för profiler: "2 av 10 · 1 av 3 aktiva" | Kundprofiler | **SAMMA** (finns i designen) |
| Sidan "Kom igång med Moa" (`/moa/setup`, "Låt Moa läsa er webbplats", knappen Läs vår webbplats) | Egen sida | **SAKNAS I DESIGN** (se Moa) |
| Egen förslagssida `/proposals/:id` (Ämne, Meddelande, Godkänn och ställ i kö, Godkänn, Be Erik skriva om, Kom ihåg, Anledning, Visa körning) | Förslag › Läs den | **FLYTTAD:** öppnas inne i listan i designen. Några delar saknas (se Förslag) |

---

## 1. Globalt: meny och skal (alla sidor)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Menyval Start, Förslag, Identifierade företag, Pågående, Körningar, Kundprofiler, Arbetsflöden, Integrationer, Inställningar | SAMMA | Sidomeny | Sidomeny, samma ordning och samma två grupper (kollegans namn / Inställningar) | Nytt utseende: 272 px bred, vit, högerkant `--border`, valen är 36 px höga |
| "Pågående" | FLYTTAD | Heter "Pågående" | Heter "Pågående sälj" | Byt text |
| Kollegaväljaren ("Arbetar med Erik. Byt kollega") | FLYTTAD | Överst. Listan visar bara Erik | Överst: foto + namn + blå etikett (SÄLJARE). Listan visar Erik, Moa (EJ AKTIV) och "+ Lägg till kollega". Väljer man Moa ändras rubriker och gruppnamn i menyn | UI. Visa Moa även när hon inte är aktiv och låt "Lägg till kollega" gå till Inställningar |
| Eriks och Moas foton | NY (UI) | Bokstäverna "E"/"M" | Foton i menyn, kollegaväljaren och på Start | Filer i `assets/` |
| Räknare i menyn | FLYTTAD | Bara Förslag har räknare (7) | Förslag **och** Identifierade företag | API: antal väntande företag |
| Fäll in / ut menyn | NY (UI) | – | Knapp bredvid kollegaväljaren. Infälld meny är 72 px med bara ikoner | Spara valet per användare (localStorage räcker) |
| Moa-kortet i menyn ("Kom igång med Moa") | NY (UI) | – | Ovanför användaren | Länka till `/moa/setup` |
| "Ge oss feedback" | NY (UI + beslut) | – | Menyval under Inställningar-gruppen | Beslut: vart ska feedbacken gå (mejl, Slack, formulär)? |
| Användaren längst ner (bolag, e-post) | SAMMA | Bolag, e-post och Logga ut | Namn och e-post | – |
| Logga ut | FLYTTAD | I menyn under användaren | Inställningar › Konto | Flytta |
| Statusen "Erik är aktiv" uppe till höger | SAKNAS I DESIGN | Grön pill på alla sidor | Finns inte | Beslut: visa den som en liten blå punkt vid kollegans namn i menyn, eller ta bort den |
| Brödsmulan "AI Kollegorna" ovanför rubriken | SAKNAS I DESIGN | Startsidan | Finns inte, avsiktligt | Ta bort |
| Sök | – | Finns inte | Borttaget, avsiktligt | – |
| Mobil | NY (UI) | – | Under 900 px blir menyn en låda som öppnas med ☰ och stängs vid klick utanför | – |

## 2. Start (`/`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Bannern "Väntar på dig – 7 saker att granska" + Granska förslag | FLYTTAD | Lila banner överst | Stor rubrik **"11 saker väntar på dig"** (Plex Serif 42 px) och blå pill **"Granska allt"** som leder till `/proposals` | Talet ska vara antal väntande förslag (samma som i menyn) |
| Bannern "Svar – x svar väntar" + Läs svaren | FLYTTAD | Egen banner | Textlänken **"Läs svarsutkast"** bredvid Granska allt | Länka till `/proposals` med filtret Utkast/Svar. Visa gärna antalet i texten: "Läs 1 svarsutkast" |
| "Senaste förslagen" (3 st + Visa alla) | FLYTTAD | Kort på Start | Borttaget från Start; finns i Förslag | Ta bort från Start |
| "Företagssökning" (profil, senaste/nästa sökning, hittade) | FLYTTAD | Kort på Start | Textlänken **"6 nya företag"** till Identifierade företag. Sökningarna visas i Kundprofil › "Eriks sökningar" (finns redan i beta) | Talet ska vara antal väntande i Identifierade företag |
| "Sändning" (fönster, tidszon, Gmail) | FLYTTAD | Mörkt kort på Start | Inställningar › E-post och Integrationer (finns redan i beta) | Ta bort från Start |
| Inställningar-genväg | NY (UI) | – | Textlänk "Inställningar" | – |
| Erik-kortet | FLYTTAD | Kort längst ner | Erik finns i kollegaväljaren | Ta bort från Start |
| Moa-kortet + "Kom igång och aktivera" | FLYTTAD | Kort längst ner | Liten ruta "Moa · Webbredaktör · kom igång" | Länka till `/moa/setup` |
| Rutan "Pågående sälj – 9 bolag på väg mot möte" | NY (UI) | – | Liten ruta till `/erik/ongoing` | Talet = antal i Pågående (34 i beta idag) |
| Start när Moa är vald | NY (UI) | – | Rubriken blir "Vad ska Moa göra idag?" | – |

## 3. Förslag (`/proposals`, `/proposals/:id`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Rubrik + antal ("7 väntar") | SAMMA | "Förslag 7 väntar" | "11 att godkänna" + "Ingenting skickas utan ditt ok." | Beslut om ordval; samma data |
| Kort per förslag med typetikett, rubrik och förhandstext | SAMMA | Etiketter Utkast/Nytt + E-post/Kontakt | Etikett i mono (E-POST / LINKEDIN / ANBUD) + "Till: mottagare" | – |
| Rubrik per körning ovanför kortet ("Draft answer to …" · Erik · datum · 1 sak) | SAKNAS I DESIGN | Grupperar förslag per körning | Kortet står ensamt, utan körningsrubrik | Beslut: grupperingen kan tas bort. Visa i så fall datum på kortet. Rubrikerna är på engelska i beta (bugg) |
| Läs den / Avvisa | SAMMA | Knappar på kortet | Samma | – |
| Filter | FLYTTAD | Alla / Kontakter / Utkast | Alla / Mail / LinkedIn / Anbud | Förslag: **Alla / Utkast / Kontakter / LinkedIn / Anbud**. Visa bara de flikar som har innehåll |
| **Kontaktförslag** (namn + titel, motivering, fältet Titel, Godkänn / Redigera / Avvisa) | SAKNAS I DESIGN | Kort av typen "Kontakt" | Finns inte | **Behåll från beta.** Bygg som mejlkortet, men med personikon, "Namn, titel" som rubrik, motiveringen som förhandstext och knapparna Godkänn (blå) / Redigera / Avvisa |
| Förslaget öppnat | FLYTTAD | Egen sida `/proposals/:id` | Öppnas i listan. Knappar: Godkänn och skicka, Redigera, Be Erik skriva om, Stäng, Avvisa | Behåll rutten för djuplänkar; visa innehållet i listan |
| Ämne + Meddelande redigerbart | SAMMA | Fält på förslagssidan | "Redigera" gör texten redigerbar | – |
| "Godkänn och ställ i kö" och "Godkänn" (två knappar) | SAKNAS I DESIGN | Två lägen | Bara "Godkänn och skicka" | Beslut: behövs båda? Om ja, lägg "Ställ i kö" som sekundär knapp |
| Be Erik skriva om + "Kom ihåg till framtida mejl" | SAMMA | På förslagssidan | Finns i öppnat kort | – |
| Anledning (valfritt) vid avvisning | SAKNAS I DESIGN | På förslagssidan | Inte i Förslag (finns i Underlag) | Behåll: visa fältet när man klickar Avvisa |
| Visa körning | SAKNAS I DESIGN | Länk på förslagssidan | Inte i Förslag | Behåll som textlänk i öppnat kort |
| Granska en i taget | NY (UI) | – | Knapp uppe till höger, ett förslag i taget | – |
| Träna Erik (fritext) + stjärnbetyg 1–5 | NY (UI + Agent) | – | Visas när kortet är öppet | Spara betyg och feedback; Agent använder dem |
| LinkedIn-förslag (kontaktförfrågan, meddelande) | NY (Agent + API) | – | Egen kortyp | Via ConnectSafely |
| Anbudsförslag ("Godkänn och lämna in") | NY (Agent) | – | Egen kortyp | Anbudsfunktionen |

## 4. Identifierade företag (`/erik/companies`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Flikar | FLYTTAD | Företag / Uteslutna | Bolag / Befintliga kunder / Exkluderade (segmentväljare) | Byt namn och lägg till fliken Befintliga kunder (samma data som Inställningar › Befintliga kunder) |
| Godkänn alla | SAMMA | Knapp | Blå pill "Godkänn alla" | – |
| Per bolag: Godkänn / Uteslut / Visa underlag | SAMMA | Knappar på kortet | **Acceptera** / **Exkludera** / **Visa underlag** | Beslut: välj ett ordpar och använd det överallt (beta säger Godkänn/Uteslut) |
| Matchning x/10 | SAMMA | Siffra på kortet | "ICP-matchning", stapel + 8/10 | – |
| Layout | FLYTTAD | Rutnät, 5 kort per rad | En lista, en rad per bolag, i ett kort | – |
| SNI-kod + bransch, bedömningstext, ort · anställda · domän | SAKNAS I DESIGN | På varje kort | Raden visar namn, bransch, kundprofil och signal | Beslut: lägg ort · anställda · domän som en grå rad under namnet. Bedömningen syns i Visa underlag |
| Signal ("LinkedIn-trigger: ny CRO") | NY (API) | – | Egen kolumn | Fält: vilken signal som hittade bolaget |
| Sidopanel Kundprofiler (antal per profil + Hantera) | NY (UI) | – | Till höger | Räkna bolag per profil |
| Återinför på exkluderade | NY (API) | – | Knapp i fliken Exkluderade | Ta bort uteslutningen |
| Kvitto "Accepterad – Erik researchar" + Ångra | NY (UI) | – | På raden | – |
| Tom lista | SAMMA | "Inget väntar. Det Eriks sökningar hittar dyker upp här …" | – | Behåll betas text i nytt utseende |

## 5. Visa underlag (granska ett förslag fält för fält)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Kryssa i/ur fält, klicka för att ändra, källcitat + länk + hämtdatum, Anledning, Godkänn/Avvisa | SAMMA | Visa underlag | `design/Underlag.dc.html`, alla fält i ett kort, citat i grå brunn | – |
| Bläddra mellan förslag i samma körning ("Förslag 1 av 3") | NY (UI) | – | Uppe till höger | – |
| Beslutsrad fast i nederkant ("7 av 7 fält tas med") | NY (UI) | – | Fast rad | – |
| "Ändrad av dig" + Återställ per fält | NY (UI) | – | Per fält | – |

## 6. Pågående sälj (`/erik/ongoing`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Bolagskort: matchning, kundprofil, status, bransch, bedömning, ort · anställda · domän | SAMMA | Rutnät med kort | Lista med rader i ett kort, samma innehåll | – |
| Status | FLYTTAD | **Kontaktat**, Berikat, Godkänt | BERIKAT, I DIALOG, GODKÄNT | Lägg till **KONTAKTAT** i designens etikett |
| Åtgärder › Lägg till ett företag… | SAMMA | Meny | Samma | – |
| Antal ("34 företag") | SAMMA | Under rubriken | Bredvid rubriken i mono | – |
| Stegfilter Alla / Research / Första kontakt / Dialog / Möte bokat | NY (API) | – | Segmentväljare | Steg per bolag |
| Stapel i 6 steg per bolag | NY (API) | – | På raden | Steg per bolag |
| Sidopanel: filtrera på kundprofil + "x möten bokade av Erik" | NY (UI + API) | – | Till höger | – |

## 7. Företagssidan / Kundkort (`/erik/companies/:id`)

Störst skillnad. Beta har en lång sida. Designen delar upp den i tre flikar: **Research**, **Säljkort** och **Överlämning till sälj**.

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Rubrik + "Matchning x/10 · säkerhet % · bedömt datum" | SAMMA | Överst | Överst, med blå etikett MATCHNING 8/10 | – |
| Åtgärder: Bedöm igen, Berika, Hitta kontakter, Hitta på LinkedIn, Uteslut | SAMMA | Meny | Meny + knapp "Uppdatera research" | – |
| Stegaren "Här är Erik" (6 steg) | FLYTTAD | Överst på sidan | Säljkort-fliken | – |
| Steg-status "Följs inte" | SAKNAS I DESIGN | Visas för steg som inte gäller | KLART / ERIK ÄR HÄR / NÄSTA | Lägg till FÖLJS INTE (grå etikett) |
| Språk i e-post per företag (+ Spara) | SAMMA | Rullmeny | Finns | – |
| Fakta om företaget (källa per fält) | FLYTTAD | Egen ruta | Research › "Statisk research" › Identitet | – |
| Eriks bedömning | FLYTTAD | Text | Research › "Därför är det här en bra matchning" | Agent: kort sammanfattning + 3–4 punkter |
| Kontakter (namn, titel, e-post, telefon) + Lägg till kontakt för hand + "Skriv utkast" | SAMMA | Tabell | Research › Kontakter, knappen heter "Skriv mejl" | – |
| E-postutkast (på företagssidan) | FLYTTAD | Egen ruta | Utkast ligger i Förslag; Säljkort › "Erik väntar på dig" för svar | – |
| **Konversation** (tråd per kontakt) | FLYTTAD | Egen ruta: Skickat · Du, från din brevlåda · inkommande svar · "Väntar på ditt svar" · Visa mejlet / Visa tidigare meddelanden | Säljkort › "All dialog" (en tråd per kontakt, fälls ut) och "Erik väntar på dig" | Visa även "Du, från din brevlåda" (mejl du skickat själv) och statusen "Väntar på ditt svar" som etikett på tråden |
| Arbetsflöde (träd med steg, status och skäl) | FLYTTAD | Egen ruta | Research › "Eriks arbete med [bolag]" | Skälen är på engelska i beta (bugg) |
| Senaste körningar | FLYTTAD | Lista | Ingår i "Eriks arbete" | – |
| Kostnad | SAKNAS I DESIGN, avsiktligt | Visas i USD | Visas inte för kund | Intern admin, i SEK |
| Dynamisk research (signaler, "Stämmer inte?") | NY (Agent) | – | Research | Signalbevakning + flagga |
| Källor Erik söker i (+ Lägg till) | NY (API + Agent) | – | Research | URL-lista per bolag |
| Personerna (roll, driv, "Exkludera – Erik kontaktar inte") | NY (Agent) | – | Research | – |
| "Vet du något Erik inte hittat?" | NY (API + Agent) | – | Research | – |
| Infoboxar: Eriks mål, Lämnas över till, Möte bokat/förslag | NY (API) | – | Säljkort | – |
| Säljstrategi: Feardriven / Motivationsdriven + Instruera Erik | NY (Agent) | – | Säljkort | – |
| Eriks plan för mötet (VEM / VINKEL / HUR) | NY (Agent) | – | Säljkort | – |
| Överlämning till sälj: mötesbrief dagen före + "Lägg till en rad" | NY (Agent + schemaläggning) | – | Egen flik | – |
| "Säljer för: [bolag]" | NY (UI) | – | Uppe till höger | – |

## 8. Körningar (`/runs`, körningsdetalj)

> **Beslut (Anton, 4 nov):** Körningar ska **inte synas för kunden**. Sidan och körningsdetaljen blir en intern adminvy, där kostnad visas i **SEK**. I kunddashboarden ska menyvalet Körningar och länkarna "Visa körningen" / "Alla körningar" därför tas bort. Designen visar dem fortfarande; tabellen nedan gäller den interna vyn.

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Tabell: uppgift, status, startad, fel | SAMMA | Tabell | Tabell i kort med grått huvud | – |
| Kolumnen Kostnad | FLYTTAD | Visas i USD för kunden | Borttagen för kund | Intern admin, i SEK |
| Uppgiftsnamn | FLYTTAD | Engelska: "Draft answer to", "Find contacts at", "Enrich" | Svenska: "Svara …", "Hitta kontakter på …", "Berika …" | Översätt (bugg i beta) |
| Fel | FLYTTAD | Rå text ("… is excluded, so Erik …") | Begriplig text + "Försök igen" | Felmappning + omstart |
| Filter (Alla / Pågår / Väntar på dig / Klara / Misslyckade) + fyra siffrekort | NY (API) | – | Överst | Aggregering |
| Körningsdetalj: modellanrop, tokens, sökningar, hämtade sidor, Borttagna värden, Granska förslaget | SAMMA | Detaljsida | "Så gick det till", Hämtade sidor, Borttagna värden; teknisk info bakom "Teknisk information" | – |

## 9. Kundprofiler (`/erik/icps`, `/erik/icps/:id`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Lista med profiler, Aktiv, branscher, beskrivning | SAMMA | Lista | Kort i tre kolumner över hela bredden | – |
| "2 av 10 · 1 av 3 aktiva" | SAMMA | Under rubriken | Finns | – |
| Ny profil | FLYTTAD | Åtgärder-meny / `?new=1` | Kortet "Ny kundprofil" sist i rutnätet | – |
| Fälten namn, beskrivning, branscher, regioner, min/max anställda, nyckelord, roller, uteslut | SAMMA | Kommaseparerad text | Taggfält (Enter lägger till, × tar bort) | Samma data, listor i stället för sträng |
| "Nyckelord" | FLYTTAD | Heter Nyckelord | Heter "Signaler att leta efter" | Byt text |
| Aktiv, Ta bort profilen, Spara profilen | SAMMA | Kryssruta + knappar | Reglage + knappar | – |
| Eriks sökningar (senaste, nästa, "Pausad: profilen är inaktiv") | SAMMA | Överst | Sidokolumn | – |
| "Så läser jag profilen" | NY (UI) | – | Sidokolumn, uppdateras medan man skriver | Kan göras i frontend |

## 10. Arbetsflöden (`/workflows`, `/workflows/company-approved`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Flödet "Hitta företag", 6 steg, "Körs nu", senaste körningar med skäl | SAMMA | Lista + detalj | Ett kort som är öppet direkt, steg i ett kort | – |
| Per steg: läge, max turer, tidsgräns, regler, när steget körs | SAMMA | Detalj | "Regler för det här steget" fälls ut | – |
| Lägga till/ta bort regler per steg i UI | NY (API) | – | I stegets utfällning | – |
| Skäl på svenska | FLYTTAD | Engelska ("LinkedIn isn't connected, so Erik didn't look.") | Svenska | Översätt (bugg i beta) |

## 11. Integrationer (`/integrations`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Gmail: Ansluten som, Koppla från | SAMMA | Kort | Kort, kontot i grå brunn | – |
| Gmail: Anslut igen | SAKNAS I DESIGN | Knapp | Bara Koppla från | Lägg till som sekundär knapp bredvid Koppla från |
| Gmail: "Erik läser svaren … var femte minut. Senast läst …" | SAKNAS I DESIGN | Text i Gmail-kortet | Finns inte | Lägg till som rad i mono under kontot: "Läser svar var 5:e minut · senast 15.40" |
| Outlook spärrad när Gmail är anslutet | SAMMA | Text | Text i grå brunn | – |
| LinkedIn, läge Ansluten: "Erik agerar som [namn] — [url]", konto-id, Spara konto-id, Ta bort | SAKNAS I DESIGN | Visas | Designen visar bara läget Inte ansluten (Anslut LinkedIn) | Bygg läget Ansluten som Gmail-kortet: namn + url i brunn, Ta bort som sekundär knapp, konto-id bakom "Ändra" |
| Tre kort i rad över hela bredden | NY (UI) | – | Tre lika breda kort | – |

## 12. Inställningar (`/settings/*`)

| Flik / komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| Åtta flikar (Företag, Erik, Moa, Arbetsyta, E-post, Kontakta inte, Befintliga kunder, Konto) | SAMMA | Egna rutter | Segmentväljare. Varje avsnitt är ett kort med rubrik till vänster och fält till höger | – |
| Företag: profilfälten + Avsändarens namn/titel | SAMMA | – | – | – |
| Erik: tonalitet, signatur, lägsta matchning, e-postregler | SAMMA | Siffra 0–10 | Reglage 0–10 med förklaring; varning på oärliga regler | NY (UI) för reglage och varning |
| Moa: "inte igång än" | SAMMA | – | – | – |
| Arbetsyta: namn, språk, tidszon, Pausa alla | SAMMA | – | – | – |
| Månadsbudget för AI | NY (API) | Bara texten "ingen gräns" | Går att sätta | Budgetgräns + stopp |
| E-post: dagar, från/till, "Mejl kan inte skickas från den här tiden" | SAMMA | Kryssrutor | Segmentknappar för dagar | – |
| Kontakta inte, Befintliga kunder (CSV) | SAMMA | – | – | LinkedIn-länkar normaliseras (NY, UI) |
| Konto: inloggad som, gränssnittsspråk | SAMMA | – | – | – |
| Konto: Logga ut | FLYTTAD | I menyn | Här | – |
| Konto: Byt lösenord | NY (Auth) | – | Knapp | – |

## 13. Moa (`/moa/setup`)

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| "Kom igång med Moa" – "Låt Moa läsa er webbplats" + Läs vår webbplats | SAKNAS I DESIGN | Egen sida | Ingen egen sida; länkarna går till Inställningar › Moa | **Behåll betas sida.** Bygg den som en vanlig sida: rubrik i Plex Serif, ett kort med texten och blå pill "Läs vår webbplats". Peka Moa-länkarna i menyn och på Start hit |

## 14. Logga in

| Komponent | Status | Beta | Ny design | Att göra |
|---|---|---|---|---|
| E-post, lösenord, Glömt lösenordet?, Skapa konto | SAMMA | – | Centrerat, utan kort, blå pill | – |
| Visa/dölj lösenord, fel direkt i formuläret, återställningsflöde | NY (UI + Auth) | – | Finns | – |

---

## Buggar i beta att rätta samtidigt

1. **Engelska texter mot kund:**
   - Förslagsrubriker och körningsnamn: "Draft answer to", "Find contacts at", "Draft email to", "Enrich".
   - Skäl i arbetsflödet: "LinkedIn isn't connected, so Erik didn't look.", "matches its customer profile 3/10, under the 5/10 …", "… is excluded, so Erik …".
2. **Kostnad syns för kunden** under Körningar och på företagssidan. Kostnad ska anges i SEK och bara visas internt (se avsnitt 8).

## Beslut vi behöver från dig eller Anton

- **Ordval:** Godkänn/Uteslut (beta) eller Acceptera/Exkludera (designen)?
- **Förslag:** ska förslagen fortsätta grupperas per körning? Behövs både "Godkänn och ställ i kö" och "Godkänn"?
- **Statusen "Erik är aktiv":** ska den visas i menyn eller tas bort?
- **"Ge oss feedback":** vart ska det gå?
- **Moa:** ska hon synas i kollegaväljaren innan hon är aktiverad (designen säger ja)?
