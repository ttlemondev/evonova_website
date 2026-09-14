'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';

export default function XWorkerSection() {
  const t = useTranslations('xWorkerHome');
  const locale = useLocale();

  return (
    <section id="x-worker" className="w-full bg-canvas px-6 py-section">
      <div className="mx-auto max-w-[1280px]">
        <ColorBlock variant="cream">
          <div className="mb-xxl flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-eyebrow text-ink mb-md">{t('eyebrow')}</p>
              <h2 className="text-display-lg text-ink mb-md max-w-[18ch]">{t('title')}</h2>
              <p className="text-body-lg text-ink max-w-[58ch]">{t('description')}</p>
            </div>
            <Button asChild variant="primary" className="shrink-0">
              <Link href={`/${locale}/x-worker`}>{t('cta')}</Link>
            </Button>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink/10 bg-canvas">
            <Image
              src="/images/x-worker-collaboration-mockup.png"
              alt={t('mockupAlt')}
              width={1672}
              height={941}
              className="h-auto w-full"
              sizes="(max-width: 1280px) 100vw, 1184px"
            />
          </div>
        </ColorBlock>
      </div>
    </section>
  );
}
