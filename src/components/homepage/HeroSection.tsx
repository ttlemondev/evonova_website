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
      {/* Vibrant dreamy gradient background with animated orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-block-lilac/50 via-block-mint/40 to-block-lime/45">
        {/* Large animated gradient orbs with stronger colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-gradient-to-br from-block-lilac/60 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-gradient-to-bl from-block-mint/55 to-transparent rounded-full blur-3xl animate-float-slower" />
          <div className="absolute -bottom-[10%] left-[20%] w-[550px] h-[550px] bg-gradient-to-tr from-block-lime/50 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-gradient-to-br from-block-cream/45 to-transparent rounded-full blur-3xl animate-float-slower" />
        </div>

        {/* Subtle dot pattern overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.08]"
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

        {/* Light overlay to ensure text readability */}
        <div className="absolute inset-0 bg-canvas/30" />
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
