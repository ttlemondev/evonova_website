import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { company } from '@/components/company/company-data';

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: 'EVONOVA — Intelligence, made everyday.',
  description: 'EVONOVA LIMITED is a Hong Kong AI company building thoughtful apps for everyday life. Explore PokeVid for AI-powered creativity and iPulse for everyday wellbeing.',
  openGraph: {
    siteName: company.name,
    url: '/en',
    title: 'EVONOVA — Intelligence, made everyday.',
    description: 'Thoughtful technology. Useful products. Built around people.',
    type: 'website',
    locale: 'en_US',
  },
};

export function generateStaticParams() { return [{ locale: 'en' }]; }

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  setRequestLocale('en');
  const messages = await getMessages({ locale: 'en' });
  return <NextIntlClientProvider locale="en" messages={messages}>{children}</NextIntlClientProvider>;
}
