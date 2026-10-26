# Dashboard-redesign

Ny design för Ai Kollegornas kunddashboard (Erik och Moa): glas-paneler över en suddig bakgrund, grön accent, utfällbar ikonmeny och mörkt läge.

## Sidor

| Fil | Sida | Når man via |
|---|---|---|
| `design/Main.dc.html` | Start | Menyn › Start |
| `design/Forslag.dc.html` | Förslag (godkännande) | Menyn › Förslag |
| `design/Foretag.dc.html` | Identifierade företag | Menyn › Identifierade företag |
| `design/Pagaende.dc.html` | Pågående sälj | Menyn › Pågående sälj |
| `design/Kundkort.dc.html` | Kundkort (ett bolag) | Klick på ett kort i Pågående sälj |
| `design/Kundprofiler.dc.html` | Kundprofiler (lista) | Menyn › Kundprofiler |
| `design/Kundprofil.dc.html` | En kundprofil | Klick på en profil |

`assets/` innehåller Eriks och Moas bilder.

## Viktigt om filerna

Det här är **designkällor**, inte färdig produktionskod. Varje `.dc.html` är en mockup i Claudes designformat: vanlig HTML med inline-stilar, plus ett litet skript som håller tillståndet (filter, öppna rutor, godkänn/avvisa). De kräver Claudes designmiljö för att köras interaktivt, så öppna dem i en editor och använd dem som referens för markup, stilar och beteende.

Den levande, klickbara versionen finns i Claude (be Anton om länken).

## För utvecklaren

- **SPEC.md** – vad varje knapp ska göra, plus designtokens (färger, glas-recept, typsnitt, animationer).
- All exempeldata är påhittad eller platshållare, till exempel `[Kontakt 1]`.
- Datum och hälsning i topbaren räknas live från klockan.
- Kostnad per körning i dollar visas medvetet inte för kunden. Det hör hemma i intern admin.
