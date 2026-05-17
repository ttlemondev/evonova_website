# Fix Design System Implementation Plan

**Goal:** Rebuild all components to strictly follow DESIGN.md specifications

**Problem:** Current implementation does not follow the Figma design system defined in DESIGN.md. The page looks messy with incorrect fonts, colors, spacing, and component styles.

**Root Cause:** The initial implementation used Tailwind CSS v4 with custom CSS variables, but did not properly implement the design tokens and component styles from DESIGN.md.

---

## Critical Issues to Fix

### 1. Typography System
**Current:** Generic system fonts, incorrect sizes and weights
**Required:** 
- figmaSans (or Inter as fallback) with variable weights: 320, 330, 340, 480, 540, 700
- Precise font sizes: Display XL (86px), Display LG (64px), Headline (26px), etc.
- Tight negative letter-spacing on display sizes
- figmaMono for eyebrows and captions only

### 2. Color System
**Current:** Incorrect color values
**Required:**
- Monochrome core: #000000 (black) and #ffffff (white)
- Pastel color blocks with exact hex values:
  - block-lime: #dceeb1
  - block-lilac: #c5b0f4
  - block-cream: #f4ecd6
  - block-mint: #c8e6cd
  - block-pink: #efd4d4
  - block-coral: #f3c9b6
  - block-navy: #1f1d3d

### 3. Component Styles
**Current:** Generic Tailwind components
**Required:**
- button-primary: Black bg, white text, pill shape (50px), padding 10px 20px
- button-secondary: White bg, black text, pill shape, padding 8px 18px 10px
- color-block-section: Full-width panels with rounded-lg (24px) corners, padding 48px

### 4. Spacing System
**Current:** Inconsistent spacing
**Required:**
- Base unit: 8px
- Tokens: hair (1px), xxs (4px), xs (8px), sm (12px), md (16px), lg (24px), xl (32px), xxl (48px), section (96px)

---

## Implementation Plan

### Task 1: Fix Global Styles and Design Tokens

**Files to modify:**
- `src/app/globals.css`

**Actions:**
1. Replace Tailwind CSS v4 configuration with proper design tokens
2. Implement complete typography system with Inter font
3. Implement complete color system with exact hex values
4. Implement spacing system
5. Implement border radius system

### Task 2: Rebuild UI Components

**Files to rebuild:**
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/ColorBlock.tsx`

**Requirements:**
- Use ui-ux-pro-max skill
- Strictly follow DESIGN.md component specifications
- Implement exact padding, border-radius, and typography

### Task 3: Rebuild Homepage Sections

**Files to rebuild:**
- `src/components/homepage/HeroSection.tsx`
- `src/components/homepage/ProblemsSection.tsx`
- `src/components/homepage/SolutionsSection.tsx`
- `src/components/homepage/ServicesSection.tsx`
- `src/components/homepage/CoursesSection.tsx`
- `src/components/homepage/PackagesSection.tsx`

**Requirements:**
- Use ui-ux-pro-max skill
- Follow DESIGN.md layout principles
- Use correct typography tokens
- Use correct color-block sections
- Implement proper spacing

### Task 4: Rebuild Navigation Components

**Files to rebuild:**
- `src/components/navigation/Navbar.tsx`
- `src/components/navigation/Footer.tsx`

**Requirements:**
- Navbar: 56px height, white bg, hairline border, pill CTAs
- Footer: White bg (not dark), caption typography, proper spacing

---

## Design System Reference

From DESIGN.md:

**Typography Hierarchy:**
```
display-xl: 86px, weight 340, line-height 1.00, letter-spacing -1.72px
display-lg: 64px, weight 340, line-height 1.10, letter-spacing -0.96px
headline: 26px, weight 540, line-height 1.35, letter-spacing -0.26px
subhead: 26px, weight 340, line-height 1.35, letter-spacing -0.26px
card-title: 24px, weight 700, line-height 1.45, letter-spacing 0
body-lg: 20px, weight 330, line-height 1.40, letter-spacing -0.14px
body: 18px, weight 320, line-height 1.45, letter-spacing -0.26px
body-sm: 16px, weight 330, line-height 1.45, letter-spacing -0.14px
button: 20px, weight 480, line-height 1.40, letter-spacing -0.10px
eyebrow: 18px, weight 400, line-height 1.30, letter-spacing 0.54px (figmaMono, uppercase)
caption: 12px, weight 400, line-height 1.00, letter-spacing 0.60px (figmaMono, uppercase)
```

**Component Specifications:**
```
button-primary:
  - backgroundColor: #000000
  - textColor: #ffffff
  - rounded: 50px (pill)
  - padding: 10px 20px
  - typography: button (20px, weight 480)

button-secondary:
  - backgroundColor: #ffffff
  - textColor: #000000
  - rounded: 50px (pill)
  - padding: 8px 18px 10px
  - typography: button (20px, weight 480)

color-block-section:
  - backgroundColor: block-lime/lilac/cream/mint/pink/coral/navy
  - textColor: #000000 (or #ffffff for navy)
  - rounded: 24px (lg)
  - padding: 48px (xxl)
```

---

## Execution Strategy

1. Start with Task 1 (Global Styles) - this is the foundation
2. Then Task 2 (UI Components) - rebuild from scratch
3. Then Task 3 (Homepage Sections) - rebuild with correct components
4. Finally Task 4 (Navigation) - polish the chrome

Each task should:
- Use ui-ux-pro-max skill for component generation
- Reference DESIGN.md explicitly
- Test build after each change
- Commit after each task

---

**Status:** Ready to execute
**Priority:** CRITICAL - current implementation is unusable
