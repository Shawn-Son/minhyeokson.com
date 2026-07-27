# minhyeokson.com

Personal site for Minhyeok (Shawn) Son — Next.js 15 (App Router), TypeScript,
Tailwind v4. Fully static: every route prerenders at build time.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build — also type-checks and lints
npm run lint
```

## The one rule

**Every fact on this site lives in `content/`. Nothing is typed into a
component.**

That is deliberate. The three tailored resume PDFs had drifted apart — the same
eBay role carried different numbers in each — and a public website plus a PDF
that disagree is worse than either alone. `content/` is now the single source
of truth, and a tailored resume should be a _subset_ of it, never a new set of
numbers.

| File                     | Holds                                                             |
| ------------------------ | ----------------------------------------------------------------- |
| `content/profile.ts`     | Name, positioning line, contact links, work authorization, skills |
| `content/experience.ts`  | Roles and bullets, education, publications, awards                |
| `content/projects.ts`    | Every project, including the full deep-dive narrative             |
| `content/types.ts`       | Types — including the fixed six-section project structure         |

### Adding a project

Append to the array in `content/projects.ts`. The type requires all six
narrative sections (`problem`, `data`, `approach`, `evaluation`, `results`,
`reflection`), so the build fails if one is missing — that is the point. Set
`featured: true` to surface it on the home page.

Routes, the sitemap, and the tag filter all derive from that array. There is
nothing else to update.

### Writing content

Body strings support `**bold**`, `` `code` ``, and `[links](url)` via the tiny
renderer in `lib/markup.tsx`. No MDX toolchain, on purpose.

## Structure

```
app/
  page.tsx                 home — hero, featured work, timeline, research
  projects/page.tsx        index with client-side tag filter
  projects/[slug]/page.tsx deep-dive template (generateStaticParams)
  research/page.tsx        plain-language summary of the Scientific Reports paper
  about/page.tsx           bio, education, skills, honors
  opengraph-image.tsx      link preview card, generated at build
  icon.tsx                 favicon, generated at build
  sitemap.ts / robots.ts
components/                site chrome, UI primitives, project + timeline views
content/                   all copy and data
lib/markup.tsx             inline markup renderer
public/resume/             the public resume PDF
```

## Theming

Semantic CSS variables in `app/globals.css`, swapped by a `.dark` class on
`<html>`. An inline script in `app/layout.tsx` applies the class before first
paint — reading `localStorage` first, falling back to the OS preference — so
there is no flash of the wrong theme.

To restyle the whole site, change the variables in `:root` and `html.dark`.
Nothing else references raw colors.

## Deploying

1. Push to GitHub.
2. Import the repo on Vercel — the Next.js defaults are correct, no config.
3. Add the custom domain in Vercel's project settings and paste the DNS records
   it prints into your registrar.
4. In Cloudflare, set those records to **DNS only** (grey cloud). Proxying in
   front of Vercel causes certificate problems and buys nothing.
5. Update `profile.siteUrl` in `content/profile.ts` if the domain differs from
   `minhyeokson.com` — canonical URLs, the sitemap, and OG tags all read it.

## Before it goes public

- [ ] Fix the broken `github.com/Shawn/Agentic-RAG` link in the resume PDF
      (correct: `github.com/Shawn-Son/Agentic-RAG`).
- [ ] Confirm the American Airlines title. The site says "Applied Data
      Scientist — Student Team, via University of Michigan" to match LinkedIn.
- [ ] Publish the eBay NER project on GitHub and add the link in
      `content/projects.ts` — it is the strongest credential with no repo.
- [ ] Decide whether the Kalshi return figure stays.
