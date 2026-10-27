# Nya funktioner i Dashboard v2

Vad den nya designen har som dagens app saknar, sida för sida. Längst ned finns det som **finns i dagens app men saknas i designen**. Det måste med vid bygget, annars tappar vi funktion.

**Underlag** (26 okt 2026): genomklickning av den riktiga appen (beta) med en kundarbetsyta, enbart läsning, jämfört knapp för knapp med prototypen i `prototype/`. All data i designen är påhittad.

Hur knapparna ska bete sig står i `SPEC.md`. Hur det ska se ut finns i `handoff/screens/`.

---

## Överallt (meny och toppfält)

Menyraderna är desamma som idag: Start, Förslag, Identifierade företag, Pågående, Körningar, Kundprofiler, Arbetsflöden, Integrationer, Inställningar. Kollegaväljaren ("Byt kollega") finns redan.

| | Funktion | Kräver backend |
|---|---|---|
| Ny | Ikonmeny (76 px) som fälls ut till 268 px vid hover/fokus, resten av sidan blir suddig | – |
| Ny | Mörkt läge med cirkelanimation. Ljust är standard, valet sparas per flik | – |
| Ny | Eriks och Moas porträtt i stället för "E"/"M" | – |
| Ny | Toppfält med datum och vecka live | – |
| Ny | Sökfält "Sök bolag eller kontakt" (bara fältet finns, inget resultatflöde designat) | ja |
| Ny | Notispanel med antal olästa, lista och "Markera alla som lästa" | ja |
| Ny | "Ge Erik ett uppdrag": fritext + färdiga förslag | ja |
| Ny | Räknare på Förslag i menyn (Identifierade företag har redan en) | ja |
| Ändrat | "Pågående" heter "Pågående sälj" | – |

## Start

| | Funktion | Kräver backend |
|---|---|---|
| Ny | Rubrik som räknas från data: "Erik har bokat 2 möten sedan i fredags" | ja |
| Ny | Periodval 7 d / 30 d / 90 d / I år | ja |
| Ny | Fyra KPI-kort med minidiagram och trend: Svar, Utskick, Svarsfrekvens, Pipeline | ja |
| Ny | Klick på ett KPI-kort byter huvuddiagrammet. Pipeline visar en tavla per steg | ja |
| Ny | Tratt "Från bolag till möte" och kostnad per bokat möte | ja |
| Ny | Linjediagram svar per dag, jämförelse med förra perioden och kanalfilter | ja |
| Ny | "Erik just nu" och tabellen "Nya bolag" | ja |
| Ändrat | Sändning-kortet: nytt utseende, samma innehåll | – |
| Borttaget | "Väntar på dig"-bannern, "Senaste förslagen" och "Företagssökning" per kundprofil (finns kvar under Kundprofil › Eriks sökningar) | – |

## Förslag

| | Funktion | Kräver backend |
|---|---|---|
| Ny | Filter Alla / Mail / LinkedIn / Anbud | ja |
| Ny | LinkedIn- och anbudsförslag som egna korttyper | ja |
| Ny | "Granska en i taget" | – |
| Ny | "Träna Erik" + betyg 1–5 stjärnor | ja |

## Identifierade företag

Det mesta finns redan: flikarna Företag och Uteslutna, Godkänn alla, Godkänn / Uteslut / Visa underlag och matchning x/10.

| | Funktion | Kräver backend |
|---|---|---|
| Ny | Fliken "Befintliga kunder" direkt på sidan (idag bara under Inställningar) | – |
| Ny | "Accepterad – Erik researchar" som kvitto på kortet | – |
| Ny | Återinför på uteslutna bolag (kolla om det redan finns) | ja |

## Pågående sälj

| | Funktion | Kräver backend |
|---|---|---|
| Ny | Stegfilter Alla / Research / Första kontakt / Dialog / Möte bokat | ja |
| Ny | Stapel i sex steg på varje kort | – |

## Kundkort – den största nyheten

Stegaren "Här är Erik" med 6 steg och "Så jobbar Erik här" finns redan. Allt nedan är nytt.

**Flikar:** Research / Säljkort / Överlämning till sälj.

**Research**
- Mörk ruta "Därför är det här en bra matchning".
- "Uppdatera research".
- Statisk research i grupper.
- Dynamiska signaler med hur färska de är och "Stämmer inte?".
- "Källor Erik söker i", där kunden kan lägga till länkar.
- "Personerna": vad som driver var och en, "Du behöver ta över" och Exkludera.
- "Vet du något Erik inte hittat?".

**Säljkort**
- Infoboxar: Eriks mål, Lämnas över till, Möte bokat.
- Säljstrategi: feardriven eller motivationsdriven, med "Varför …" och "Instruera Erik".
- "Erik väntar på dig": svarsutkast med Godkänn / Ändra själv / Be Erik skriva om.
- "Eriks plan för mötet": VEM / VINKEL / HUR, Korrigera och "Förbättra planen".
- "All dialog": Boka möte / Nudga, Automatiskt / Manuellt, steg och trådar per kontakt.
- Teaser för överlämningen och tidslinje "Vad som hänt".

**Överlämning till sälj**
- Mötesbrief som mejl till kundens säljare dagen före mötet, med sju rubriker.
- "Lägg till en rad innan mejlet går".

Allt i Kundkort kräver backend, och det mesta är ny agentlogik.

## Kundprofiler och Kundprofil

| | Funktion | Kräver backend |
|---|---|---|
| Ändrat | Smalare kort i listan. "Ny kundprofil" är ett kort i stället för att ligga under Åtgärder | – |
| Ny | Taggfält i stället för kommaseparerad text | – |
| Ny | "Så läser jag profilen": klartext som uppdateras medan man skriver | – |
| Ändrat | Aktiv som switch; Ta bort profilen med bekräftelse | – |

## Inställningar

Samma 8 flikar som idag.

| | Funktion | Kräver backend |
|---|---|---|
| Ny | Erik › lägsta matchning som reglage med text som förklarar värdet live | – |
| Ny | Erik › varning på e-postregler som är oärliga mot kalla kontakter ("varmt rekommenderad") | – |
| Ny | Arbetsyta › AI-budget som går att sätta (idag bara "ingen gräns") | ja |
| Ny | E-post › varning vid ogiltig tid | – |
| Ny | Kontakta inte › LinkedIn-länkar normaliseras | – |
| Ny | Konto › Byt lösenord | ja |

## Integrationer och Logga in

| | Funktion | Kräver backend |
|---|---|---|
| Ändrat | Integrationer: större kort med mindre text; ConnectSafely-fältet visas först efter klick | – |
| Ny | Logga in: Visa/Dölj lösenord, Glömt lösenord-flöde, fel direkt i formuläret | ja (glömt) |

---

## Fanns i dagens app men saknades i designen – nu designat

Allt nedan fanns i appen men saknades i första versionen av designen. Nu är det designat (26 okt).

| Dagens app | Nu i designen |
|---|---|
| Granska förslag fält för fält ("Visa underlag") | **Ny sida** `Underlag.dc.html`: kryssa i/ur, redigera värde, källa per fält, anledning vid Godkänn/Avvisa, bläddra mellan förslag |
| Körningar + körningsdetalj | **Nya sidor** `Korningar.dc.html` och `Korning.dc.html` (utan USD, med borttagna värden och teknisk info) |
| Åtgärder per företag | Kundkort › Åtgärder: Bedöm igen, Berika, Hitta kontakter, Hitta på LinkedIn, Uteslut företaget… |
| Kontakter-tabellen + lägg till för hand | Kundkort › Research › Kontakter, med Skriv mejl per kontakt |
| Språk i e-post per företag | Kundkort › Kontakter |
| Matchning · säkerhet · bedömd | Under rubriken i Kundkort |
| Arbetsflöde-status och körningar per företag | Kundkort › Research › Eriks arbete med bolaget |
| Starta mejl själv | Skriv mejl i Kontakter |
| Arbetsflödets detaljsida | Arbetsflöden: steg 1–6 som i appen, läge, gränser, "Körs när", regler per steg, "Körs nu och senast" |
| Åtgärder › Lägg till ett företag… | Pågående sälj › Åtgärder |
| "Kom ihåg till framtida mejl" | Be Erik skriva om i Förslag och Kundkort |
| E-postreglernas ursprung | Fanns redan i designen (Inställningar › Erik) |

Kvar att bestämma: Nyckelord i kundprofilen heter nu "Signaler att leta efter" – kolla att datamodellen matchar. Förklaringstexterna i Inställningar är delvis kortade – behåll appens texter där de förklarar konsekvenser.

## Buggar och brister i dagens app (värt att fixa samtidigt)

- **Engelska texter mot kund:** körningar heter "Find contacts at …", "Enrich …", "Draft email to …". Skäl till överhoppade steg står på engelska: "LinkedIn isn't connected, so Erik didn't look." och "matches its customer profile 3/10, under the 5/10 …".
- **Rått felmeddelande visas för kunden:** en misslyckad kontaktsökning visar en JSON-sträng ("prompt is too long … tokens > 1000000 maximum"). Kunden ska se "Erik kunde inte slutföra – vi tittar på det" (så ser det ut i designen). Felet i sig: kontaktsökningen skickar för mycket text till modellen.
- **Kostnad i USD visas för kunden** under Körningar och i Kundkort. Designen tar bort det medvetet, eftersom kunden betalar fast pris i kronor.

## Knappar i designen utan bestämt beteende

- Aktivera Moa / Kom igång med Moa.
- Ladda upp / Lägg till under Identifierade företag › Befintliga kunder och Uteslutna.
- Byt lösenord och Logga ut under Inställningar › Konto.
