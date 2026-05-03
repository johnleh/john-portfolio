# John Le Houillier — Portfolio

Personal portfolio site built with Next.js 16 and Tailwind CSS 4.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**

## Structure

```
src/
├── app/
│   ├── globals.css   # All styles
│   ├── layout.js     # Root layout
│   ├── not-found.js  # 404 handler
│   └── page.js       # Single-page portfolio (hero, stack, projects)
├── components/
│   ├── NavBar.js
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
  title: "Project Name",
  description: "Short description.",
  tags: ["TAG1", "TAG2"],
  github: "https://github.com/...",
}
```

