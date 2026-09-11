# Noble Craft Trade Solutions — Website

This repository contains the marketing website for Noble Craft Trade Solutions, a company developing software and services for property investors. The single-page site introduces the company and Property Spectrum, a property portfolio application currently in development.

Local development and build commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install project dependencies and update the lockfile |
| `npm run dev` | Start the local dev server (default: http://localhost:4321) |
| `npm run build` | Build the production site into `./dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run check` | Run build + TypeScript checks + Wrangler dry-run (as configured) |
| `npm run deploy` | Deploy using Wrangler (requires configured Cloudflare credentials) |

Deployment

This site uses the Cloudflare Workers adapter and is configured with `wrangler.json` to upload static assets from `./dist`. Do not change DNS or Cloudflare account settings from this repository. Confirm the production hostname with the owner before publishing; `astro.config.mjs` currently contains a placeholder site URL and must be updated to produce correct canonical and sitemap URLs.

Notes

- The repository was converted from the Astro blog starter into a single-page company website. Blog scaffolding and RSS support were removed.
- Do not publish until the owner confirms the production hostname and legal entity name spelling.

