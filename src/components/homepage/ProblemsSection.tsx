'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';

/**
 * ProblemsSection - Displays common challenges faced by organizations
 *
 * Design system (DESIGN.md):
 * - Background: bg-surface-soft (off-white)
 * - Padding: py-section (96px)
 * - Typography: text-display-lg for title, text-card-title for card titles, text-body for descriptions
 * - Spacing: mb-xxl (48px) after title, gap-xl (32px) between cards
 * - Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
 * - Cards: white background with rounded-lg (24px)
 */
const ProblemsSection: React.FC = () => {
  const t = useTranslations('problems');

  const problems = [
    { id: 'efficiency', key: 'efficiency' },
    { id: 'learning', key: 'learning' },
    { id: 'transformation', key: 'transformation' },
  ];

  return (
    <section
      id="problems"
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title - text-display-lg with mb-xxl */}
        <h2 className="text-display-lg text-ink text-center mb-xxl">
          {t('title')}
        </h2>

        {/* Problem Cards Grid - gap-xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {problems.map((problem) => (
            <Card
              key={problem.id}
              variant="default"
              className="flex flex-col"
            >
              {/* Icon - mb-sm */}
              <div className="text-5xl mb-sm" role="img" aria-label={t(`${problem.key}.title`)}>
                {t(`${problem.key}.icon`)}
              </div>

              {/* Title - text-card-title with mb-sm */}
              <h3 className="text-card-title text-ink mb-sm">
                {t(`${problem.key}.title`)}
              </h3>

              {/* Description - text-body */}
              <p className="text-body text-ink">
                {t(`${problem.key}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
