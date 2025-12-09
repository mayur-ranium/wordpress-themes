
```markdown
# My First React Block Theme

A custom WordPress block theme built using **React** and **Tailwind CSS**.

---

## Folder Structure

my-first-react-block-theme/
│
├── blocks/ ← Custom Gutenberg blocks
├── src/ ← React source files
├── dist/ ← Compiled theme files (ignored in Git)
├── style.css ← Theme stylesheet
├── package.json ← Node dependencies and scripts
├── package-lock.json ← Locked versions of dependencies
├── postcss.config.js ← Tailwind/PostCSS config
├── tailwind.config.js ← Tailwind CSS configuration
├── .gitignore ← Ignored files (node_modules, .DS_Store, dist)
└── README.md ← Theme instructions


---
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd wordpress-themes/themes/my-first-react-block-theme
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the theme
- Development (watch mode)
```bash
npm run start
```
- Production build
```bash
npm run build
```

### 4. Add to WordPress
Copy the theme folder to your local WordPress installation:
```bash
wordpress/wp-content/themes/my-first-react-block-theme
```
Activate it via WordPress Admin → Appearance → Themes.

