# Semester

A responsive college planner built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

Use Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production run:

```bash
npm run build
npm start
```

## Features

- Dashboard with pending work, today's classes, estimated GPA, meal allowance, and progress.
- Assignment tracker with add, complete, reopen, delete, search, and status filters.
- Weekly class schedule with times and locations.
- Credit-weighted GPA calculator with editable course grades and credits.
- Weekly meal swipe allowance, dining locations, history, and undo. Weeks reset on Monday in your local timezone.
- Monthly calendar with month navigation, assignment markers, and selected-day classes.
- Responsive desktop sidebar and mobile navigation.

## Data and persistence

The first visit creates realistic local sample data with assignment deadlines relative to today. Changes persist in this browser under localStorage key `semester-planner-v1`; there is no account, server database, or cross-device sync. Reload to verify persistence. Browser storage failures display a warning and retain session edits. Clear that key in browser developer tools to restore the samples. Do not store sensitive information in this demo.

GPA uses a credit-weighted 4.0 scale: 93/90/87/83/80/77/73/70/60 map to 4.0/3.7/3.3/3.0/2.7/2.3/2.0/1.7/1.0; below 60 is 0. Institutional policies may differ. Classes are sample recurring weekday events without term boundaries.

## Structure and implementation steps

1. `src/lib/planner.ts`: typed models, sample data, date helpers, GPA and weekly meal calculations.
2. `src/components/planner-app.tsx`: dashboard and interactive feature views; state initializes from samples, then hydrates and saves browser storage.
3. `src/app/page.tsx` and `layout.tsx`: App Router entry point and metadata.
4. `src/app/globals.css`: Tailwind import and responsive visual system.
5. `tests/planner.test.ts`: calculation boundaries and sample data integrity.

## Validate

```bash
npm test
npm run typecheck
npm run build
```

Manual browser checks: add an assignment, complete it, find it in Completed, reload, and confirm it remains. Select its due date in Calendar. Change a grade and credits and verify GPA updates. Log a meal, reload, and undo it. Change months, test navigation at 390px and desktop widths, and use keyboard focus to reach buttons and form controls.

Future shared persistence can replace the local state adapter with authenticated API routes and a database; this version intentionally runs without credentials or external services.
