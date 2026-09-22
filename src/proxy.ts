import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const englishRouting = createMiddleware({
  locales: ['en'], defaultLocale: 'en', localeDetection: false, localePrefix: 'always',
});

// Keep old bookmarks useful while retiring the former training-site navigation.
const legacySections: Record<string, string> = {
  '/about': 'company', '/contact': 'contact', '/services': 'approach',
  '/x-worker': 'products', '/courses/ai-native-org': 'approach',
  '/courses/coding-basic': 'approach', '/courses/coding-intermediate': 'approach',
  '/courses/coding-advanced': 'approach',
};

export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, '') || '/';
  const unprefixed = path.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
  const section = legacySections[unprefixed];
  if (section || path === '/zh') {
    const destination = request.nextUrl.clone();
    destination.pathname = '/en';
    destination.hash = section || '';
    return NextResponse.redirect(destination, 308);
  }
  return englishRouting(request);
}

export const config = { matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] };
