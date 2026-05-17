# Entroder Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready website for Entroder (熵序之间), an AI training company, with 8 pages including a single-page scrolling homepage and 7 detail pages.

**Architecture:** Next.js 15 App Router with Tailwind CSS, following the Figma-inspired design system from DESIGN.md. All UI components will be generated using the ui-ux-pro-max skill to ensure high-quality, production-grade frontend code. The homepage uses a single-page scrolling design with 8 sections, while other pages are standard routed pages.

**Tech Stack:** 
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form (for contact form)
- Vercel (deployment)

**Design Reference:**
- Main spec: `docs/superpowers/specs/2026-05-17-entroder-website-design.md`
- Page specs: `docs/superpowers/specs/pages/*.md`
- Design system: `DESIGN.md`

---

## File Structure

This implementation will create the following file structure:

```
ai-train-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with navigation
│   │   ├── page.tsx                   # Homepage (single-page scroll)
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── courses/
│   │   │   ├── ai-native-org/
│   │   │   │   └── page.tsx          # AI Native Org course
│   │   │   ├── coding-basic/
│   │   │   │   └── page.tsx          # Basic coding course
│   │   │   ├── coding-intermediate/
│   │   │   │   └── page.tsx          # Intermediate coding course
│   │   │   └── coding-advanced/
│   │   │       └── page.tsx          # Advanced coding course
│   │   ├── services/
│   │   │   └── page.tsx              # Services page
│   │   └── contact/
│   │       └── page.tsx              # Contact page
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx            # Fixed navigation bar
│   │   │   └── Footer.tsx            # Footer component
│   │   ├── homepage/
│   │   │   ├── HeroSection.tsx       # Hero section
│   │   │   ├── ProblemsSection.tsx   # Problems section
│   │   │   ├── SolutionsSection.tsx  # Solutions (dual product lines)
│   │   │   ├── ServicesSection.tsx   # Services comparison
│   │   │   ├── CoursesSection.tsx    # Courses grid
│   │   │   ├── PackagesSection.tsx   # Purchase packages
│   │   │   └── AdvantagesSection.tsx # Why choose us (optional)
│   │   ├── courses/
│   │   │   ├── CourseHero.tsx        # Course detail hero
│   │   │   ├── CourseOutline.tsx     # Course outline section
│   │   │   └── CourseCTA.tsx         # Course CTA section
│   │   ├── contact/
│   │   │   └── ContactForm.tsx       # Contact form with validation
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button component
│   │       ├── Card.tsx              # Reusable card component
│   │       └── ColorBlock.tsx        # Color block section wrapper
│   ├── lib/
│   │   ├── constants.ts              # Site constants and content
│   │   └── utils.ts                  # Utility functions
│   └── styles/
│       └── globals.css               # Global styles and Tailwind config
├── public/
│   └── (images and assets)
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── next.config.js                    # Next.js configuration
└── package.json                      # Dependencies
```

---

## Task 1: Project Setup and Configuration

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `src/styles/globals.css`
- Create: `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

Run: `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"`

When prompted:
- Would you like to use TypeScript? Yes
- Would you like to use ESLint? Yes
- Would you like to use Tailwind CSS? Yes
- Would you like to use `src/` directory? Yes
- Would you like to use App Router? Yes
- Would you like to customize the default import alias? No

Expected: Project initialized with Next.js 15, TypeScript, and Tailwind CSS

- [ ] **Step 2: Install additional dependencies**

Run: `npm install react-hook-form @hookform/resolvers zod clsx tailwind-merge`

Expected: Dependencies installed successfully

- [ ] **Step 3: Configure Tailwind with design system**

Edit `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        canvas: "#ffffff",
        "inverse-canvas": "#000000",
        ink: "#000000",
        "inverse-ink": "#ffffff",
        hairline: "#e6e6e6",
        "hairline-soft": "#f1f1f1",
        "surface-soft": "#f7f7f5",
        "block-lime": "#dceeb1",
        "block-lilac": "#c5b0f4",
        "block-cream": "#f4ecd6",
        "block-pink": "#efd4d4",
        "block-mint": "#c8e6cd",
        "block-coral": "#f3c9b6",
        "block-navy": "#1f1d3d",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["86px", { lineHeight: "1.00", letterSpacing: "-1.72px", fontWeight: "340" }],
        "display-lg": ["64px", { lineHeight: "1.10", letterSpacing: "-0.96px", fontWeight: "340" }],
        headline: ["26px", { lineHeight: "1.35", letterSpacing: "-0.26px", fontWeight: "540" }],
        "card-title": ["24px", { lineHeight: "1.45", letterSpacing: "0", fontWeight: "700" }],
        "body-lg": ["20px", { lineHeight: "1.40", letterSpacing: "-0.14px", fontWeight: "330" }],
        body: ["18px", { lineHeight: "1.45", letterSpacing: "-0.26px", fontWeight: "320" }],
        "body-sm": ["16px", { lineHeight: "1.45", letterSpacing: "-0.14px", fontWeight: "330" }],
        button: ["20px", { lineHeight: "1.40", letterSpacing: "-0.10px", fontWeight: "480" }],
        eyebrow: ["18px", { lineHeight: "1.30", letterSpacing: "0.54px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.00", letterSpacing: "0.60px", fontWeight: "400" }],
      },
      borderRadius: {
        xs: "2px",
        sm: "6px",
        md: "8px",
        lg: "24px",
        xl: "32px",
        pill: "50px",
      },
      spacing: {
        hair: "1px",
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "96px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Set up global styles**

Edit `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-geist-sans: "Inter", system-ui, sans-serif;
    --font-geist-mono: "JetBrains Mono", monospace;
  }

  * {
    @apply border-hairline;
  }

  body {
    @apply bg-canvas text-ink font-sans antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-sans;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

- [ ] **Step 5: Commit project setup**

```bash
git add package.json package-lock.json next.config.js tsconfig.json tailwind.config.ts src/styles/globals.css .gitignore
git commit -m "$(cat <<'EOF'
feat: initialize Next.js project with Tailwind and design system

Set up Next.js 15 with TypeScript, Tailwind CSS, and custom design tokens
based on Figma design system from DESIGN.md. Configured colors, typography,
spacing, and border radius to match the design specifications.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create Site Constants and Utilities

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/lib/utils.ts`

- [ ] **Step 1: Create site constants**

Create `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "熵序之间",
  nameEn: "Entroder",
  slogan: "构建 AI 原生组织,释放百倍生产力",
  subSlogan: "不止 10 倍开发效率,更是 100 倍组织效能",
  description: "熵序之间提供 AI 原生组织建设和 AI 编程培训服务,帮助企业实现 100 倍人效提升。",
  url: "https://entroder.com",
  email: "contact@entroder.com",
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "关于我们" },
  { href: "/courses", label: "课程" },
  { href: "/services", label: "服务" },
  { href: "/contact", label: "联系我们" },
] as const;

export const COURSES = [
  {
    id: "ai-native-org",
    slug: "ai-native-org",
    title: "AI 原生组织",
    subtitle: "从组织结构到运营流程的 AI 化改造",
    tag: "面向高管",
    tagColor: "block-lilac",
    duration: "2 天 / 16 小时",
    target: "100 倍人效,组织效率质的飞跃",
    audience: "CEO、业务负责人、AI 转型负责人",
    highlights: [
      "重新理解运营 AI 化",
      "AI 原生组织结构设计",
      "从 SOP 到数字员工",
      "CEO AI 驾驶舱",
    ],
  },
  {
    id: "coding-basic",
    slug: "coding-basic",
    title: "Claude Code 基础",
    subtitle: "从 0 到 1 构建完整应用",
    tag: "零基础",
    tagColor: "block-mint",
    duration: "1 天 / 8 小时",
    target: "了解 Claude Code 强大,生成 MVP 级应用",
    audience: "所有人,无需任何基础",
    highlights: [
      "基础命令与交互方式",
      "项目配置与规范约束",
      "上下文与模型管理",
      "日常工作流初体验",
    ],
  },
  {
    id: "coding-intermediate",
    slug: "coding-intermediate",
    title: "完整生态与团队协作",
    subtitle: "扩展实战",
    tag: "扩展实战",
    tagColor: "block-cream",
    duration: "2 天 / 16 小时",
    target: "2X 提效,应用在实际项目中",
    audience: "有 2-8 周实际使用经验的开发者",
    highlights: [
      "SOP 标准化规范 (Skill)",
      "AI 代理与自动化检查",
      "配置体系与插件分发",
      "规范驱动开发 (Spec-Kit)",
      "外部集成 (MCP Server)",
      "CI/CD 流水线",
    ],
  },
  {
    id: "coding-advanced",
    slug: "coding-advanced",
    title: "规模化生产与代码信任",
    subtitle: "规模化生产",
    tag: "规模化生产",
    tagColor: "block-navy",
    duration: "2 天 / 16 小时",
    target: "10X 提效,生产级大型项目",
    audience: "核心技术骨干,4-16 周实战经验",
    highlights: [
      "遗留代码维护与破局",
      "大型项目重构实战",
      "AI 友好架构设计",
      "TDD 工作流进阶",
      "安全审查与质量防御",
      "数字员工体系与极致人效",
    ],
  },
] as const;

export const PROBLEMS = [
  {
    icon: "💭",
    title: "个人会用 AI,组织效率没提升",
    description: "员工都在用 ChatGPT,但公司整体效率没有质的飞跃。AI 能力停留在个人层面,没有转化为组织生产力。",
  },
  {
    icon: "⚙️",
    title: "开发效率提升了,运营流程还是老样子",
    description: "技术团队用上了 AI 编程工具,但销售、客服、HR、财务等部门还在手工操作,组织整体效能没有突破。",
  },
  {
    icon: "🎯",
    title: "试点很多,但没有系统性方法",
    description: "各部门各自为战,缺乏统一的 AI 化路线图和落地保障体系。培训完就结束,实际项目中遇到问题无人解答。",
  },
] as const;
```

- [ ] **Step 2: Create utility functions**

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
```

- [ ] **Step 3: Commit constants and utilities**

```bash
git add src/lib/
git commit -m "$(cat <<'EOF'
feat: add site constants and utility functions

Create centralized constants for site config, navigation, courses, and problems.
Add utility functions for className merging and smooth scrolling.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create Reusable UI Components

**IMPORTANT:** All UI components in this task MUST be generated using the ui-ux-pro-max skill to ensure production-grade quality and adherence to the design system.

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/ColorBlock.tsx`

- [ ] **Step 1: Generate Button component using ui-ux-pro-max**

**Instruction for implementation:**
Use the ui-ux-pro-max skill with the following prompt:

"Create a Button component for a Next.js + Tailwind CSS project following the Figma design system from DESIGN.md. 

Requirements:
- Support variants: primary (black bg, white text), secondary (white bg, black text, border)
- Pill shape (rounded-pill: 50px)
- Typography: button style (20px, weight 480, -0.10px letter-spacing)
- Padding: 10px 20px for primary, 8px 18px 10px for secondary
- Support sizes: default, large
- Support disabled state
- Support loading state
- TypeScript with proper types
- Use cn() utility for className merging
- Export as default

File path: src/components/ui/Button.tsx"

Expected: Production-grade Button component with all variants and states

- [ ] **Step 2: Generate Card component using ui-ux-pro-max**

**Instruction for implementation:**
Use the ui-ux-pro-max skill with the following prompt:

"Create a Card component for a Next.js + Tailwind CSS project following the Figma design system.

Requirements:
- White background with hairline border (#e6e6e6)
- Border radius: rounded-lg (24px)
- Padding: 24px (spacing-lg)
- Support hover state with subtle shadow
- Support optional color block background (lime, lilac, cream, mint, pink, coral, navy)
- TypeScript with proper types
- Use cn() utility for className merging
- Export as default

File path: src/components/ui/Card.tsx"

Expected: Production-grade Card component with variants

- [ ] **Step 3: Generate ColorBlock component using ui-ux-pro-max**

**Instruction for implementation:**
Use the ui-ux-pro-max skill with the following prompt:

"Create a ColorBlock section wrapper component for a Next.js + Tailwind CSS project.

Requirements:
- Support color variants: lime, lilac, cream, mint, pink, coral, navy
- Border radius: rounded-lg (24px)
- Padding: 48px (spacing-xxl)
- Full width container
- TypeScript with proper types
- Accept children prop
- Use cn() utility for className merging
- Export as default

File path: src/components/ui/ColorBlock.tsx"

Expected: Production-grade ColorBlock wrapper component

- [ ] **Step 4: Verify components build successfully**

Run: `npm run build`

Expected: Build succeeds with no errors

- [ ] **Step 5: Commit UI components**

```bash
git add src/components/ui/
git commit -m "$(cat <<'EOF'
feat: add reusable UI components (Button, Card, ColorBlock)

Create production-grade UI components using ui-ux-pro-max skill:
- Button: primary/secondary variants with pill shape
- Card: white cards with optional color block backgrounds
- ColorBlock: section wrapper for colored content blocks

All components follow Figma design system from DESIGN.md.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

