# Dashboard-redesign

Ny design för Ai Kollegornas kunddashboard (Erik och Moa) i Exa-stil: vit, platt och luftig. Den har en vit sidomeny med kollegaväljare och typsnittsfamiljen IBM Plex: Plex Sans för text, Plex Serif bara för sidrubriker och Plex Mono för siffror och data. Primärknappen är en blå pill.

Designen ska ersätta utseendet i beta.aikollegorna.se och behåller samma funktioner.

## Börja här

1. **KOMPONENTER.md:** varje komponent jämförd med beta. Den visar vad som är samma, vad som är flyttat, vad som är nytt och vad som saknas i designen, plus det som tillkommit i beta sedan förra genomgången.
2. **HANDOFF.md:** designspråket, sidomenyn, layoutregler och byggordning.
3. **prototype/Main.html:** öppna i webbläsaren och klicka runt.

## Sidor

| Fil | Sida | Rutt i beta |
|---|---|---|
| `Main` | Start | `/` |
| `Forslag` | Förslag | `/proposals`, `/proposals/:id` |
| `Foretag` | Identifierade företag | `/erik/companies` |
| `Underlag` | Granska förslag fält för fält | Visa underlag |
| `Pagaende` | Pågående sälj | `/erik/ongoing` |
| `Kundkort` | Företagssidan (Research / Säljkort / Överlämning) | `/erik/companies/:id` |
| `Korningar` | Körningar | `/runs` |
| `Korning` | En körning | körningsdetalj |
| `Kundprofiler` | Kundprofiler | `/erik/icps` |
| `Kundprofil` | En kundprofil | `/erik/icps/:id` |
| `Arbetsfloden` | Arbetsflöden | `/workflows` |
| `Integrationer` | Integrationer | `/integrations` |
| `Installningar` | Inställningar (8 flikar) | `/settings/*` |
| `Login` | Logga in | – |

Varje sida finns som `design/<Fil>.dc.html` (källa), `prototype/<Fil>.html` (körbar) och `handoff/screens/<Fil>-desktop.jpg` / `-mobil.jpg` (skärmbilder).

Moas startsida (`/moa/setup`) finns i beta men inte i designen ännu. Se KOMPONENTER.md, avsnitt 13.

All exempeldata är påhittad. Kostnad per körning i dollar visas medvetet inte för kunden.
