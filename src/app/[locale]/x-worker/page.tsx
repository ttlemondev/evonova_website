'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ColorBlock from '@/components/ui/ColorBlock';

type ContentItem = {
  title: string;
  description: string;
};

export default function XWorkerPage() {
  const t = useTranslations('xWorkerPage');
  const locale = useLocale();
  const consultationHref = `/${locale}/contact?topic=xWorker`;
  const problems = t.raw('problems.items') as ContentItem[];
  const capabilities = t.raw('capabilities.items') as ContentItem[];
  const scenarios = t.raw('scenarios.items') as ContentItem[];
  const deployments = t.raw('deployment.items') as ContentItem[];
  const operatingSteps = t.raw('operating.steps') as string[];
  const implementationSteps = t.raw('implementation.steps') as string[];
  const metrics = t.raw('metrics.items') as string[];

  return (
    <>
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-eyebrow mb-md">{t('hero.eyebrow')}</p>
          <h1 className="text-display-lg mb-6">{t('hero.title')}</h1>
          <p className="text-subhead mb-8">{t('hero.subtitle')}</p>
          <Button asChild variant="primary">
            <Link href={consultationHref}>{t('hero.cta')}</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <ColorBlock variant="cream">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-ink/10 bg-canvas">
            <Image
              src="/images/x-worker-collaboration-mockup.png"
              alt={t('mockupAlt')}
              width={1672}
              height={941}
              className="h-auto w-full"
              priority
              sizes="(max-width: 1280px) 100vw, 1184px"
            />
          </div>
        </ColorBlock>
      </section>

      <section className="w-full bg-surface-soft px-6 py-section">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-display-lg text-center mb-xxl">{t('problems.title')}</h2>
          <div className="grid gap-xl md:grid-cols-2">
            {problems.map((problem, index) => (
              <Card key={problem.title} className="bg-canvas border border-hairline rounded-lg p-lg">
                <p className="text-eyebrow mb-md opacity-40">0{index + 1}</p>
                <h3 className="text-card-title mb-sm">{problem.title}</h3>
                <p className="text-body">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-section">
        <ColorBlock variant="lilac">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-eyebrow mb-md opacity-50">{t('operating.eyebrow')}</p>
              <h2 className="text-display-lg mb-lg">{t('operating.title')}</h2>
              <p className="text-body-lg">{t('operating.description')}</p>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-ink/15 sm:grid-cols-2">
              {operatingSteps.map((step, index) => (
                <li key={step} className="bg-white/70 p-5">
                  <span className="font-mono text-body-sm mr-md opacity-40">0{index + 1}</span>
                  <span className="text-body font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </ColorBlock>
      </section>

      <section className="container mx-auto px-6 py-section">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-display-lg text-center mb-xxl">{t('capabilities.title')}</h2>
          <div className="grid gap-xl md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="bg-canvas border border-hairline rounded-lg p-lg">
                <h3 className="text-card-title mb-sm">{capability.title}</h3>
                <p className="text-body">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-section">
        <ColorBlock variant="mint">
          <h2 className="text-display-lg text-center mb-xxl">{t('scenarios.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-[var(--radius-md)] bg-white/60 p-6">
                <h3 className="text-card-title mb-sm">{scenario.title}</h3>
                <p className="text-body">{scenario.description}</p>
              </article>
            ))}
          </div>
        </ColorBlock>
      </section>

      <section className="w-full bg-surface-soft px-6 py-section">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-display-lg text-center mb-xxl">{t('deployment.title')}</h2>
          <div className="grid gap-xl lg:grid-cols-3">
            {deployments.map((deployment) => (
              <Card key={deployment.title} className="bg-canvas border border-hairline rounded-lg p-lg">
                <h3 className="text-card-title mb-sm">{deployment.title}</h3>
                <p className="text-body">{deployment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-section">
        <ColorBlock variant="cream">
          <h2 className="text-display-lg text-center mb-xxl">{t('implementation.title')}</h2>
          <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] bg-ink/15 md:grid-cols-3 lg:grid-cols-6">
            {implementationSteps.map((step, index) => (
              <li key={step} className="bg-white/70 p-5">
                <p className="font-mono text-body-sm mb-lg opacity-40">0{index + 1}</p>
                <p className="text-body font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </ColorBlock>
      </section>

      <section className="container mx-auto px-6 py-section">
        <ColorBlock variant="navy">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-eyebrow mb-md opacity-50">{t('metrics.eyebrow')}</p>
              <h2 className="text-display-lg mb-lg">{t('metrics.title')}</h2>
              <p className="text-body-lg opacity-75">{t('metrics.description')}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <li key={metric} className="rounded-[var(--radius-md)] bg-white/10 px-4 py-3 text-body">
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </ColorBlock>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-display-lg mb-6">{t('cta.title')}</h2>
          <p className="text-body-lg mb-8">{t('cta.description')}</p>
          <Button asChild variant="primary">
            <Link href={consultationHref}>{t('cta.button')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
