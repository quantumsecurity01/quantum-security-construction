import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import ContactFormPortion from '@deadline/components/ContactForm/ContactForm';
import MainWrapper, {
  FullWrapper,
  CornerImages,
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  LogoImageContainer,
  ImageSection,
  FooterSection,
} from '@deadline/common/ui/twentyone.style';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/three';
import '../static/_styles.css';
// Language translation files
import localEng from '@deadline/common/data/translation/twentyone/en.json';
import localAr from '@deadline/common/data/translation/twentyone/ar.json';
import localEs from '@deadline/common/data/translation/twentyone/es.json';
import localDe from '@deadline/common/data/translation/twentyone/de.json';
import localCn from '@deadline/common/data/translation/twentyone/zh.json';
import localIl from '@deadline/common/data/translation/twentyone/he.json';
import { Container, SocialShare } from '../components';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
//corner images
import Image1 from '@deadline/common/static/images/twentyone/top-left.png';
import Image2 from '@deadline/common/static/images/twentyone/bottom-right.png';

// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);

const IndexPage = () => (
  <ParallaxProvider>
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Head>
          {/* Load google fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Playfair+Display:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
          />

          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicon/favicon.png"
          />
        </Head>
        <NextSeo
          config={{
            title: 'Coming Soon 21',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <FullWrapper>
          <CornerImages>
            <Fade left>
              <img src={Image1} alt="corner one" />
            </Fade>
            <Fade right>
              <img src={Image2} alt="corner two" />
            </Fade>
          </CornerImages>
          <MainWrapper>
            <Container className="mainContainer">
              <MainContentSection>
                <LogoImageContainer>
                  <Link href={'/twentyone'}>
                    <a>
                      <img src={LogoImage} alt="logo" />
                    </a>
                  </Link>
                </LogoImageContainer>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <p>
                  <FormattedMessage id="description" />
                </p>
                <ContactForm>
                  <Fade top>
                    <ContactFormPortion />
                  </Fade>
                </ContactForm>
                <FooterSection>
                  <SocialShare items={SOCIAL_PROFILES} />
                  <p>
                    <FormattedMessage id="copyrightText" />
                  </p>
                </FooterSection>
              </MainContentSection>
            </Container>
          </MainWrapper>
          <ImageSection />
        </FullWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
