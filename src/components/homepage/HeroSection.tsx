'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-section px-6"
    >
      {/* Background with gradient and geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-soft via-canvas to-canvas">
        {/* Geometric grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Abstract floating lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-ink/5 to-transparent animate-float-slow" />
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-ink/5 to-transparent animate-float-slower" />
          <div className="absolute bottom-[20%] left-[15%] w-[350px] h-[1px] bg-gradient-to-r from-transparent via-ink/5 to-transparent animate-float-slow" />
        </div>

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-canvas/30" />
      </div>

      <div className="relative mx-auto max-w-[1280px] text-center">
        {/* Main Title - text-display-xl */}
        <h1 className="text-display-xl text-ink">
          {t('title')}
        </h1>

        {/* Main Slogan - text-display-lg with mt-lg */}
        <p className="text-display-lg text-ink mt-lg">
          {t('mainSlogan')}
        </p>

        {/* Subtitle - text-headline with mt-md */}
        <p className="text-headline text-ink mt-md">
          {t('subtitle')}
        </p>

        {/* CTA Buttons - mt-xxl, gap-md */}
        <div className="mt-xxl flex flex-wrap items-center justify-center gap-md">
          <Button
            variant="primary"
            onClick={() => scrollToSection('solutions')}
            aria-label={t('ctaPrimary')}
          >
            {t('ctaPrimary')}
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection('courses')}
            aria-label={t('ctaSecondary')}
          >
            {t('ctaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
