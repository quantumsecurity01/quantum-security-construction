import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import ContactFormPortion from '@deadline/components/ContactForm/ContactForm';
import MainWrapper, {
  MainContentSection,
  ContactForm,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
  BottomIllustration,
  BottomShape,
  CloudImages,
} from '@deadline/common/ui/five.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/five';
// Language translation files
import localEng from '@deadline/common/data/translation/five/en.json';
import localAr from '@deadline/common/data/translation/five/ar.json';
import localEs from '@deadline/common/data/translation/five/es.json';
import localDe from '@deadline/common/data/translation/five/de.json';
import localCn from '@deadline/common/data/translation/five/zh.json';
import localIl from '@deadline/common/data/translation/five/he.json';
import { Container, SocialShare } from '../components';
import '../static/_styles.css';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import ClouldImage1 from '@deadline/common/static/images/five/cloud1.svg';
import ClouldImage2 from '@deadline/common/static/images/five/cloud2.svg';
import ClouldImage3 from '@deadline/common/static/images/five/cloud3.svg';
import Shape1 from '@deadline/common/static/images/five/shape1.svg';
import Shape2 from '@deadline/common/static/images/five/shape2.svg';
import Illustration from '@deadline/common/static/images/five/buildings.png';

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
            title: 'Coming Soon 5',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <div className="fullWrapper">
          <MainWrapper style={{ backgroundColor: '#fafbff' }}>
            <LogoImageContainer>
              <Link href={'/five'}>
                <a>
                  <img src={LogoImage} alt="logo" />
                </a>
              </Link>
            </LogoImageContainer>
            <Container className="mainContainer">
              <MainContentSection>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
                <CloudImages>
                  <Fade left delay={400}>
                    <img src={ClouldImage1} alt="CloudImage 1" />
                  </Fade>
                  <Fade right delay={600}>
                    <img src={ClouldImage2} alt="CloudImage 2" />
                  </Fade>
                  <Fade top delay={800}>
                    <img src={ClouldImage3} alt="CloudImage 3" />
                  </Fade>
                </CloudImages>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <p>
                  <FormattedMessage id="description" />
                </p>

                <ContactForm>
                  <ContactFormPortion />
                </ContactForm>
              </MainContentSection>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </Container>
            <BottomIllustration>
              <img src={Illustration} alt="Bottom Illustration" />
            </BottomIllustration>
            <div className="bottomAnimation">
              <Parallax offsetYMax={50} offsetYMin={-40}>
                <BottomShape>
                  <Fade left>
                    <img src={Shape1} alt="Bottom Shape Left" />
                  </Fade>
                  <Fade right>
                    <img src={Shape2} alt="Bottom Shape Right" />
                  </Fade>
                </BottomShape>
              </Parallax>
            </div>
          </MainWrapper>
        </div>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
