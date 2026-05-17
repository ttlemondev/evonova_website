'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

/**
 * HeroSection - Homepage hero section with main title, slogan, and CTAs
 *
 * Design system:
 * - Centered layout with max-width 1280px
 * - Vertical padding: 96px (py-section)
 * - Typography hierarchy: display-xl → display-lg → headline
 * - Responsive: reduces font sizes on mobile
 */
const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full bg-canvas py-section px-6"
    >
      <div className="mx-auto max-w-[1280px] text-center">
        {/* Main Title */}
        <h1 className="text-display-xl max-md:text-[48px] max-md:leading-[1.1]">
          熵序之间 Entroder
        </h1>

        {/* Main Slogan */}
        <p className="text-display-lg mt-lg max-md:text-[36px] max-md:leading-[1.15]">
          构建 AI 原生组织,释放百倍生产力
        </p>

        {/* Subtitle */}
        <p className="text-headline mt-md max-md:text-[20px] max-md:leading-[1.4]">
          不止 10 倍开发效率,更是 100 倍组织效能
        </p>

        {/* CTA Buttons */}
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
