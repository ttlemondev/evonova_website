'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';

/**
 * ServicesSection - Displays two service models with positioning
 *
 * Design system (DESIGN.md):
 * - Background: bg-surface-soft (off-white)
 * - Padding: py-section (96px)
 * - Typography: text-display-lg for title, text-headline for subtitle, text-card-title for card titles
 * - Spacing: mb-md (16px), mb-xxl (48px), gap-xl (32px)
 * - Cards: white background with rounded-lg (24px) and p-lg (24px)
 * - Eyebrow labels: text-eyebrow (figmaMono uppercase)
 * - No emojis as icons (violates DESIGN.md)
 */
const ServicesSection: React.FC = () => {
  const t = useTranslations('services');

  return (
    <section
      id="services"
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title - text-display-lg with mb-md */}
        <h2 className="text-display-lg text-ink text-center mb-md">
          {t('title')}
        </h2>

        {/* Subtitle - text-headline with mt-md and mb-xxl */}
        <p className="text-headline text-ink text-center mt-md mb-xxl">
          {t('subtitle')}
        </p>

        {/* Service Cards Grid - gap-xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Card 1: 系统化培训 */}
          <Card className="bg-canvas border border-hairline rounded-lg p-lg">
            {/* Eyebrow - text-eyebrow with mb-xs */}
            <div className="text-eyebrow text-ink mb-xs">
              {t('training.eyebrow')}
            </div>

            {/* Positioning Title - text-card-title with mb-sm */}
            <h3 className="text-card-title text-ink mb-sm">
              {t('training.positioning')}
            </h3>

            {/* Features List - text-body with space-y-xs and mb-md */}
            <ul className="text-body text-ink space-y-xs mb-md list-none">
              {(t.raw('training.features') as string[]).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>

            {/* Delivery Format - text-body-sm with mb-md */}
            <div className="text-body-sm text-ink bg-surface-soft rounded-md p-sm mb-md">
              <strong>{t('training.delivery')}</strong> {t('training.deliveryDetail')}
            </div>

            {/* Value Statement - text-body */}
            <p className="text-body text-ink">
              {t('training.value')}
            </p>
          </Card>

          {/* Card 2: AI 编程辅导 */}
          <Card className="bg-canvas border border-hairline rounded-lg p-lg">
            {/* Eyebrow - text-eyebrow with mb-xs */}
            <div className="text-eyebrow text-ink mb-xs">
              {t('coaching.eyebrow')}
            </div>

            {/* Positioning Title - text-card-title with mb-sm */}
            <h3 className="text-card-title text-ink mb-sm">
              {t('coaching.positioning')}
            </h3>

            {/* Features List - text-body with space-y-xs and mb-md */}
            <ul className="text-body text-ink space-y-xs mb-md list-none">
              {(t.raw('coaching.features') as string[]).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>

            {/* Delivery Format - text-body-sm with mb-md */}
            <div className="text-body-sm text-ink bg-surface-soft rounded-md p-sm mb-md">
              <strong>{t('coaching.delivery')}</strong> {t('coaching.deliveryDetail')}
            </div>

            {/* Value Statement - text-body */}
            <p className="text-body text-ink">
              {t('coaching.value')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
