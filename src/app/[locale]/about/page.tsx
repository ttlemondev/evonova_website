'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-lg mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-subhead mb-8">
            {t('about.hero.subtitle')}
          </p>
          <p className="text-body-lg max-w-3xl mx-auto">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="container mx-auto px-6 py-12">
        <ColorBlock variant="lilac">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline mb-8">{t('about.mission.title')}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-card-title mb-3">{t('about.mission.missionTitle')}</h3>
                <p className="text-body-lg">
                  {t('about.mission.missionText')}
                </p>
              </div>

              <div>
                <h3 className="text-card-title mb-3">{t('about.mission.visionTitle')}</h3>
                <p className="text-body-lg">
                  {t('about.mission.visionText')}
                </p>
              </div>
            </div>
          </div>
        </ColorBlock>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-headline mb-12 text-center">{t('about.values.title')}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-card-title mb-3">{t('about.values.systematic.title')}</h3>
              <p className="text-body">
                {t('about.values.systematic.description')}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-card-title mb-3">{t('about.values.practical.title')}</h3>
              <p className="text-body">
                {t('about.values.practical.description')}
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-card-title mb-3">{t('about.values.resultOriented.title')}</h3>
              <p className="text-body">
                {t('about.values.resultOriented.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline mb-6">{t('about.cta.title')}</h2>
          <p className="text-body-lg mb-8">
            {t('about.cta.description')}
          </p>
          <Link href="/contact">
            <Button variant="primary">{t('about.cta.button')}</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
