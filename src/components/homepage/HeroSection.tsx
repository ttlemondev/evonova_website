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
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px] text-center">
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
