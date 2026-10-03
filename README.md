# Safari — Sanity Studio

Standalone Sanity Studio (`sanity@6`) for **Safari**, the award-travel routing
agent (Sanity Challenge, Path One). This is the content-modeling half of the
project; the Next.js app lives in the sibling `../safari/` folder.

```
parent/
├── safari/         # the Next.js app, solver, API routes
└── studio-safari/  # you are here — the Studio (schema + Studio config)
```

- **Project:** `62hh3v9t` · **Dataset:** `production`
- **Schema:** the 9 types in `schemaTypes/` (design §9) — `source`,
  `pointsCurrency`, `program`, `transferPartner`, `awardChartEntry`,
  `contradiction`, `userDecision`, and the inline object types `claim` /
  `resolution`.

## Single source of truth (no drift)

`schemaTypes/source.ts` does **not** hand-copy the `authority` enum. It derives
its `options.list` from `AUTHORITY_OPTIONS` in the app's dependency-free
`../../safari/lib/authority.ts` — the same object the solver reads for its
precedence rank. The schema enum and the solver rank therefore cannot diverge
(design §4.1 / M1). That shared file imports nothing from the app (no solver, no
React) precisely so the Studio can import it across the package boundary.

## Develop

```bash
npm install
npm run dev        # Studio at http://localhost:3333
```

## Deploy (optional)

```bash
npx sanity login
npx sanity deploy  # hosted Studio
```

Seeding the dataset is done from the app package (`cd ../safari && npm run
seed`), not from here. See `../safari/README.md` for the full run order.
