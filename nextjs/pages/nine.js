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
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  LogoImageContainer,
  ImageSection,
} from '@deadline/common/ui/nine.style';
import '../static/_styles.css';
// Language translation files
import localEng from '@deadline/common/data/translation/nine/en.json';
import localAr from '@deadline/common/data/translation/nine/ar.json';
import localEs from '@deadline/common/data/translation/nine/es.json';
import localDe from '@deadline/common/data/translation/nine/de.json';
import localCn from '@deadline/common/data/translation/nine/zh.json';
import localIl from '@deadline/common/data/translation/nine/he.json';
import { Container } from '../components';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import SectionImage from '@deadline/common/static/images/nine/image.png';

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
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:300,400,500,700&display=swap"
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
            title: 'Coming Soon 9',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <FullWrapper>
          <MainWrapper>
            <Container className="mainContainer">
              <MainContentSection>
                <LogoImageContainer>
                  <Link href={'/nine'}>
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
              </MainContentSection>
            </Container>
          </MainWrapper>
          <ImageSection
            style={{
              backgroundImage: `url(${SectionImage})`,
              backgroundPosition: 'top right',
              backgroundSize: 'cover',
            }}
          ></ImageSection>
        </FullWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
