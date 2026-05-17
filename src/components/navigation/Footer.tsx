'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('nav');
  const tSite = useTranslations('site');
  const tFooter = useTranslations('footer');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t('home'), href: `/${locale}#hero` },
    { label: t('courses'), href: `/${locale}#courses` },
    { label: t('about'), href: `/${locale}#about` },
    { label: t('contact'), href: `/${locale}#contact` },
  ];

  // Contact info - hardcoded as it's not in translations
  const contactInfo = {
    email: 'contact@entroder.com',
    phone: '+86 138-0000-0000',
    wechat: 'entroder-ai',
  };

  const socialLinks = {
    github: 'https://github.com/entroder',
    twitter: 'https://twitter.com/entroder',
    linkedin: 'https://linkedin.com/company/entroder',
  };

  return (
    <footer className="bg-inverse-canvas text-inverse-ink">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-headline mb-4">
              {tSite('name')} {tSite('englishName')}
            </h3>
            <p className="text-body-lg opacity-80">
              {tSite('slogan')}
            </p>
            <p className="text-body-sm opacity-60 mt-2">
              {tSite('description')}
            </p>
          </div>

          <div>
            <h4 className="text-body-lg font-[540] mb-4">{t('quickLinks')}</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-body-lg font-[540] mb-4">{t('contactUs')}</h4>
            <div className="flex flex-col gap-3 text-body-sm opacity-80">
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:opacity-100 transition-opacity duration-200"
              >
                {contactInfo.email}
              </a>
              <p>{contactInfo.phone}</p>
              <p>微信: {contactInfo.wechat}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-on-inverse-soft/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm opacity-60">
            {tFooter('copyright', { year: currentYear, name: tSite('name'), englishName: tSite('englishName') })}
          </p>

          <div className="flex gap-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
