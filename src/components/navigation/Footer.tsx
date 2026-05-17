import React from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inverse-canvas text-inverse-ink">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-headline mb-4">
              {SITE_CONFIG.name} {SITE_CONFIG.englishName}
            </h3>
            <p className="text-body-lg opacity-80">
              {SITE_CONFIG.slogan}
            </p>
            <p className="text-body-sm opacity-60 mt-2">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body-lg font-[540] mb-4">快速链接</h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
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

          {/* Contact Info */}
          <div>
            <h4 className="text-body-lg font-[540] mb-4">联系我们</h4>
            <div className="flex flex-col gap-3 text-body-sm opacity-80">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:opacity-100 transition-opacity duration-200"
              >
                {SITE_CONFIG.contact.email}
              </a>
              <p>{SITE_CONFIG.contact.phone}</p>
              <p>微信: {SITE_CONFIG.contact.wechat}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-on-inverse-soft/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-body-sm opacity-60">
            © {currentYear} {SITE_CONFIG.name} {SITE_CONFIG.englishName}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {SITE_CONFIG.social.github && (
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {SITE_CONFIG.social.twitter && (
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
                aria-label="Twitter"
              >
                Twitter
              </a>
            )}
            {SITE_CONFIG.social.linkedin && (
              <a
                href={SITE_CONFIG.social.linkedin}
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
