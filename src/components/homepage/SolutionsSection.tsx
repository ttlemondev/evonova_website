'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';
import { scrollToSection } from '@/lib/utils';

/**
 * SolutionsSection - Displays two product lines with value propositions
 *
 * Design system (DESIGN.md):
 * - White canvas background
 * - Padding: py-section (96px)
 * - Typography: text-display-lg for title, text-headline for subtitles, text-body-lg for lists
 * - Spacing: mb-xxl (48px) after title, space-y-xl (32px) between cards
 * - Color blocks: lilac and mint with rounded-lg (24px) and p-xxl (48px)
 * - Eyebrow labels: text-eyebrow (figmaMono uppercase)
 */
const SolutionsSection: React.FC = () => {
  const t = useTranslations('solutions');

  return (
    <section
      id="solutions"
      className="w-full bg-canvas py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title - text-display-lg with mb-xxl */}
        <h2 className="text-display-lg text-ink text-center mb-xxl">
          {t('title')}
        </h2>

        {/* Product Cards - stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Card 1: AI 原生组织 - lilac color block */}
          <ColorBlock variant="lilac" className="rounded-lg p-xxl">
            {/* Eyebrow - text-eyebrow with mb-md */}
            <div className="text-eyebrow text-ink mb-md">
              {t('aiNativeOrg.eyebrow')}
            </div>

            {/* Title - text-display-lg with mb-sm */}
            <h3 className="text-display-lg text-ink mb-sm">
              {t('aiNativeOrg.title')}
            </h3>

            {/* Subtitle - text-headline with mb-lg */}
            <p className="text-headline text-ink mb-lg">
              {t('aiNativeOrg.subtitle')}
            </p>

            {/* Value List - text-body-lg with space-y-sm and mb-xl */}
            <ul className="text-body-lg text-ink space-y-sm mb-xl list-none">
              {(t.raw('aiNativeOrg.features') as string[]).map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant="primary"
              onClick={() => window.location.href = '/courses/ai-native-org'}
              aria-label={t('aiNativeOrg.cta')}
            >
              {t('aiNativeOrg.cta')}
            </Button>
          </ColorBlock>

          {/* Card 2: AI 编程培训 - mint color block */}
          <ColorBlock variant="mint" className="rounded-lg p-xxl">
            {/* Eyebrow - text-eyebrow with mb-md */}
            <div className="text-eyebrow text-ink mb-md">
              {t('aiCoding.eyebrow')}
            </div>

            {/* Title - text-display-lg with mb-sm */}
            <h3 className="text-display-lg text-ink mb-sm">
              {t('aiCoding.title')}
            </h3>

            {/* Subtitle - text-headline with mb-lg */}
            <p className="text-headline text-ink mb-lg">
              {t('aiCoding.subtitle')}
            </p>

            {/* Value List - text-body-lg with space-y-sm and mb-xl */}
            <ul className="text-body-lg text-ink space-y-sm mb-xl list-none">
              {(t.raw('aiCoding.features') as string[]).map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              variant="primary"
              onClick={() => scrollToSection('courses')}
              aria-label={t('aiCoding.cta')}
            >
              {t('aiCoding.cta')}
            </Button>
          </ColorBlock>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
