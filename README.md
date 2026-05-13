# Thandolwethu Mbatha — Premium Portfolio Website

A deploy-ready Next.js portfolio website for Thandolwethu Mbatha, a Johannesburg-based graphic designer and visual storyteller. The visual direction is a premium hybrid of an interactive creative studio and brutalist/editorial designer portfolio.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React
- Static/local project data for simple Vercel deployment

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Lint

Linting is configured with ESLint:

```bash
npm run lint
```

## How to edit project data

Project content lives in:

```text
src/data/projects.ts
```

Each project includes title, slug, client, year, categories, services, descriptions, cover image, gallery images, and featured status. Add a new object to the `projects` array and the `/work` page plus dynamic `/work/[slug]` page will update automatically.

## How to add images

Add images under the matching public folder paths, for example:

```text
public/images/projects/maison-originals/cover.jpg
public/images/projects/maison-originals/01.jpg
public/images/projects/safe-space-africa/cover.jpg
public/images/projects/xedi/cover.jpg
public/images/projects/archive-central/cover.jpg
public/images/projects/other-projects/cover.jpg
public/images/projects/fashion-photography/cover.jpg
```

The site uses a reusable `SafeImage` component. If an image is missing, the layout remains stable and a styled placeholder appears instead of crashing.

## Pages

- `/` — Home page with fullscreen hero, featured work, services, about preview, and CTA
- `/work` — Filterable editorial portfolio grid
- `/work/[slug]` — Dynamic project case-study pages
- `/about` — Biography, philosophy, skills, experience, education, and CV placeholder
- `/contact` — Contact details and mailto-based enquiry form

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: Next.js default
4. Deploy.

## Custom domain notes

In Vercel, open the project dashboard, go to **Settings → Domains**, add the custom domain, then follow the DNS instructions Vercel provides. After DNS propagation, update `metadataBase` in `src/app/layout.tsx` to the production domain.

## Contact form notes

The current form is frontend-only and opens the visitor's email client with a pre-filled message. To add a hosted form backend later, connect the submit handler in `src/components/ContactForm.tsx` to Formspree, Resend, EmailJS, or another preferred provider.
