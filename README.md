# GD&T Engineer

GD&T Engineer er en dansk React/Vite-webapp til praktisk beslutningsstøtte inden for geometrisk produktspecifikation og tolerancesætning.

Appen hjælper brugeren med at gå fra et mekanisk problem til valg og forståelse af geometrisk kontrol, datum-system, beregning af True Position og opbygning af en Feature Control Frame.

> **Vigtigt:** Appen er et beslutnings- og læringsværktøj. Den erstatter ikke kontrol mod gældende ISO-GPS-standarder, virksomhedskrav, produktfunktion, proceskapabilitet eller en aftalt målemetode.

## Hovedfunktioner

### Spørgsmålsbaseret hub

Startsiden tager udgangspunkt i brugerens opgave frem for appens interne sidestruktur:

- Hvilket problem skal løses?
- Hvad betyder et GD&T-symbol?
- Hvilke symboler skal sammenlignes?
- Hvordan beregnes True Position?
- Hvordan vælges datumer?
- Hvordan bygges en Feature Control Frame?

### Design Advisor

Den problemorienterede Advisor hjælper med at koble typiske mekaniske problemer til relevante geometriske kontroller.

Advisoren indeholder blandt andet cases for:

- samling og montage
- boltmønstre og styretappe
- tætning og O-ringspor
- lejesæder og roterende features
- lineære føringer og glideflader
- svejste konstruktioner
- støbte og sprøjtestøbte dele
- skrå boringer og orienteringsproblemer

For hver case vises:

- anbefalet geometrisk kontrol
- begrundelse
- afklarende spørgsmål
- typiske fejl
- forslag til datumstrategi
- forslag til verifikation

### Symbolbibliotek

Symbolbiblioteket indeholder forklaringer til appens geometriske kontroller inden for:

- form
- profil
- orientering
- placering
- kast

Hver symbolside beskriver:

- hvad symbolet kontrollerer
- hvad symbolet ikke kontrollerer
- tolerancezonens princip
- typiske anvendelser
- fordele og begrænsninger
- produktions- og måleperspektiv
- almindelige fejlanvendelser
- relevante alternativer

### Symbolsammenligning

Sammenligningssiden gør det muligt at holde to geometriske kontroller op mod hinanden og sammenligne:

- funktion
- tolerancezone
- begrænsninger
- typiske anvendelser

### True Position Calculator

Calculatoren understøtter interne og eksterne features og beregner:

- MMC
- LMC
- bonus tolerance
- samlet tilladt position
- faktisk True Position ud fra ΔX og ΔY
- Virtual Condition ved MMC
- Least Material Boundary ved LMC
- samlet godkendt/ikke godkendt-resultat

True Position beregnes som en diametral værdi:

```text
True Position = 2 × √(ΔX² + ΔY²)
```

Calculatoren indeholder desuden:

- MMC-, LMC- og RFS-valg
- op-/nedjustering af numeriske værdier
- understøttelse af decimalkomma og decimalpunkt
- separat kontrol af faktisk featurestørrelse
- dynamisk visualisering af minimum, nominel, maksimum og faktisk størrelse
- dynamisk visualisering af målt center mod tilladt positionstolerancezone

### Datum Builder

Datum Builder hjælper med at etablere et funktionelt referencesystem i rækkefølgen:

```text
Primært datum → sekundært datum → tertiært datum
```

Valgte datumer kan sendes videre til FCF Builder sammen med det valgte symbol og projektnavn.

### Avanceret FCF Builder

FCF Builder opbygger simple og sammensatte Feature Control Frames med live SVG-preview.

Builderen understøtter:

- valg af geometrisk karakteristik
- toleranceværdi
- diameter, sfærisk diameter, radius og sfærisk radius
- MMC/MMR
- LMC/LMR
- RFS
- projected tolerance zone
- free state
- combined zone
- united feature
- unequally disposed zone
- supplerende kvalifikatorer
- primært, sekundært og tertiært datum
- individuel datummodifikator
- fælles datumtekst som `A-B`
- composite segmenter
- live SVG-preview
- kopiering som tekst
- eksport som SVG
- eksport som PNG
- lagring som projekt

### Projekter

Gemte FCF-specifikationer lagres lokalt i browserens `localStorage` og kan vises i projektoversigten.

Data synkroniseres ikke automatisk mellem browsere eller enheder.

### Brugeroplevelse

Appen inkluderer:

- responsivt desktop- og mobillayout
- lyst og mørkt tema
- dansk brugerflade
- live-opdatering af beregninger og previews
- lokal projektlagring

## Teknologi

Projektet er bygget med:

- React
- Vite
- React Router
- Lucide React
- CSS
- browserens Local Storage API
- SVG og Canvas til preview og eksport

## Projektstruktur

```text
projektrod/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── CalculatorControls.jsx
    ├── FCFBuilder.jsx
    ├── FCFBuilder.css
    ├── data.js
    ├── main.jsx
    └── style.css
```

## Installation

Projektet kræver Node.js og npm.

Installer dependencies:

```bash
npm install
```

Start udviklingsserveren:

```bash
npm run dev
```

Åbn den lokale adresse, som Vite viser i terminalen.

## Produktionsbuild

Opret en produktionsbuild:

```bash
npm run build
```

Test produktionsbuilden lokalt:

```bash
npm run preview
```

Den genererede produktionsversion placeres i:

```text
dist/
```

## Upload til GitHub

1. Placér alle projektfiler i repositoryets rod og `src`-mappe som vist under projektstrukturen.
2. Kontrollér, at `package.json` ligger i repositoryets rod.
3. Undlad at uploade `node_modules` og `dist`, medmindre deployment-løsningen specifikt kræver det.
4. Commit og push ændringerne.
5. Kør `npm install` og `npm run build` i GitHub Codespaces eller deployment-miljøet.

## Test og kvalitetssikring

Før frigivelse anbefales det at kontrollere følgende workflows:

### Calculator

- intern og ekstern feature
- MMC, LMC og RFS
- værdier ved MMC og LMC
- størrelse uden for tolerancegrænserne
- position inden for og uden for den tilladte zone
- op-/nedjustering af alle numeriske felter
- opdatering af begge visualiseringer

### FCF Builder

- skift mellem alle geometriske karakteristika
- alle implementerede zoneformer
- alle implementerede modifikatorer
- datum A, B og C med individuelle modifikatorer
- fælles datum
- tilføjelse og fjernelse af composite segmenter
- live SVG-preview
- kopiering af tekst
- SVG-eksport
- PNG-eksport
- lagring og visning i projektoversigten

### Navigation

- Advisor til symbolside
- Advisor til Datum Builder
- symbolside til FCF Builder
- Datum Builder til FCF Builder
- FCF Builder til projektoversigt

## Kendte afgrænsninger

- Appen foretager ikke fuld automatisk ISO-GPS-validering af alle mulige kombinationer.
- En synligt gyldig FCF er ikke nødvendigvis funktionelt eller standardmæssigt korrekt.
- Måleusikkerhed, sampling, association, filtrering og datumsimulering vurderes ikke automatisk.
- Projekter lagres kun lokalt i den aktuelle browser.
- Eksporterede SVG- og PNG-filer viser builderens grafiske preview, men bør kontrolleres før anvendelse i frigivet dokumentation.

## Anbefalet engineering review

Før et krav frigives, bør følgende kontrolleres:

- Er den tolererede feature entydigt identificeret?
- Matcher den geometriske kontrol den funktionelle fejlmekanisme?
- Er tolerancezonens form korrekt?
- Repræsenterer datum-systemet den faktiske montage og inspektion?
- Er toleranceværdien realistisk for processen?
- Kan kravet måles reproducerbart?
- Er modifikatorer og composite segmenter nødvendige og korrekt anvendt?

## Version

Denne README beskriver appen efter integrationen af:

- den problemorienterede Design Advisor
- de udvidede symbolsider
- True Position Calculator med dynamiske visualiseringer
- den avancerede FCF Builder med live SVG-preview

## Licens

Der er ikke angivet en licens i projektet. Tilføj en `LICENSE`-fil, hvis projektet skal distribueres, genbruges eller publiceres med eksplicitte brugsrettigheder.
