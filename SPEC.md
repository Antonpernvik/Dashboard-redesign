# Klickbeteenden

Vad som ska hända när man klickar, sida för sida. Samma text ligger som lappar på designens canvas.

## Vad händer när man klickar – meny och topbar (alla sidor)

- Hovra över menyn: den fälls ut och resten blurras. Musen ut eller klick på ett menyval: allt blir skarpt igen.
- Agentväljaren (Erik ▾): visar listan med kollegor (Erik, Moa). Byter man kollega visar hela appen den kollegans data. En Moa som inte är aktiverad visar "Aktivera Moa".
- Menyval: går till sidan. Badgen = antal saker som väntar på dig (Förslag, Identifierade företag). Den försvinner vid 0.
- Logga ut: loggar ut direkt.
- Datum: live, dagens datum och vecka i kundens tidszon.
- "Erik är aktiv": grön = inom sändningsfönstret och allt anslutet. Gul "Pausad" utanför fönstret, röd "Behöver dig" om en integration slutat fungera. Klick går till Inställningar › Sändning.
- Sök (⌘K): söker bolag, kontakter och förslag. Resultaten grupperas per typ och Enter öppnar det första.
- Måne/sol: växlar ljust och mörkt läge med cirkel-animation. Sparas per användare.
- Klockan (notiser): öppnar en panel. Bara det som kräver dig eller är riktiga resultat: bokade möten, svar, nya förslag och fel i integrationer. Inte varje körning. Klick på en notis går till rätt sida och markerar den som läst. Badgen = olästa. Samma notiser kan även gå till Slack eller mejl.
- Ge Erik ett uppdrag (ersätter "Ny körning"): kunden skriver fritt eller väljer ett snabbval. Uppdraget syns under Pågående sälj och Körningar. Kunden ska inte behöva starta körningar själv, Erik jobbar ändå.

## Start – klickbart

- Periodväljaren (7 d / 30 d / 90 d / I år): byter period för KPI-kort, tratt och graf.
- KPI-kort: väljer vad grafen visar. Pipeline-kortet byter grafen mot en tavla med bolag per steg.
- Kanalfilter (Alla / Mejl / LinkedIn / Anbud): filtrerar grafen.
- Jämför-reglaget: visar eller döljer förra periodens streckade linje.
- Tratten: varje steg går till Pågående sälj, filtrerat på steget. "Kostnad per möte" räknas live som månadsavgift ÷ bokade möten.
- Pipeline-tavlan: ett bolag öppnar kundkortet. "+N till" och "Öppna hela pipelinen" går till Pågående sälj.
- Erik just nu: en rad öppnar kundkortet. "Alla körningar" går till Körningar.
- Sändning "Ändra": Inställningar › Sändning.
- Nya bolag: en rad öppnar kundkortet. "Alla identifierade företag" går till Identifierade företag.
- Aktivera Moa: startar Moas onboarding (sajtens adress, ton, godkännande).

## Förslag (godkännande) – klickbart

- Filter (Alla / Mail / LinkedIn / Anbud): filtrerar. Räknarna visar det som väntar.
- Granska en i taget: ett kort åt gången, nästa kommer automatiskt efter beslut. "Avsluta" går tillbaka till listan.
- Läs den: fäller ut hela texten. Först då visas Godkänn.
- Godkänn och skicka: läggs i kö och skickas inom sändningsfönstret. "Ångra" fungerar tills det är skickat.
- Redigera: texten blir redigerbar i kortet. Spara = godkänt med dina ändringar. Erik lär sig av ändringen.
- Avvisa: frågar kort varför (fel person, fel ton, fel bolag, annat). Erik använder svaret. "Ångra" finns.
- Träna Erik: kunden skriver en regel, till exempel "nämn aldrig pris i första mejlet". Den gäller alla framtida utkast.
- Stjärnor: betyg 1–5 på utkastet. Sparas direkt och påverkar Eriks ton över tid.

## Identifierade företag – klickbart

- Flikar: Bolag / Befintliga kunder / Exkluderade.
- Acceptera: bolaget går till Pågående sälj och Erik börjar researcha och leta kontakter. "Ångra" finns.
- Exkludera: frågar orsak (konkurrent, befintlig kund, fel målgrupp, annat) och flyttar bolaget till Exkluderade. Erik kontaktar det aldrig.
- Godkänn alla: frågar först, till exempel "Acceptera 11 bolag?".
- Bolagsnamnet: öppnar kundkortet i läsläge, innan man accepterat.
- Ladda upp: CSV eller Excel med org.nr eller domän. Lägg till: formulär med bolag, kontakt och "kund sedan".
- Återinför: bolaget går tillbaka till fliken Bolag.

## Pågående sälj – klickbart

- Stegfilter: filtrerar korten på steg.
- Kort: hela kortet är klickbart och öppnar kundkortet.
- Åtgärder ▾: Exportera lista (CSV), Pausa Erik för valda bolag, Exkludera valda. Man markerar kort med en kryssruta som syns vid hover.

## Kundkort – klickbart

- "Pågående sälj" (brödsmulan): tillbaka till listan.
- Språk i mejl: ändras direkt och gäller nya utkast för bolaget. Ingen Spara-knapp behövs.
- Åtgärder ▾: Pausa bolaget, Exkludera, Markera som kund, Byt kundprofil.
- Stegen: visar hur Erik jobbar i steget och vad som hänt där.
- Lägg till kontakt: namn, titel, e-post, telefon och källa (kall eller rekommendation). Erik skriver ett utkast när e-postadressen finns.
- En kontaktrad: öppnar en sidopanel med kontaktens historik.
- Mejl: ett utkast öppnas som samma kort som under Förslag.
- Källor (allabolag.se m.fl.): öppnas i ny flik.
- Anslut LinkedIn: går till Integrationer.
- En körningsrad: visar körningens detaljlogg.

## Kundprofil – klickbart

- "Kundprofiler" (brödsmulan): går till listan med alla profiler.
- Taggfälten (branscher, regioner, signaler, roller, uteslut): skriv och tryck Enter eller komma för att lägga till, × tar bort. Ersätter kommaseparerade textfält.
- "Så läser jag profilen": uppdateras live medan man skriver, så kunden ser hur Erik tolkar inställningarna.
- Spara profilen: sparar och visar "Sparad". Ändringar efter det tar bort markeringen igen. Lämnar man sidan med osparade ändringar ska appen fråga först.
- Granska de 5 företagen: går till Identifierade företag, filtrerat på profilen.
- Aktiv-reglaget: pausar eller aktiverar profilen direkt. Gäller från nästa sökning.
- Ta bort profilen: frågar "Säker?" först. Bolag som hittats ligger kvar.

## Inställningar – klickbart

- Flikarna: Företag, Erik, Moa, Arbetsyta, E-post, Kontakta inte, Befintliga kunder, Konto. Fliken ska synas i adressen (t.ex. /installningar/e-post) så att "Ändra" på Sändning kan länka rätt.
- Spara-knapparna: visar "Sparat". Lämnar man en flik med osparade ändringar ska appen fråga först.
- Erik: regler redigeras direkt i fältet; Spara syns bara när regeln ändrats. Reglaget för lägsta matchning visar live hur många bolag i kön som når gränsen. Regler som påstår en rekommendation flaggas, de bör bara gälla kontakter med källa "rekommenderad".
- Moa: "Kom igång med Moa" startar onboarding (läser webbplatsen, fyller i tonalitet).
- Arbetsyta: språk och tidszon gäller alla kollegor. "Pausa alla kollegor" stoppar sökningar, research, utkast, artiklar och sändning direkt; granskning fungerar fortfarande. Knappen byts till "Starta alla igen".
- E-post (Sändningsfönster): statusraden räknas live från dagens dag och tid. Till före Från visar ett fel och blockerar sändning. "ändra" i texten går till Arbetsyta.
- Kontakta inte: Typ = e-postadress eller LinkedIn-profil. LinkedIn normaliseras till linkedin.com/in/… så alla stavningar matchar. Dubbletter läggs inte till. Ta bort på varje rad.
- Befintliga kunder: Ladda ner mallen ger en CSV-mall. Välj fil + Importera lägger till kunderna; rader utan org.nr eller webbplats hoppas över och rapporteras.
- Konto: gränssnittets språk är personligt och påverkar inte vad Erik och Moa skriver.

## Arbetsflöden – klickbart

- Ett flödeskort: visar flödets steg under korten. Klick igen eller × stänger.
- Stegen visar vad som händer av sig självt, vilka steg som kräver ditt godkännande (grön etikett) och vilka som bara körs under ett villkor (t.ex. "Om LinkedIn är anslutet").
- Villkoret "Om matchningen når din gräns" styrs av reglaget under Inställningar › Erik.

## Integrationer – klickbart

- Anslut Gmail / Anslut Outlook: OAuth-flöde i nytt fönster. Bara en e-postkälla åt gången: är den ena ansluten visar den andra "Koppla från det först".
- Koppla från: frågar först. Erik pausar utskick tills en inkorg är ansluten igen, och det syns som "Behöver dig" i topbaren.
- Anslut LinkedIn: första klicket visar fältet för ConnectSafely konto-id, "Spara och anslut" ansluter.
- En integration som slutar fungera (t.ex. utgången token) visar röd status här och en notis.

## Logga in – klickbart

- Fortsätt med Google / Microsoft: SSO. Matchar e-posten en befintlig arbetsyta loggas man in direkt, annars visas "Ingen arbetsyta hittades" med länk till Kom igång.
- Jobbmejl + Skicka inloggningslänk: validerar adressen, skickar en engångslänk (giltig 15 min) och visar "Kolla din inkorg". Inga lösenord att glömma.
- Byt e-post: tillbaka till formuläret.
- Logga ut (menyn, alla sidor): leder hit.
- Vänstra panelen visar kundens kollegor. När kunden bara har Erik ska Moa-raden döljas eller visas som "Inte aktiverad".

# Designtokens

## Färger (ljust läge)
| Token | Värde | Används till |
|---|---|---|
| base | #D8D2C6 | Bakgrund under blurren |
| blobbar | #B9C4A8, #EADFCB, #9FB394, #CDB89C | Suddiga färgfält i bakgrunden (blur 90–110 px) |
| glass | rgba(255,255,255,0.42) | Kort, meny, topbar |
| glassHi | rgba(255,255,255,0.68) | Valt kort, aktiva ytor |
| glassLine | rgba(255,255,255,0.65) | Kantlinje på glas |
| pop | rgba(251,250,247,0.97) | Popup-rutor (notiser, uppdrag) |
| ink | #14201A | Text |
| muted | #4B5750 | Sekundär text |
| green | #1E7B4E | Knappar, aktivt val, badges, grafer |
| down | #B3382A | Negativ trend, Avvisa, Exkludera |

## Färger (mörkt läge)
| Token | Värde |
|---|---|
| base | #0A0F0C |
| glass | rgba(22,30,25,0.55) |
| ink | #EEF2EE |
| muted | #A3AFA7 |
| chart | #4CC285 |

## Glas-recept
`background: var(--glass); border: 1px solid var(--glassLine); backdrop-filter: blur(28px) saturate(150%); border-radius: 22–28px;`

## Typografi
Geist (Google Fonts), 400/500/600/700. Siffror i grafer: Geist Mono. Rubriker 34–36 px / 600 / letter-spacing -0.03em.

## Rörelse
- Menyn: 76 px ikonlist, 268 px utfälld, `width .28s cubic-bezier(.65,0,.35,1)`. Blur på innehållet bakom: `backdrop-filter: blur(8px)`, opacity .3s.
- Mörkt läge: cirkel-wipe från knappen via View Transitions API (620 ms, `cubic-bezier(.65,0,.35,1)`). Faller tillbaka till direkt byte i Safari och vid "reduced motion".
