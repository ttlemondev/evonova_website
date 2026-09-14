'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ColorBlock, { type ColorBlockVariant } from '@/components/ui/ColorBlock';

const stages: Array<{ key: 'diagnosis' | 'implementation' | 'operations'; variant: ColorBlockVariant }> = [
  { key: 'diagnosis', variant: 'lilac' },
  { key: 'implementation', variant: 'mint' },
  { key: 'operations', variant: 'cream' },
];

export default function ServicesPage() {
  const t = useTranslations('servicesPage');
  const locale = useLocale();

  return (
    <>
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-display-lg mb-6">{t('hero.title')}</h1>
          <p className="text-subhead">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="mx-auto max-w-[1280px] space-y-8">
          {stages.map(({ key, variant }) => (
            <ColorBlock key={key} variant={variant}>
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-eyebrow mb-md opacity-50">{t(`stages.${key}.eyebrow`)}</p>
                  <h2 className="text-display-lg mb-lg">{t(`stages.${key}.title`)}</h2>
                  <p className="text-body-lg opacity-75">{t(`stages.${key}.description`)}</p>
                </div>
                <div>
                  <ul className="mb-xl divide-y divide-ink/15 border-y border-ink/15">
                    {(t.raw(`stages.${key}.features`) as string[]).map((feature) => (
                      <li key={feature} className="py-4 text-body-lg">{feature}</li>
                    ))}
                  </ul>
                  <p className="text-body font-medium">{t(`stages.${key}.delivery`)}</p>
                </div>
              </div>
            </ColorBlock>
          ))}
        </div>
      </section>

      <section className="bg-surface-soft px-6 py-section">
        <div className="mx-auto max-w-[960px]">
          <h2 className="text-display-lg mb-xxl text-center">{t('whyTitle')}</h2>
          <div className="divide-y divide-hairline border-y border-hairline">
            {(t.raw('whyItems') as string[]).map((item, index) => (
              <p key={item} className="flex gap-6 py-6 text-body-lg">
                <span className="font-mono text-body-sm opacity-40">0{index + 1}</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-display-lg mb-6">{t('cta.title')}</h2>
          <p className="text-body-lg mb-8">{t('cta.description')}</p>
          <Button asChild variant="primary">
            <Link href={`/${locale}/contact?topic=xWorker`}>{t('cta.button')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
