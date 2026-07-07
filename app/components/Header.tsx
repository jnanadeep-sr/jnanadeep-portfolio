'use client';

import Link from 'next/link';
import { useLanguage, useTranslation } from '../lang/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <div className="portfolio-navbarWrapper">
      <nav className="portfolio-navbar">
        <div className="portfolio-navBrand">
          <div className="portfolio-windowDots" aria-hidden="true">
            <span className="portfolio-dot portfolio-dotRed" />
            <span className="portfolio-dot portfolio-dotYellow" />
            <span className="portfolio-dot portfolio-dotGreen" />
          </div>
          <Link href="/" className="portfolio-logo">
            <span className="portfolio-logoUser">jnanadeep</span>
            <span className="portfolio-logoAt">@</span>
            <span className="portfolio-logoHost">dev</span>
            <span className="portfolio-logoSymbol">:~$</span>
          </Link>
        </div>

        <div className="portfolio-navActions">
          <div className="portfolio-languageToggle">
            <button
              type="button"
              className={`portfolio-languageButton ${language === 'en' ? 'portfolio-languageButtonActive' : ''}`}
              onClick={() => setLanguage('en')}
            >
              en
            </button>
            <button
              type="button"
              className={`portfolio-languageButton ${language === 'de' ? 'portfolio-languageButtonActive' : ''}`}
              onClick={() => setLanguage('de')}
            >
              de
            </button>
          </div>

          <div className="portfolio-navLinks">
            <Link href="/#about">
              <span className="portfolio-navLinkPath">~/</span>
              {t.navLinks[0]}
            </Link>
            <Link href="/experience">
              <span className="portfolio-navLinkPath">~/</span>
              {t.navLinks[1]}
            </Link>
            <Link href="/#education">
              <span className="portfolio-navLinkPath">~/</span>
              {t.navLinks[2]}
            </Link>
            <Link href="/#contact">
              <span className="portfolio-navLinkPath">~/</span>
              {t.navLinks[3]}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
