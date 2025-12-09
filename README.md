# WordPress React Block Themes Repository

This repository contains custom WordPress block themes built with **React** and **Tailwind CSS**.

---

## Themes in this Repo

- **my-first-react-block-theme**  
  A React-based Gutenberg block theme with Tailwind styling.  
  (See `themes/my-first-react-block-theme/README.md` for theme-specific instructions.)

- Future themes can be added under `themes/` folder with their own README.

---

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd wordpress-themes
```

2. Navigate to a theme folder:

```bash
cd themes/my-first-react-block-theme
```
3. Install dependencies and build (see theme README):

```bash
npm install
npm run dev
```
Collaboration Guidelines

- Add new themes inside the themes/ folder.
- Each theme should include its own README.md with instructions.
- Do not commit node_modules/ or .DS_Store files.
- Always commit configuration files: package.json, postcss.config.js, tailwind.config.js.
