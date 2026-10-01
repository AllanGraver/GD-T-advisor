# GD&T Engineer MVP

En upload-klar React/Vite-webapp med:

- Interaktiv hub
- Routing
- Symbolbibliotek med søgning og filtre
- Design Advisor
- Symbol-sammenligning
- Datum Builder
- Feature Control Frame Builder med live preview
- Lokal projektlagring
- Projektoversigt og projektdetaljer
- Responsivt lyst/mørkt tema

Appen anvender ingen virksomhedsnavne eller logoer. Det visuelle udtryk er neutralt og professionelt.

## Lokal start

Krav: Node.js 20.19+ eller 22.12+.

```bash
npm install
npm run dev
```

## Produktionsbuild

```bash
npm run build
npm run preview
```

## GitHub Pages

Projektet er en SPA. Til GitHub Pages anbefales en workflow-baseret Vite-deployment. Hvis repository-navnet ikke er brugerens root-site, tilpas `base` i `vite.config.js`.

## Faglig afgrænsning

Appen er et beslutnings- og læringsværktøj. Den udgør ikke en formel validering af en teknisk tegning. Toleranceværdier, datumstrategi, modifikatorer og målemetode skal vurderes mod funktion og gældende standarder.
