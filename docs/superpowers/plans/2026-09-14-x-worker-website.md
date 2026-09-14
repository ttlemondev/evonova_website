# X Worker Website Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate X Worker into the bilingual TOPFX website as the product platform that operationalizes AI-native organization transformation.

**Architecture:** Store all public copy in the existing `next-intl` locale files, keep reusable homepage content in a focused component, and add one App Router product route. Existing pages remain structurally independent and link through locale-aware `next/link` navigation.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, next-intl, Tailwind CSS 4, react-hook-form, Zod.

---

### Task 1: Add bilingual content model

**Files:**
- Modify: `messages/zh.json`
- Modify: `messages/en.json`

- [ ] Add navigation, homepage X Worker, product page, service, about, and contact-form strings with matching locale keys.
- [ ] Parse both JSON files to confirm valid syntax and matching top-level structures.

### Task 2: Update global navigation

**Files:**
- Modify: `src/components/navigation/Navbar.tsx`
- Modify: `src/components/navigation/Footer.tsx`

- [ ] Add locale-aware X Worker and services routes to desktop and mobile navigation.
- [ ] Add X Worker and services to Footer quick links without restoring the NexRouter Footer link.

### Task 3: Add homepage product block

**Files:**
- Create: `src/components/homepage/XWorkerSection.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] Build the dedicated homepage block with positioning, three core capabilities, workflow summary, measurable value, and product-page CTA.
- [ ] Insert it after `SolutionsSection` and before `ServicesSection`.

### Task 4: Add X Worker product route

**Files:**
- Create: `src/app/[locale]/x-worker/page.tsx`

- [ ] Add sections for positioning, pain points, operating model, capabilities, scenarios, deployment, implementation, metrics, and consultation CTA.
- [ ] Use locale-aware links and existing design tokens/components only.

### Task 5: Align existing pages

**Files:**
- Modify: `src/app/[locale]/services/page.tsx`
- Modify: `src/app/[locale]/about/page.tsx`
- Modify: `src/app/[locale]/contact/page.tsx`
- Modify: `src/components/contact/ContactForm.tsx`

- [ ] Internationalize the services page and organize it around diagnosis, implementation, and operations.
- [ ] Present X Worker first in the about-page product section while retaining NexRouter as related infrastructure.
- [ ] Add consultation type and business scenario fields to the contact form schema and UI.

### Task 6: Verify integration

**Files:**
- Verify: `src/**`
- Verify: `messages/*.json`

- [ ] Run `npm run lint` and resolve only issues introduced by this work.
- [ ] Run `npm run build` and confirm both `/zh/x-worker` and `/en/x-worker` are generated.
- [ ] Search Footer source to confirm it contains no NexRouter link.
