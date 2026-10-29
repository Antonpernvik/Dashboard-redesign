# Erik-pipelinen – så jobbar Erik

Version 1 · okt 2026 · ägare: Anton (produkt), Tobias (bygge)

**Målet:** kunden lägger **15 minuter om dagen** i dashboarden. Erik gör resten själv. Research görs så snålt som möjligt: dyr research bara på dem som visat intresse.

**Flödet**, inspirerat av TheShowcase.ai:
hitta → grovsålla → kontaktförfrågan → accepterad → djup research → utkast → **kunden godkänner** → skickat → svar → möte → överlämning

---

## 1. Principer

1. **Kunden godkänner text, inte klick.** Allt med fri text som lämnar systemet till en ny person godkänns: första meddelanden, svar och mejl. Kontaktförfrågningar utan notis går automatiskt när kundprofilen (målgruppen) är godkänd. Den godkänns en gång, inte per person.
2. **Research i rätt ögonblick.** Djup research görs först när någon accepterar eller svarar. Ingen läser hemsidor för 25 personer om dagen när 21 av dem aldrig accepterar.
3. **En kö, en gång om dagen.** Allt som kräver kunden samlas i *Dagens genomgång*. Inga avbrott däremellan, utom för heta svar och bokade möten.
4. **Inget "Nothing planned".** Varje varm kontakt har alltid ett nästa steg i Eriks plan, och kunden ser det.
5. **Ärlighet.** Erik hittar aldrig på hänvisningar, kunder eller resultat. Är det en AI-kollega som skriver ska det framgå, enligt designens regler.
6. **Erik lär sig.** Ändringar och svarsfrekvens förbättrar målgruppen och texterna. Det ska ske genom färre och tydligare regler, inte genom 28 regler som krockar (Showcases misstag).

---

## 2. Flödet steg för steg

| # | Steg | Vad Erik gör | Startas av | Research | Kunden? |
|---|---|---|---|---|---|
| 0 | Kundprofil | Bransch, storlek, titlar, geografi, undantag. Erik föreslår ändringar varje vecka (steg 11). | Onboarding | – | **Godkänner** profilen, en gång |
| 1 | Hitta | Fyller på listan med leads så den räcker ~10 arbetsdagar (≈ 250 personer per LinkedIn-konto). Undantag gäller direkt. | Varje morgon 06:00 | R0 | – |
| 2 | Grovsålla | Poäng 0–100 för bolag och person, bara från listdata (titel, storlek, bransch, ort). Billig modell. ≥ 70 går vidare. | Efter steg 1 | R1 | – |
| 3 | Kontaktförfrågan | 20–25 per dag och konto, utan notis, spritt över dagen | Schema 09–17 | – | Automatiskt |
| 4 | Accepterad | Djup research om person och bolag, sedan skriver Erik första meddelandet | Händelse: accept | **R2** | **Godkänner** utkastet |
| 5 | Ingen accept | Efter 14 dagar dras förfrågan tillbaka. Har personen en verifierad mejladress startar mejlspåret (R2 görs då). | Dag 14 | R2 om mejl | **Godkänner** första mejlet |
| 6 | Uppföljning 1 | Kort påminnelse dag 3 om inget svar | Dag 3 | – | Automatiskt från godkänd mall |
| 7 | Sista meddelande | "Jag tar ett steg tillbaka …", dag 10 | Dag 10 | – | Automatiskt från godkänd mall |
| 8 | Svar | Svaret klassas (se 2.1) och Erik skriver ett svarsutkast | Händelse: svar | R1 + tråden | **Godkänner** svaret |
| 9 | Möte bokat | Kontakten undantas i alla kampanjer, Erik gör full research och skriver en mötesbrief som går ut dagen före. Efter mötet: betyg. | Händelse: möte | **R3** | Betygsätter efteråt (1 klick) |
| 10 | Bevakning | Varma och "inte nu"-kontakter kollas för nytt jobb, nyheter och rekryteringar. Vid träff väcks leadet och gör R2. | Varje vecka | R1 | – |
| 11 | Lärloop | "Det här fungerar": accept- och svarsfrekvens per bransch, storlek, titel och nyckelord. Erik föreslår ändringar i kundprofilen. | Måndagar | – | **Godkänner** förslaget (måndagar) |
| 12 | Nätverket | Befintliga LinkedIn-kontakter matchas mot kundprofilen och får meddelande direkt, utan förfrågan och utan tak | Varje månad | R2 per träff | **Godkänner** utkastet |

### 2.1 Svarsklasser och vad Erik gör med dem

| Klass | Exempel | Erik gör |
|---|---|---|
| **Het** | "Maila mig så bokar vi" | Svarsutkast med tider. **Notis direkt** (Slack), väntar inte till genomgången. |
| **Varm** | Nyfiken, ställer frågor | Svarsutkast till genomgången |
| **Inte nu** | "Hör av dig i januari" | Tackar kort, sätter påminnelse till den tiden och gör en signalkoll innan |
| **Fel person** | "Prata med Lars på backoffice" | Hittar den hänvisade personen, skapar en ny lead med en **äkta** hänvisning ("Fredrik tipsade om dig") och lägger utkastet i kön |
| **Inte intresserad** | "Inte relevant" | Stoppar sekvensen. Bolaget pausas i 12 månader. Inget mer skickas. |
| **Avregistrera** | "Sluta skriva" | Personen undantas för alltid i alla kampanjer |
| **Oklart** | Emoji, "👍" | Kunden avgör i genomgången, med Eriks förslag |

Klassningen görs av en billig klassningsmodell (t.ex. Jev). Bara svarsutkasten använder en stark modell.

---

## 3. Researchnivåer – så hålls kostnaden nere

| Nivå | Innehåll | Vem | Volym per konto och dag |
|---|---|---|---|
| **R0 Sök** | Listdata från sökkällan | Alla nya leads | 25–40 |
| **R1 Grovsållning** | Listdata och billig modell. Inga webbsidor. | Alla nya leads, bevakning | 25–40 |
| **R2 Djup** | Bolagets sajt (max 5 sidor), nyheter senaste 90 dagarna, personens senaste inlägg, rekryteringar. Stark modell skriver vinkel och utkast. | Bara accepterade, mejlspår, svar och träffar i nätverket | **4–6** |
| **R3 Möte** | Full kundkortsresearch och mötesbrief | Bara bokade möten | ~1 |

**Regler**
- **Bolagscache:** research om ett bolag återanvänds i 90 dagar för alla personer på samma bolag, och webbsidor cachas i 30 dagar.
- **Budgettak per kund och dag** (sätts av Tobias): nås taket görs R1 i stället för R2, och resten läggs i kö till nästa dag. Kunden ser aldrig kostnaden i USD.
- **Effekt:** djup research görs på ungefär 15–20 % av alla leads i stället för på alla. Det blir ungefär 80 % billigare per lead utan att antalet utskick sjunker.

---

## 4. Dagens genomgång – kundens 15 minuter

**Kl. 08:00** samlar Erik allt som väntar i en kö. Den nås från Start ("Dagens genomgång · 14 saker · ca 12 min") och via en Slack-länk.

**Ordning i kön**
1. Heta svar (1–3)
2. Övriga svar (2–4)
3. Första meddelanden till nya som accepterat (4–6)
4. Första mejl (0–5)
5. Måndagar: veckans förslag på ändringar i kundprofilen och "Det här fungerar"

**Per kort**
- En rad om varför: *signalen*, *poängen* och *vad personen sagt*, alltså vad Erik bygger meddelandet på.
- Utkastet.
- Knappar: **Godkänn** · **Ändra** · **Be Erik skriva om** · **Hoppa över** (stoppar leadet).
- Tangentbord: J/K för att bläddra, Enter för att godkänna, E för att ändra.

**Tidsbudget:** 12–18 kort à ~45 sekunder blir ~12–15 minuter. Är kön över 20 kort lägger Erik ner takten på kontaktförfrågningar nästa dag, så kön hålls på en nivå som går att hinna.

**Om kunden inte hinner:** ingenting skickas. Korten ligger kvar. Efter 3 dagar påminner Erik i Slack och pausar nya kontaktförfrågningar.

**Förtroendetrappa:** när kunden har godkänt 50 kort i en kategori utan att ändra något föreslår Erik autopilot för just den kategorin, till exempel "Inte nu-tack". Autopilot slås aldrig på av sig själv. Första meddelanden ligger kvar i kön tills kunden själv väljer annat.

**Notiser utanför genomgången:** bara heta svar, bokade möten och fel i en integration (som att LinkedIn kopplats från).

---

## 5. Volymer och fönster (per LinkedIn-konto)

| Vad | Standard | Tak |
|---|---|---|
| Kontaktförfrågningar | 20–25 per dag, alla dagar 09–17 | ~120 per vecka |
| Öppna förfrågningar | – | Dras tillbaka efter 14 dagar |
| Meddelanden | Mån–fre 08–17, slumpad tid inom fönstret efter godkännande | ~50 per dag |
| Mejl | 20–30 per dag och uppvärmd domän (inte kundens huvuddomän) | 50 per dag |
| Uppföljningar | Dag 3 och dag 10 | 2 per sekvens |

Fler konton (t.ex. en till säljare hos kunden) ger dubbla volymer. Erik fördelar leads mellan avsändarna.

---

## 6. Förväntad tratt (per konto och månad)

Siffrorna nedan är **uppskattningar**, baserade på Ai Kollegornas egna siffror i Showcase (817 förfrågningar → 122 accepterade → 36 svar → 5 heta → 4 möten på 34 dagar).

| | Som i Showcase idag | Med pipelinen |
|---|---|---|
| Kontaktförfrågningar | ~720 | ~720 |
| Accepterade | 15 % → ~110 | 25 % → ~180 (bättre målgrupp via lärloopen) |
| Mejlspår | – | ~100 |
| Svar | ~32 | ~55 |
| Möten | ~4 | ~7 |
| Kundens tid | Löpande, manuellt | ~15 min om dagen |

---

## 7. Vad det ändrar i dashboarden (Dashboard v2)

1. **Ny: Dagens genomgång**, en sida som nås från Start. Den ersätter Förslag som startpunkt och blir startsidans viktigaste kort.
2. **Identifierade företag:** godkännandet per bolag tas bort. Sidan blir en läsvy över listan med leads, med Exkludera och poäng.
3. **Ny: Relationer** med flikarna Agera nu, Kommande (Eriks plan för 7, 14 och 30 dagar) och Historik.
4. **Svarsklass** (Het, Varm, Inte nu …) syns på kundkortet och i Pågående sälj.
5. **Kundprofil:** fliken "Det här fungerar" med veckans förslag.
6. **Mötesbrief:** betyg efter mötet ("Hur gick det?").
7. **Inställningar › Erik:** volymer, fönster, autopilot per kategori och undantag (bolag och personer).

---

## 8. Tekniskt (för Tobias)

- **LinkedIn via ConnectSafely:** kontaktförfrågningar, händelser för accept och svar (webhook eller polling var 15:e minut), meddelanden och synk av inkorgen.
- **Händelsestyrt, inte batch på allt.** Accept sätter igång ett R2-jobb, och ett svar sätter igång klassning och utkast. Bara steg 1–2, 10–12 körs på schema.
- **Modellval:** Jev för klassning, routing och poäng. Billig open source-modell för R1. Claude eller GPT för R2-vinklar och utkast.
- **Undantag gäller globalt:** kunder, bokade möten, "inte intresserad" och avregistrerade gäller i alla kampanjer och för alla domänändelser (.se, .com …).
- **Lead-resa:** varje lead har en logg (kvalificerad → förfrågan → accepterad → meddelande → svar → möte), samma som "Lead journey" i Showcase.
- **Köobjekt:** `{typ, lead, utkast, varför, poäng, skapad, prioritet}`. Kön byggs om 08:00 men kan få nya heta svar under dagen.
- **Budget:** räknare per kund och dag för R2 och R3, med nedväxling till R1 vid taket.

---

## 9. Beslut som behövs från Anton

1. **Kontaktförfrågningar automatiskt** när kundprofilen är godkänd? *Rekommendation: ja.* Godkännande per förfrågan kostar mer tid än hela genomgången.
2. **Uppföljningar från godkänd mall automatiskt?** *Rekommendation: ja.*
3. **Mejlspår:** vilken domän skickar Erik från? *Rekommendation: en separat uppvärmd domän per kund.*
4. **Öppning i första meddelandet:** ska vara äkta. Signal eller observation i stället för "jag blev rekommenderad".
5. **Tak för kön:** max 20 kort per dag?
