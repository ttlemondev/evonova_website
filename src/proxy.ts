import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh', 'en'],
  defaultLocale: 'en',
  localeDetection: false,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
