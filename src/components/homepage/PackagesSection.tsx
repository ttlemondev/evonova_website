'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const packages = [
  {
    id: 'fullTeam',
    tagColor: 'bg-block-lilac',
    borderColor: 'border-block-lilac',
  },
  {
    id: 'eliteDev',
    tagColor: 'bg-block-navy text-inverse-ink',
    borderColor: 'border-block-navy',
  },
];

const PackagesSection: React.FC = () => {
  const t = useTranslations('packages');

  return (
    <section id="packages" className="w-full bg-surface-soft py-section px-6">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-display-lg text-ink text-center mb-xxl">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`bg-canvas rounded-lg p-xl border-2 ${pkg.borderColor}`}>
              <span className={`inline-block px-sm py-xxs rounded-pill text-eyebrow mb-sm ${pkg.tagColor}`}>
                {t(`${pkg.id}.label`)}
              </span>

              <p className="text-body text-ink mb-sm">
                <strong>{t('suitable')}</strong> {t(`${pkg.id}.suitableFor`)}
              </p>

              <p className="text-body text-ink mb-lg">
                <strong>{t('goal')}</strong> {t(`${pkg.id}.goal`)}
              </p>

              <h3 className="text-card-title text-ink mb-md">
                {t('servicesTitle')}
              </h3>

              <ul className="text-body-sm text-ink space-y-xs mb-xl list-none">
                {(t.raw(`${pkg.id}.services`) as string[]).map((service, index) => (
                  <li key={index}>• {service}</li>
                ))}
              </ul>

              <Link href="/contact">
                <Button variant="primary" className="w-full" aria-label={`${t('cta')} ${t(`${pkg.id}.label`)}`}>
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

export default PackagesSection;
