import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { useMediaQuery } from 'beautiful-react-hooks';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/twentythree';
import Button from '@deadline/components/Button';
import { SocialShare } from '../components';
import SubscriptionForm from '@deadline/components/ContactForm/ContactForm';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import CountDownTimer from '../components/twentythree/CountDownTimer';
import About from '../components/twentythree/About';
import Contact from '../components/twentythree/Contact';
// Language translation files
import localEng from '@deadline/common/data/translation/twentythree/en.json';
import localAr from '@deadline/common/data/translation/twentythree/ar.json';
import localEs from '@deadline/common/data/translation/twentythree/es.json';
import localDe from '@deadline/common/data/translation/twentythree/de.json';
import localCn from '@deadline/common/data/translation/twentythree/zh.json';
import localIl from '@deadline/common/data/translation/twentythree/he.json';
// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};
import {
  MainWrapper,
  Logo,
  LeftSection,
  LeftContent,
  NotifyButton,
  ContactFormWrap,
  FooterSection,
  RightSection,
} from '@deadline/common/ui/twentythree.style';

const IndexPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [navColor, setNavColor] = useState('primary');
  const isTabletWide = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  const handleSubsForm = () => {
    setShowForm(true);
  };

  let options = {
    sectionClassName: 'section',
    arrowNavigation: true,
    anchors: ['home', 'about', 'contact'],
    navigation: true,
  };

  return (
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Head>
          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          />

          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicon/favicon.png"
          />
        </Head>
        <NextSeo
          config={{
            title: 'Coming Soon 23',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <MainWrapper>
          <LeftSection>
            <Logo>
              <Link href={'/twentythree'}>
                <a>
                  <img src={LogoImage} alt="logo" />
                </a>
              </Link>
            </Logo>
            <LeftContent>
              <p className="slogan">
                <FormattedMessage id="ticker" />
              </p>
              <h2>
                <FormattedMessage id="mainMessage" />
              </h2>

              {isTabletWide && (
                <div>
                  <CountDownTimer />
                </div>
              )}

              {showForm && (
                <ContactFormWrap>
                  <SubscriptionForm />
                </ContactFormWrap>
              )}
              {!showForm && (
                <NotifyButton>
                  <Button
                    type="submit"
                    title="notifyText"
                    onClick={handleSubsForm}
                  />
                </NotifyButton>
              )}
            </LeftContent>

            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </LeftSection>

          {isTabletWide && (
            <Fragment>
              <About />
              <Contact />
            </Fragment>
          )}

          {isDesktop && (
            <RightSection>
              <SectionsContainer {...options}>
                <Section>
                  <CountDownTimer />
                </Section>
                <Section>
                  <About />
                </Section>
                <Section>
                  <Contact />
                </Section>
              </SectionsContainer>
              <Header className="pagination">
                <nav className={`nav-${navColor}`}>
                  <a
                    href="#home"
                    className="active"
                    onClick={() => setNavColor('primary')}
                  >
                    <span className="label">Home</span>
                    <span className="dot"></span>
                  </a>
                  <a href="#about" onClick={() => setNavColor('light')}>
                    <span className="label">About</span>
                    <span className="dot"></span>
                  </a>
                  <a href="#contact" onClick={() => setNavColor('light')}>
                    <span className="label">Contact</span>
                    <span className="dot"></span>
                  </a>
                </nav>
              </Header>
            </RightSection>
          )}
        </MainWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  );
};

export default IndexPage;
