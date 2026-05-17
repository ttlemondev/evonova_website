'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

/**
 * CoursesSection - Displays four course cards in 2x2 grid
 */

const courseData = [
  { slug: 'ai-native-org', key: 'aiNativeOrg', tagColor: 'bg-block-lilac' },
  { slug: 'coding-basic', key: 'basic', tagColor: 'bg-block-mint' },
  { slug: 'coding-intermediate', key: 'intermediate', tagColor: 'bg-block-cream' },
  { slug: 'coding-advanced', key: 'advanced', tagColor: 'bg-block-coral' },
];

const CoursesSection: React.FC = () => {
  const t = useTranslations('courses');

  return (
    <section id="courses" className="w-full bg-canvas py-section px-6">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-display-lg text-ink text-center mb-xxl">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {courseData.map((course) => (
            <Card key={course.slug} className="bg-canvas border border-hairline rounded-lg p-lg">
              <span className={`inline-block px-sm py-xxs rounded-pill text-eyebrow text-ink mb-sm ${course.tagColor}`}>
                {t(`${course.key}.tag`)}
              </span>

              <h3 className="text-card-title text-ink mb-xs">
                {t(`${course.key}.title`)}
              </h3>

              <p className="text-body-sm text-ink mb-sm">
                {t('duration')} {t(`${course.key}.duration`)}
              </p>

              <ul className="text-body-sm text-ink space-y-xs mb-md list-none">
                {(t.raw(`${course.key}.features`) as string[]).slice(0, 4).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <p className="text-body-sm text-ink mb-sm">
                <strong>{t('suitable')}</strong> {t(`${course.key}.audience`)}
              </p>

              <div className="text-body text-ink bg-surface-soft rounded-md p-sm mb-md">
                <strong>{t('target')}</strong> {t(`${course.key}.target`)}
              </div>

              <Link href={`/courses/${course.slug}`}>
                <Button variant="primary" className="w-full" aria-label={`${t('cta')} ${t(`${course.key}.title`)}`}>
                  {t('cta')}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
