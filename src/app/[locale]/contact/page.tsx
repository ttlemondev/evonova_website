'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import ColorBlock from '@/components/ui/ColorBlock';
import ContactForm from '@/components/contact/ContactForm';
import { company } from '@/components/company/company-data';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-lg mb-6">
            {t('contact.hero.title')}
          </h1>
          <p className="text-subhead">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-12">
        <ColorBlock variant="lime">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline mb-8 text-center">{t('contact.formTitle')}</h2>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </ColorBlock>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-6 py-24 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-headline mb-12 text-center">{t('contact.info.title')}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {company.email && <div>
              <h3 className="text-card-title mb-4">{t('contact.info.email')}</h3>
              <p className="text-body mb-2">
                <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                  {company.email}
                </a>
              </p>
              <p className="text-body-sm text-gray-600">
                {t('contact.info.emailResponse')}
              </p>
            </div>}

            <div>
              <h3 className="text-card-title mb-4">{t('contact.info.wechat')}</h3>
              <p className="text-body mb-2">
                {t('contact.info.wechatDescription')}
              </p>
              <p className="text-body-sm text-gray-600">
                {t('contact.info.wechatNote')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
