import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
} from '@deadline/common/ui/six.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/six';
import '../static/_styles.css';
// Language translation files
import localEng from '@deadline/common/data/translation/six/en.json';
import localAr from '@deadline/common/data/translation/six/ar.json';
import localEs from '@deadline/common/data/translation/six/es.json';
import localDe from '@deadline/common/data/translation/six/de.json';
import localCn from '@deadline/common/data/translation/six/zh.json';
import localIl from '@deadline/common/data/translation/six/he.json';
import { Container, SocialShare } from '../components';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
import BannerBG from '@deadline/common/static/images/six/bg.png';

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
            href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            type="image/x-icon"
            href="/static/favicon/favicon.png"
          />
        </Head>
        <NextSeo
          config={{
            title: 'Coming Soon 6',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <MainWrapper
          style={{
            backgroundImage: `url(${BannerBG})`,
            backgroundColor: '#18192e',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <LogoImageContainer>
            <Link href={'/six'}>
              <a>
                <img src={LogoImage} alt="logo" />
              </a>
            </Link>
          </LogoImageContainer>
          <Container className="mainContainer">
            <MainContentSection>
              <h2>
                <FormattedMessage id="mainMessage" />
              </h2>
              <p>
                <FormattedMessage id="description" />
              </p>
              <Fade>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
              </Fade>
            </MainContentSection>
          </Container>
          <FooterSection>
            <SocialShare items={SOCIAL_PROFILES} />
            <p>
              <FormattedMessage id="copyrightText" />
            </p>
          </FooterSection>
        </MainWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
