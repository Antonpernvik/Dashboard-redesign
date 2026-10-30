# Gap-analys: Dashboard v2 (design) mot beta.aikollegorna.se (kod)

> **Till Claude:** Klistra in hela dokumentet i en chatt som har tillgång till kodbasen för beta.aikollegorna.se. Läs instruktionen nedan och gå igenom varje punkt mot koden.

---

## Instruktion

Du hjälper Tobias, CTO på Ai Kollegorna, att planera bygget av den nya kunddashboarden (Dashboard v2). Designen är klar och ligger i GitHub-repot `Antonpernvik/Dashboard-redesign`:

- `HANDOFF.md`: hur designen förs över
- `handoff/tokens.css` och `components.css`: designvärden och komponenter
- `prototype/*.html`: klickbara sidor
- `handoff/screens/*.jpg`: skärmbilder
- `SPEC.md`: vad varje knapp gör

Dokumentet listar allt i designen som vi bedömer **inte finns i beta idag**. Bedömningen bygger på en genomklickning av beta den 26 okt 2026, enbart läsning. Vi har inte tittat i koden, så en del kan finnas i backend utan att synas i gränssnittet.

**Gör så här för varje punkt (ID):**

1. Sök i kodbasen: komponenter, routes, API-endpoints, datamodeller och agentsteg.
2. Sätt status:
   - **Finns** – fungerar redan, bara nytt utseende behövs
   - **Delvis** – data eller logik finns men inte gränssnittet, eller tvärtom
   - **Saknas**
3. Ange filer/moduler som berörs, eller var det naturligt hör hemma.
4. Ange typ av jobb: **UI** (bara frontend), **API** (ny endpoint eller datafält) eller **Agent** (ny logik i Erik eller i modellorkestratorn).
5. Uppskatta storlek: S (< 1 dag), M (1–3 dagar) eller L (> 3 dagar).
6. Skriv frågor där designen är oklar eller krockar med hur systemet fungerar.

**Svara med en tabell per avsnitt:**

| ID | Status | Typ | Storlek | Filer / var | Kommentar |
|---|---|---|---|---|---|

Avsluta med:
- en förslagen byggordning (vad ger mest kundvärde först, och vad blockerar vad)
- risker
- en lista över punkter där designen bör ändras för att passa systemet

---

## 0. Baslinje – det här finns redan i beta

Detta ska **inte** flaggas som saknat. Det ska byggas om i ny design med samma funktion.

- **Meny:** Start, Förslag, Identifierade företag, Pågående, Körningar, Kundprofiler, Arbetsflöden, Integrationer och Inställningar. Kollegaväljaren "Byt kollega" och Logga ut finns också.
- **Start:**
  - bannern "Väntar på dig"
  - "Senaste förslagen"
  - "Företagssökning" per kundprofil, med senaste och nästa sökning
  - Sändning-kortet: fönster, tidszon och Gmail-status (visas inte längre på Start, finns under Inställningar › E-post)
  - Erik- och Moa-korten
- **Förslag:** lista med utkast, "Läs den" och Avvisa.
- **Identifierade företag:**
  - flikarna Företag och Uteslutna
  - Godkänn alla
  - per bolag: Godkänn, Uteslut och Visa underlag
  - matchning x/10
- **Visa underlag:**
  - kryssa i/ur varje fält
  - klicka för att redigera ett värde
  - källcitat, länk och hämtdatum per fält
  - "Anledning (valfritt)" vid Godkänn/Avvisa
- **Pågående:**
  - bolagskort med matchning, kundprofil, status Berikat/Godkänt och bedömning
  - Åtgärder › Lägg till ett företag…
- **Företagssida:**
  - stegaren "Här är Erik" i 6 steg, med "Så jobbar Erik här"
  - "Matchning x/10 · säkerhet % · bedömt datum"
  - Åtgärder: Bedöm igen, Berika företaget, Hitta kontakter, Hitta på LinkedIn och Uteslut företaget…
  - Språk i e-post per företag
  - Fakta om företaget med källa per fält, och Eriks bedömning
  - Kontakter (namn, titel, e-post, telefon) och "Lägg till kontakt för hand"
  - E-postutkast, E-post (kö/skickat), arbetsflöde-status och senaste körningar
- **Körningar:**
  - lista med uppgift, status, kostnad, startad och fel
  - körningsdetalj: modellanrop, tokens, webbsökningar, hämtade sidor, "Borttagna värden" och Granska förslaget
- **Kundprofiler och Kundprofil:**
  - fälten namn, beskrivning, branscher, regioner, min/max anställda, nyckelord, roller och uteslut
  - Aktiv, "Eriks sökningar" och Ta bort
- **Arbetsflöden:**
  - flödet "Hitta företag" med 6 steg
  - per steg: läge, max turer, tidsgräns, "Regler för det här steget" och när steget körs
  - "Körs nu" och senaste körningar med skäl till överhoppade steg
- **Inställningar (8 flikar):**
  - **Företag:** företagsprofil
  - **Erik:**
    - tonalitet och signatur
    - lägsta matchning innan Erik letar efter personer
    - e-postregler med ursprung ("Tillagd i Inställningar" / "Sparad från en omskrivning")
  - **Moa:** "inte igång än"
  - **Arbetsyta:** namn, språk, tidszon, texten "Månadsbudget: ingen gräns" och Pausa alla
  - **E-post:** sändningsfönster
  - **Kontakta inte:** listan
  - **Befintliga kunder:** CSV-import
  - **Konto:** inloggad som och gränssnittsspråk
- **Omskrivning av utkast:** "Kom ihåg till framtida mejl" finns enligt texten i Inställningar › Erik.
- **Integrationer:** Gmail (ansluten, Anslut igen, Koppla från), Outlook (spärrad när Gmail är ansluten) och LinkedIn via ConnectSafely-id.
- **Login:** e-post, lösenord, "Glömt lösenordet?" och "Skapa konto".

---

## 1. Globalt (alla sidor)

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| G-01 | Nytt visuellt system | Glaspaneler över suddig bakgrund, grön accent #1E7B4E, typsnittet Outfit med lätta vikter, tunna ikoner, vita pillor för valt läge, ingen glöd. Alla värden i `handoff/tokens.css`. | – |
| G-02 | Utfällbar ikonmeny | 76 px bred; fälls ut till 268 px vid hover/fokus. Resten av sidan blir suddig. Ren CSS (`.rail`, `.rail-scrim`). | – |
| G-03 | Mörkt läge | Knapp i toppfältet, cirkelanimation (View Transitions). Ljust är standard. Valet sparas per flik i sessionStorage (`aik-theme-tab`). | – |
| G-04 | Porträtt på kollegorna | Eriks och Moas foton i menyn, toppfältet och korten i stället för "E"/"M". Filer i `assets/`. | – |
| G-05 | Toppfält | Datum och vecka live, "Erik · B2B-säljare" och statusen "Erik är aktiv". | Status från agenten |
| G-06 | Sökfält | "Sök bolag eller kontakt". Bara fältet är designat, inget resultatflöde. | Sök-endpoint över bolag och kontakter |
| G-07 | Notispanel | Klocka med antal olästa. Panelen listar händelser (t.ex. "Erik bokade möte med …") och har "Markera alla som lästa". Stängs vid klick utanför och med Esc. | Händelseström och läst-status per användare |
| G-08 | "Ge Erik ett uppdrag" | Grön knapp i toppfältet. Popover med fritext och färdiga förslag; skickar ett uppdrag till Erik. | **Agent:** ta emot fritt uppdrag och omvandla till körning |
| G-09 | Räknare i menyn | Siffermärke på Förslag (Identifierade företag har redan ett). | Antal väntande förslag |
| G-10 | Byte av namn | "Pågående" heter "Pågående sälj". | – |

## 2. Start

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| S-01 | Rubrik som räknas från data | T.ex. "Erik har bokat 2 möten sedan i fredags", med hälsning. | Antal möten per period |
| S-02 | Periodval | 7 d / 30 d / 90 d / I år styr KPI:er och diagram. | Aggregering per period |
| S-03 | KPI-kort | Svar, Utskick (mejl/LinkedIn), Svarsfrekvens och Pipeline. Varje kort visar trend mot förra perioden (minidiagrammen är borttagna). Klick väljer vad huvuddiagrammet visar. | Tidsserier per kanal |
| S-04 | Pipeline-tavla | Väljer man Pipeline visas en tavla per steg (Första kontakt / I dialog / Möte bokat – samma bolag som i Pågående sälj) i stället för diagram. | Bolag per steg |
| S-05 | Grönt huvudkort "Från bolag till möte" | Antal bokade möten stort, plus Hittade / Kontaktade / Svarade och Eriks porträtt. Steget "Godkända av dig" är borttaget eftersom bolag inte längre godkänns för hand (se Eriks arbetsflöde). | Räknare per steg |
| S-06 | Kostnad per bokat möte | Månadspris ÷ antal bokade möten. | Pris per arbetsyta + antal möten |
| S-07 | Diagram svar per dag | Linjediagram med jämförelse mot förra perioden (på/av) och kanalfilter Alla/Mejl/LinkedIn/Anbud. | Tidsserie per kanal |
| S-08 | "Erik just nu" | Vad Erik gör just nu, plus länk Alla körningar. | Pågående körningar |
| S-09 | Tabellen "Nya bolag" | Senast identifierade bolag med matchning. | Finns troligen |
| S-10 | Borttaget | Bannern "Väntar på dig", "Senaste förslagen" och "Företagssökning" på Start. Ersätts av räknarna i menyn; sökningarna finns kvar i Kundprofil. Även Sändning-kortet och raden med kundprofiler ovanför "Nya bolag" är borttagna från Start. | – |

## 3. Förslag

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| F-01 | Filter per typ | Alla / Mail / LinkedIn / Anbud, med antal. | Typ per förslag |
| F-02 | LinkedIn-förslag | Egna kort för kontaktförfrågan och meddelande på LinkedIn. | **Agent + API:** LinkedIn-utkast via ConnectSafely |
| F-03 | Anbudsförslag | Kort för anbudssvar med "Godkänn och lämna in". | **Agent:** anbudsfunktionen |
| F-04 | "Granska en i taget" | Ett förslag i taget, "Granskar 1 av 11", Avsluta. | – |
| F-05 | Redigera på plats | Texten blir redigerbar i kortet; Klar sparar. | Spara redigerat utkast |
| F-06 | "Be Erik skriva om" med instruktion | Fältet "Vad ska Erik ändra?" och kryssrutan "Kom ihåg till framtida mejl". Visar "Erik skriver om…" och sedan en notis om ändringen och om regeln sparats. | Finns troligen i backend; kolla UI |
| F-07 | Träna Erik | Fältet "Vad ska Erik göra bättre i liknande utkast?" + Skicka → kvitto. | **Agent:** feedback som påverkar kommande utkast |
| F-08 | Stjärnbetyg 1–5 | Betyg per utkast. | Lagra betyg; ev. använda i träning |
| F-09 | Ingen prioritet | "Hög prio" är medvetet borttaget. | – |

## 4. Identifierade företag och granskning

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| I-01 | Fliken Befintliga kunder på sidan | Idag bara under Inställningar. Ladda upp / Lägg till. | Samma data som Inställningar |
| I-02 | Återinför uteslutna | Knappen Återinför på uteslutna bolag. | Ta bort uteslutning |
| I-03 | Kvitto på kortet | "Accepterad – Erik researchar" + Ångra. | – |
| I-04 | Ny granskningsvy | Samma funktion som dagens "Visa underlag" men ny layout (`design/Underlag.dc.html`):<br>• bläddra mellan förslagen från samma körning ("Förslag 1 av 3")<br>• beslutsrad fast i nederkant: "x av 7 fält tas med · y ändrat", Anledning, Avvisa, Godkänn x fält<br>• efter beslut: kvitto + Ångra + Nästa förslag<br>• "Ändrad av dig" + Återställ per fält | Finns; mest UI |

## 5. Pågående sälj

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| P-01 | Stegfilter | Alla / Research / Första kontakt / Dialog / Möte bokat, med antal. | Steg per bolag |
| P-02 | Stapel i sex steg | Visar hur långt affären kommit på varje kort. | Steg per bolag |

## 6. Kundkortet (företagssidan) – störst skillnad

Designfil: `design/Kundkort.dc.html`. Skärmbilder: `Kundkort-*.jpg`.

### 6a. Struktur
| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| K-01 | Flikar | Research / Säljkort / Överlämning till sälj. "Säljer för: [arbetsytans bolag]" uppe till höger. | – |
| K-02 | Infoboxar i Säljkort | Eriks mål, Lämnas över till (säljare), Möte bokat/ej bokat + förslag på tider. | Mål, säljare och möte per bolag |
| K-03 | Stegaren med berättelse | Klick på ett av de 6 stegen visar vad som hänt **hos just det här bolaget** i steget. Beta visar bara en generell beskrivning. | Händelser per bolag och steg |

### 6b. Research-fliken
| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| K-10 | "Därför är det här en bra matchning" | Mörk ruta med en mening och 3–4 punkter om varför bolaget passar. | **Agent:** sammanfattning av bedömningen |
| K-11 | Uppdatera research | Knapp; visar "Erik uppdaterar…" och sedan ny tid. | Trigger av Berika (finns) |
| K-12 | Statisk research i grupper | Identitet, årsredovisning, erbjudande och organisation, med källa per rad. | Delvis finns (Fakta om företaget) |
| K-13 | Dynamisk research (signaler) | Kort med signaltyp, hur färsk den är och källa. "Stämmer inte?" gör att Erik slutar använda signalen; Ångra finns. | **Agent:** signalbevakning + flagga per signal |
| K-14 | Egna källor | "Källor Erik söker i", där kunden lägger till länkar Erik ska bevaka. | Lista med URL:er per bolag; **Agent** läser dem |
| K-15 | Personerna | Kort per person: roll, vad hen gör just nu och vad som driver hen. Flagga "Du behöver ta över" och "Exkludera – Erik kontaktar inte". | **Agent:** personprofil; exkludering per kontakt |
| K-16 | "Vet du något Erik inte hittat?" | Fritext från kunden som blir en källa i researchen. | Spara + **Agent** använder |
| K-17 | Skriv mejl per kontakt | Knapp i Kontakter-tabellen; startar ett utkast som hamnar i Förslag. "E-post saknas" om adress saknas. | Finns troligen (mejl startas från företagssidan) |
| K-18 | Eriks arbete med bolaget | Arbetsflödets steg för bolaget med status och skäl; klick → körningen. | Finns (arbetsflöde-status), ny layout |

### 6c. Säljkort-fliken
| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| K-20 | Säljstrategi | Två kort: Feardriven (krav som redan finns, t.ex. regelverk) och Motivationsdriven (något positivt hos kunden). Erik föreslår en med exempelmening; kunden kan byta. "Varför …"-ruta förklarar valet. | **Agent:** välja och motivera vinkel, skriva utkast med vald vinkel |
| K-21 | Instruera Erik | Fritext + "Låt Erik utveckla strategin" (inaktiv tills något är skrivet). | **Agent** |
| K-22 | "Erik väntar på dig" | Eriks svarsutkast på ett inkommande svar: Godkänn och skicka (Ångra), Ändra själv, Be Erik skriva om (med instruktion + Kom ihåg). Signerat "Erik, AI-kollega på Ai Kollegorna". | **Agent:** läsa svar i inkorgen och skriva svarsutkast |
| K-23 | Eriks plan för mötet | VEM / VINKEL / HUR med Korrigera per rad, plus fält "Ge feedback" och "Förbättra planen". | **Agent:** mötesplan |
| K-24 | All dialog – flöde | Arbetsflöde: Boka möte (högst 3 försök) eller Nudga (vid triggers). Läge Automatiskt eller Manuellt. Text om varför och vad som händer sedan. | **Agent:** sekvenslogik, byte till Nudga efter 3 försök |
| K-25 | All dialog – steg | Steg 1–3 (introduktionsmejl, påminnelse, avslut) med status Klart / Erik är här / Väntar. | Sekvens per bolag |
| K-26 | All dialog – trådar | En tråd per kontakt med antal mejl och LinkedIn, LinkedIn-status (Connect skickat/accepterat). Fälls ut och visar meddelandena. Röd kant = åtgärd behövs. | Mejltrådar (Gmail) + LinkedIn-status |
| K-27 | Teaser för överlämning | De 5 delarna i briefen + "Öppna överlämning till sälj". | – |
| K-28 | Vad som hänt | Tidslinje, senaste först (research uppdaterad, svar, mejl skickat, signal hittad). | Händelselogg per bolag |

### 6d. Överlämning till sälj
| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| K-30 | Mötesbrief | Förhandsvisning av mejlet Erik skickar till kundens säljare **dagen före mötet**. Rubriker: Vad som kan vinna kunden, Varför de vill ses, Vem som kommer, Tre frågor att ställa, Vad som kan stoppa affären (invändningar + svar), Föreslaget nästa steg, Så gick dialogen. Avsändare Erik, mottagare säljaren. | **Agent:** generera brief; **schemaläggning** dagen före bokat möte |
| K-31 | "Lägg till en rad innan mejlet går" | Kundens egen rad visas direkt överst i briefen ("Din rad"). | Spara rad per brief |
| K-32 | Mötesinfo | "Möte: Ej bokat · Erik föreslår tis 10.00 … · 20 min · Teams". | Mötesbokning / kalender |

## 7. Kundprofiler och Kundprofil

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| C-01 | Smalare kort i listan | Namn, Aktiv, kort beskrivning och 2–3 branscher. "Ny kundprofil" som kort och knapp; Åtgärder-knappen är borttagen. | – |
| C-02 | Taggfält | Branscher, regioner, signaler, roller och uteslut som taggar (Enter lägger till, × tar bort) i stället för kommaseparerad text. | Samma fält; listor i stället för sträng |
| C-03 | "Så läser jag profilen" | Erik beskriver profilen i klartext, uppdateras live medan man skriver. | Kan göras i frontend |
| C-04 | Nyckelord → "Signaler att leta efter" | Fältet har bytt namn. **Kolla att datamodellen matchar.** | – |
| C-05 | Aktiv som switch, Ta bort med bekräftelse | – | – |

## 8. Inställningar

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| N-01 | Reglage för lägsta matchning | Reglage 0–10 med text som förklarar värdet live. | Finns (fältet) |
| N-02 | Varning på oärliga regler | Regler som "varmt rekommenderad" mot kalla kontakter markeras som oärliga. | Enkel textmatchning eller **Agent** |
| N-03 | AI-budget som går att sätta | Idag bara texten "ingen gräns". | Budgetgräns per arbetsyta + stopp |
| N-04 | Byt lösenord | Under Konto. | Auth |
| N-05 | Ogiltig tid i sändningsfönster | Varning om Till är före Från. | – |
| N-06 | LinkedIn-normalisering | Kontakta inte: LinkedIn-länkar normaliseras automatiskt. | – |
| N-07 | Full bredd | Inga sidospalter. | – |

## 9. Körningar och Arbetsflöden

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| R-01 | Svenska uppgiftsnamn | "Hitta kontakter på …", "Berika …", "Skriv mejl till …" i stället för "Find contacts at …" m.fl. | Översättning |
| R-02 | Ingen USD för kunden | Kostnad i dollar visas inte i listan eller på företagssidan. Hör hemma i intern admin. | – |
| R-03 | Begripligt fel + Försök igen | Misslyckad körning: "Erik kunde inte slutföra – vi tittar på det" + Försök igen, i stället för rått JSON-fel. | Felmappning + omstart av körning |
| R-04 | Filter och sammanfattning | Filter Alla / Pågår / Väntar på dig / Klara / Misslyckade; kort med körningar senaste 7 dagarna, väntar, lästa sidor och misslyckade. | Aggregering |
| R-05 | Körningsdetalj | "Så gick det till" (steg i klartext). Teknisk info (modellanrop, tokens) bakom en utfällning. | Delvis finns |
| A-01 | Regler per steg i UI | Lägga till/ta bort regler per arbetsflödessteg direkt i Arbetsflöden. | Kolla om regler per steg kan skrivas från UI idag |
| A-02 | Svenska skäl | "LinkedIn är inte anslutet …", "Matchar 4/10, under er gräns 5/10 …". | Översättning |

## 10. Integrationer och Login

| ID | Funktion | Beteende i designen | Data/backend |
|---|---|---|---|
| L-01 | Integrationer i större kort | Mindre text; ConnectSafely-fältet visas först efter klick på Anslut LinkedIn. | – |
| L-02 | Visa/Dölj lösenord | – | – |
| L-03 | Glömt lösenord-flöde | Återställ → "Kolla din inkorg" (länken gäller 30 min). | Auth: återställningsmejl |
| L-04 | Fel direkt i formuläret | "Skriv en giltig e-postadress." / "Skriv ditt lösenord." | – |

---

## 11. Buggar i beta som hittades vid genomgången

1. **Engelska texter mot kund:** körningsnamn ("Find contacts at", "Enrich", "Draft email to") och skäl till överhoppade steg ("LinkedIn isn't connected, so Erik didn't look.", "matches its customer profile 3/10, under the 5/10 …").
2. **Rått felmeddelande visas för kunden:** en misslyckad kontaktsökning visar JSON med "prompt is too long: … tokens > 1000000 maximum". Två saker behöver lösas:
   - visa ett begripligt fel för kunden
   - begränsa hur mycket underlag kontaktsökningen skickar till modellen (trunkera eller dela upp)
3. **Kostnad i USD syns för kunden** under Körningar och på företagssidan.

## 12. Öppna frågor till Tobias

- Ska Moa få en egen variant av sidorna (kollegaväljaren högst upp i menyn byter kollega)?
- Var ska kostnad per körning synas internt – egen adminvy?
- Är toast-notiserna kvar, eller ersätts de helt av notispanelen (G-07)?
- Mötesbokning (K-32): bokningslänk, kalenderintegration eller manuellt?
- Överlämningsmejlet (K-30): från vilken adress skickas det? Skissen visar kundsäljarens egen adress.
- "Ge Erik ett uppdrag" (G-08): vilka uppdragstyper ska stödjas i första versionen?
