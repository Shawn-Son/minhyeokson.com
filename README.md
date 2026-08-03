# minhyeokson.com

One page. Next.js, TypeScript, Tailwind. Static.

```bash
npm run dev
npm run build
```

## Editing

Everything — copy, jobs, projects, links — is in **`content/site.ts`**. That is
the only file you normally touch.

The rule for that file is length: **one sentence per item, two at most.** The
whole point of this layout is that a recruiter reads all of it in twenty
seconds. If something needs a paragraph, it belongs in the resume PDF or a
GitHub README, not here.

## Your photo

Drop a headshot at `public/portrait.jpg` and it appears next to the intro
automatically. No file, no photo, no broken layout — the page checks at build
time. Roughly square, 600×600 or larger.

Because that check runs once when the module loads, **restart `npm run dev`
after adding the file** or it will not show up locally. Deploys are unaffected;
the check runs fresh on every build.

## Site URL

`siteUrl` resolves from the environment, so nothing needs editing to deploy:

1. `NEXT_PUBLIC_SITE_URL` — set this in Vercel once you own a domain.
2. `VERCEL_PROJECT_PRODUCTION_URL` — Vercel injects this, so the free
   `*.vercel.app` URL is already correct.
3. `http://localhost:3000` in development.

## Deploying

Push to GitHub, import on Vercel, accept the defaults. Free on the Hobby plan.

## Project links

`href` on a project is optional. Leave it off and the card renders as plain
text — no link, no `↗`, no hover lift. The German NER work is under NDA, so it
has no `href`.

## Analytics

`<Analytics />` from `@vercel/analytics` is mounted in `app/layout.tsx`. Page
views appear in the Vercel dashboard after the next deploy; nothing is
collected in local dev.
