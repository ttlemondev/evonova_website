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
      {/* Enhanced background with visible gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-soft via-canvas to-surface-soft">
        {/* Geometric dot pattern - more visible */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.15]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-dots"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Diagonal lines pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-lines"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-lines)" />
        </svg>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-block-lilac/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-block-mint/10 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-[50%] right-[20%] w-[300px] h-[300px] bg-block-lime/8 rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-canvas/50" />
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
