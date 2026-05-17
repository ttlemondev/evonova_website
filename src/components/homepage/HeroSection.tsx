'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

/**
 * HeroSection - Homepage hero section with main title, slogan, and CTAs
 *
 * Design system (DESIGN.md):
 * - Monochrome: black text on white canvas
 * - Centered layout with max-width 1280px
 * - Vertical padding: py-section (96px)
 * - Typography: text-display-xl → text-display-lg → text-headline
 * - Spacing: mt-lg (24px), mt-md (16px), mt-xxl (48px), gap-md (16px)
 * - Responsive: reduces font sizes on mobile
 */
const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full bg-canvas py-section px-6"
    >
      <div className="mx-auto max-w-[1280px] text-center">
        {/* Main Title - text-display-xl */}
        <h1 className="text-display-xl text-ink">
          熵序之间 Entroder
        </h1>

        {/* Main Slogan - text-display-lg with mt-lg */}
        <p className="text-display-lg text-ink mt-lg">
          构建 AI 原生组织,释放百倍生产力
        </p>

        {/* Subtitle - text-headline with mt-md */}
        <p className="text-headline text-ink mt-md">
          不止 10 倍开发效率,更是 100 倍组织效能
        </p>

        {/* CTA Buttons - mt-xxl, gap-md */}
        <div className="mt-xxl flex flex-wrap items-center justify-center gap-md">
          <Button
            variant="primary"
            onClick={() => scrollToSection('solutions')}
            aria-label="了解 AI 原生组织"
          >
            了解 AI 原生组织
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection('courses')}
            aria-label="查看编程课程"
          >
            查看编程课程
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
