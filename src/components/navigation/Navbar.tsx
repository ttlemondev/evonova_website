'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('nav');
  const tSite = useTranslations('site');
  const locale = useLocale();

  const navLinks = [
    { label: t('home'), href: `/${locale}` },
    { label: t('courses'), href: `/${locale}#courses` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'h-14 bg-canvas border-b border-hairline',
          'transition-shadow duration-200',
          isScrolled && 'shadow-sm'
        )}
      >
        <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8">
          <div className="flex items-center justify-between h-full">
            <Link
              href={`/${locale}`}
              className="text-headline flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
            >
              {tSite('name')}
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-link text-ink hover:opacity-60 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={locale === 'zh' ? '/en' : '/zh'}
                className="text-link text-ink hover:opacity-60 transition-opacity duration-200"
              >
                {locale === 'zh' ? 'EN' : '中文'}
              </Link>
            </div>

            <div className="hidden lg:block">
              <Link href={`/${locale}/contact`}>
                <Button variant="primary">
                  {t('cta')}
                </Button>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'lg:hidden p-2 -mr-2',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
                'transition-opacity duration-200 hover:opacity-60'
              )}
              aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-overlay-scrim/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          'fixed top-14 right-0 bottom-0 z-50 w-[280px]',
          'bg-canvas border-l border-hairline',
          'transform transition-transform duration-300 ease-out lg:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <nav className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-link text-ink hover:opacity-60 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={locale === 'zh' ? '/en' : '/zh'}
              onClick={handleLinkClick}
              className="text-link text-ink hover:opacity-60 transition-opacity duration-200"
            >
              {locale === 'zh' ? 'EN' : '中文'}
            </Link>
          </nav>

          <div className="mt-auto">
            <Link href={`/${locale}/contact`} onClick={handleLinkClick}>
              <Button
                variant="primary"
                className="w-full"
              >
                {t('cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
