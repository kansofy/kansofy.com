# Kansofy Design System

Generated from [Figma Brand Book](https://www.figma.com/design/jYd48MxWGy4ezpgrb1huIn/brand-book-for-claude)

## Files

| File | Purpose |
|------|---------|
| `tokens.css` | CSS custom properties (variables) |
| `components.css` | Pre-built component classes |
| `tailwind.config.js` | Tailwind CSS preset |

## Quick Start

### Option 1: CSS Variables

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
```

```html
<button class="btn btn-primary">Get Started</button>
```

### Option 2: Tailwind CSS

```js
// tailwind.config.js
const kansofy = require('./design-system/tailwind.config.js');

module.exports = {
  presets: [kansofy],
  content: ['./src/**/*.{html,js,jsx,tsx}'],
};
```

```html
<button class="bg-coral text-off-white px-8 py-4 rounded-md font-medium">
  Get Started
</button>
```

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `off-white` | #FCF8ED | Primary background |
| `graphite` | #111111 | Primary text |
| `light-grey` | #898D8A | Secondary text |
| `coral` | #E3917A | Primary accent, CTAs |
| `aquamarine` | #6FAD9D | Success, secondary accent |
| `royal-blue` | #3D62A0 | Links, info |
| `baby-blue` | #B5D1DC | Subtle accents |
| `mustard` | #DBB35B | Warnings, highlights |

## Typography

| Class | Font | Size | Use |
|-------|------|------|-----|
| `.display-xl` | Louize Display | 64px | Hero headlines |
| `.display-lg` | Louize Display | 48px | Page titles |
| `.display-md` | Louize Display | 32px | Section heads |
| `.heading-lg` | Inter Display | 24px | Card titles |
| `.heading-md` | Inter Display | 20px | Subsections |
| `.body-lg` | Inter Display | 18px | Lead text |
| `.body-md` | Inter Display | 16px | Body copy |
| `.body-sm` | Inter Display | 14px | Captions |
| `.label` | Inter Display | 12px | Labels, tags |

## Spacing Scale

Based on 8px grid:

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 16px |
| `--space-4` | 24px |
| `--space-5` | 32px |
| `--space-6` | 48px |
| `--space-7` | 64px |
| `--space-8` | 80px |
| `--space-9` | 120px |

## Components

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Forms

```html
<div class="form-group">
  <label class="form-label">
    Email <span class="optional">(optional)</span>
  </label>
  <input type="email" class="form-input" placeholder="you@example.com">
  <p class="form-helper">We'll never share your email.</p>
</div>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Supporting text here.</p>
  </div>
  <p>Card content goes here.</p>
</div>
```

### Stats

```html
<div class="stats-row">
  <div class="stat">
    <span class="stat-value">70%</span>
    <span class="stat-label">Success Rate</span>
  </div>
</div>
```

### Lists

```html
<!-- Numbered -->
<ol class="numbered-list">
  <li><strong>Title</strong> Description text.</li>
</ol>

<!-- Bullets -->
<ul class="bullet-list">
  <li>List item with coral bullet</li>
</ul>
```

### Tags

```html
<span class="tag tag-coral">New</span>
<span class="tag tag-aquamarine">Success</span>
<span class="tag tag-outline">Default</span>
```

## Font Files

Required fonts in `/fonts/`:
- `205TF-LouizeDisplay-Regular.otf`
- `205TF-LouizeDisplay-Italic.otf`
- `InterDisplay-Light.woff2`
- `InterDisplay-Regular.woff2`
- `InterDisplay-Medium.woff2`
- `InterDisplay-SemiBold.woff2`
