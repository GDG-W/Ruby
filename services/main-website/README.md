# Devfest Lagos 2025

This repository contains a nextjs project for the 2025 Devfest Lagos website

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with font definitions
│   ├── page.tsx           # Homepage
│   └── page.module.scss   # Homepage-specific styles
├── components/            # Reusable UI components
│
├── fonts/                 # Local font files
│   └── Akira.otf         # Custom Akira font
└── styles/               # Global styling system
    ├── common.scss       # Auto-imported into all SCSS files
    ├── global.scss       # Global CSS imports
    ├── breakpoints.scss  # Responsive breakpoint system
    ├── reset.scss        # CSS reset
    ├── typography.scss   # Typography mixins
    └── variables.scss    # Design tokens (colors, fonts)
```

## 🎨 Styling Architecture

### Design System Approach

This project uses a **colocated component styling** approach with global design tokens:

- **Global tokens** (`variables.scss`) - Colors, fonts, and design constants
- **Typography system** (`typography.scss`) - Consistent text styling mixins
- **Responsive utilities** (`breakpoints.scss`) - Advanced media query system
- **Component styles** (`.module.scss`) - Scoped styles next to components

### Auto-Imported Styles

All SCSS files automatically import `common.scss`, giving you instant access to:

```scss
// Use anywhere without imports
.my-component {
  background: $background-cream;
  @include text-h1;

  @include media(">tablet") {
    @include text-h2;
  }
}
```

## 🎯 Typography System

Text styles are organized into semantic mixins based on Figma design tokens:

```scss
@include text-h1;  // 56px, 900 weight
@include text-h2;  // 48px, 900 weight
@include text-p0;   // 28px, 600 weight
```

## 🌈 Color System

Colors are organized by purpose and exported from Figma:

```scss
// Background colors
$background-cream: #fcf6df;
$background-white: #ffffff;
$grey-0: #ffffff;    // Lightest
$grey-100: #141414; // Darkest
```

## 📱 Responsive System

Advanced media query system with intuitive syntax:

```scss
.component {
  // Mobile first
  width: 100%;

  // Tablet and up
  @include media(">tablet") {
    width: 50%;
  }

  // Between phone and desktop
  @include media(">phone", "<desktop") {
    padding: 2rem;
  }

  // Complex queries
  @include media(">=950px", "retina2x") {
    transform: scale(0.5);
  }
}
```

### Breakpoints
- `phone`: 425px
- `tablet`: 768px
- `desktop-sm`: 950px
- `desktop`: 1440px
- `LGdesktop`: 1920px

## 🧩 Component Architecture

The components folder contains both general components (eg button and header) and section components (eg homepage-hero and homepage-marquee)

Components follow a consistent structure:

```
component-name/
├── index.tsx              # Component logic & exports
└── component-name.module.scss  # Scoped styles
```

## 🔧 Development Notes

### SCSS Modules
- All component styles use SCSS modules for automatic scoping
- Class names are automatically generated to prevent conflicts
- Import as `styles` object and reference as `styles.className`

### Auto-Import Configuration
Next.js automatically prepends `common.scss` to every SCSS file, making all design tokens and mixins instantly available without manual imports. You can look at the next.config.ts file to see the sass config for that

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) to view the site
4. Get to building :)
