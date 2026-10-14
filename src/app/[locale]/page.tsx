import CompanyHome from '@/components/company/CompanyHome';
import type { Metadata } from 'next';

export const metadata: Metadata = { alternates: { canonical: '/en' } };

export default function HomePage() {
  return <CompanyHome />;
}
