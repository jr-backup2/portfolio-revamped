# Portfolio Revamped

A Vite + React + JavaScript portfolio starter with a cinematic Tekken-style split-screen direction.

## Architecture

```txt
src/
  components/
    common/      Shared UI primitives such as badges and section headers.
    layout/      App shell and persistent navigation.
    sections/    Page-level sections for the portfolio flow.
  constants/     Theme direction, premium colors, and section ids.
  data/          Mapped portfolio content for navigation, cards, and projects.
  styles/        Tailwind theme tokens and animation utilities.
  utils/         Small helpers used across components.
```

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Direction

- Cinematic split-screen hero layout.
- Premium neon cyan, ember red, violet, gold, and smoke palette.
- Data mapping for maintainable navigation, stats, stack chips, and project cards.
- Animation-ready CSS organization for glows, scanlines, and future motion layers.
