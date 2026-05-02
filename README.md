# John Le Houillier — Portfolio

Personal portfolio site built with Next.js 16 and Tailwind CSS 4. Features a brutalist-inspired visual direction using a teal palette.

## Pages

- `/` — Redirects to `/about`
- `/about` — Introduction, tech stack, and featured project

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **IBM Plex Sans / IBM Plex Mono** (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── about/        # About page
│   ├── projects/     # Projects page
│   ├── globals.css   # All styles
│   ├── layout.js     # Root layout
│   └── page.js       # Root redirect → /about
├── components/
│   ├── NavBar.js     # Shared navigation
│   └── ProjectCard.js
└── data/
    ├── Projects.js   # Project content
    └── Constants.js  # External URLs (LinkedIn, GitHub)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Adding a Project

Add an entry to `src/data/Projects.js`:

```js
{
  meta: "YEAR - TYPE",
  title: "Project Name",
  description: "Short description.",
  highlights: ["Feature one", "Feature two"],
  tags: ["TAG1", "TAG2"],
  imgSrc: ["screenshot.png"],          // place images in public/projects/
  github: "https://github.com/...",
  learnMoreLink: "https://..."
}
```

Place screenshot files in `public/projects/`.


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
