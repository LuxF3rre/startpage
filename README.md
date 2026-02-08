# startpage

A personal browser start page built with [Astro](https://astro.build/), featuring the [Catppuccin Macchiato](https://github.com/catppuccin/catppuccin) color palette and JetBrains Mono Nerd Font.

![](image.png)

## Features

- Categorized quick-access links (general, media, social, tech)
- Catppuccin Macchiato theme
- JetBrains Mono Nerd Font
- Responsive layout
- Optimized images via `sharp`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Customization

Edit `src/pages/index.astro` to change the links, categories, title, or styling. Replace `src/assets/logo.png` with your own image.

## Tech Stack

- [Astro](https://astro.build/)
- [sharp](https://sharp.pixelplumbing.com/) (image optimization)
