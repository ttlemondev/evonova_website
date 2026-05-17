# TopFX Website Implementation Summary

**Status:** Ready for implementation  
**Main Plan:** `2026-05-17-entroder-website-implementation.md`  
**Date:** 2026-05-17

---

## Overview

This document provides a high-level summary of the implementation plan for the TopFX (熵序之间) website. The complete detailed plan is in `2026-05-17-entroder-website-implementation.md`.

---

## Key Requirements

### 1. UI/UX Generation Requirement

**CRITICAL:** All UI components MUST be generated using the `ui-ux-pro-max` skill to ensure:
- Production-grade code quality
- Adherence to Figma design system from DESIGN.md
- Proper TypeScript types
- Responsive design
- Accessibility compliance

### 2. Design System Compliance

All components must follow the design system defined in `DESIGN.md`:
- Colors: Black/white core + pastel color blocks (lime, lilac, cream, mint, pink, coral, navy)
- Typography: Display XL (86px), Display LG (64px), Headline (26px), etc.
- Components: Pill-shaped buttons, rounded cards (24px), color block sections
- Spacing: 8px base unit, section spacing 96px
- Responsive breakpoints: Mobile (560px), Tablet (960px), Desktop (1280px)

### 3. Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

---

## Implementation Tasks Overview

### Phase 1: Foundation (Tasks 1-3) ✅ Completed in Plan
1. Project setup and configuration
2. Site constants and utilities
3. Reusable UI components (Button, Card, ColorBlock)

### Phase 2: Navigation (Task 4)
4. Create Navbar and Footer components using ui-ux-pro-max

### Phase 3: Homepage (Tasks 5-8)
5. Root layout with navigation
6. Homepage sections Part 1: Hero, Problems, Solutions (using ui-ux-pro-max)
7. Homepage sections Part 2: Services, Courses, Packages (using ui-ux-pro-max)
8. Assemble complete homepage

### Phase 4: Course Pages (Task 9)
9. Create course detail pages for all 4 courses (using ui-ux-pro-max)
   - AI Native Org
   - Coding Basic
   - Coding Intermediate
   - Coding Advanced

### Phase 5: Additional Pages (Tasks 10-12)
10. About page (using ui-ux-pro-max)
11. Services page (using ui-ux-pro-max)
12. Contact page with form (using ui-ux-pro-max + React Hook Form)

### Phase 6: Polish & Deploy (Tasks 13-15)
13. SEO optimization (metadata, structured data)
14. Responsive testing and fixes
15. Deploy to Vercel

---

## Component Generation Pattern

For each component that requires ui-ux-pro-max, follow this pattern:

```
**Instruction for implementation:**
Use the ui-ux-pro-max skill with the following prompt:

"Create a [ComponentName] component for [purpose] following the Figma design system.

Requirements:
- [Specific design requirements from specs]
- [Layout and spacing details]
- [Typography specifications]
- [Color and styling]
- [Props and TypeScript types]
- [Responsive behavior]
- Use cn() utility for className merging
- Export as default

File path: src/components/[path]/[ComponentName].tsx"

Expected: Production-grade [ComponentName] component
```

---

## File Structure

```
ai-train-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Homepage)
│   │   ├── about/page.tsx
│   │   ├── courses/
│   │   │   ├── ai-native-org/page.tsx
│   │   │   ├── coding-basic/page.tsx
│   │   │   ├── coding-intermediate/page.tsx
│   │   │   └── coding-advanced/page.tsx
│   │   ├── services/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── navigation/ (Navbar, Footer)
│   │   ├── homepage/ (6 section components)
│   │   ├── courses/ (CourseHero, CourseOutline, CourseCTA)
│   │   ├── contact/ (ContactForm)
│   │   └── ui/ (Button, Card, ColorBlock)
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── docs/superpowers/
│   ├── specs/ (Design documents)
│   └── plans/ (Implementation plans)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design Reference Documents

- **Main Design:** `docs/superpowers/specs/2026-05-17-entroder-website-design.md`
- **Homepage:** `docs/superpowers/specs/pages/01-homepage.md`
- **About:** `docs/superpowers/specs/pages/02-about.md`
- **AI Native Org Course:** `docs/superpowers/specs/pages/03-course-ai-native-org.md`
- **Basic Course:** `docs/superpowers/specs/pages/04-course-coding-basic.md`
- **Intermediate Course:** `docs/superpowers/specs/pages/05-course-coding-intermediate.md`
- **Advanced Course:** `docs/superpowers/specs/pages/06-course-coding-advanced.md`
- **Services:** `docs/superpowers/specs/pages/07-services.md`
- **Contact:** `docs/superpowers/specs/pages/08-contact.md`
- **Design System:** `DESIGN.md`

---

## Execution Options

### Option 1: Subagent-Driven Development (Recommended)

Use `superpowers:subagent-driven-development` skill:
- Fresh subagent per task
- Two-stage review between tasks
- Fast iteration with quality checks

### Option 2: Inline Execution

Use `superpowers:executing-plans` skill:
- Execute tasks in current session
- Batch execution with checkpoints
- Good for smaller tasks

---

## Quality Checklist

Before marking implementation complete, verify:

- [ ] All components generated using ui-ux-pro-max skill
- [ ] Design system compliance (colors, typography, spacing)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All 8 pages render correctly
- [ ] Navigation and smooth scrolling work
- [ ] Contact form validation works
- [ ] SEO metadata present on all pages
- [ ] No TypeScript errors
- [ ] Build succeeds (`npm run build`)
- [ ] Deployed to Vercel successfully

---

## Next Steps

1. Review this summary and the detailed plan
2. Choose execution approach (subagent-driven or inline)
3. Begin implementation starting with Task 1
4. Follow the plan task-by-task
5. Commit after each completed task
6. Deploy to Vercel when all tasks complete

---

**Ready to begin implementation!**
