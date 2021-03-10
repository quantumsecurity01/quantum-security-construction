import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Particles from 'react-particles-js';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock';
import MainWrapper, {
  LogoImageContainer,
  GradientDiv,
  ParticleWrapper,
  MainContentSection,
  // ContactForm,
  NormalClockWrapper,
  FooterSection,
} from '@deadline/common/ui/one.style';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/one';
// Language translation files
import localEng from '@deadline/common/data/translation/one/en.json';
import localAr from '@deadline/common/data/translation/one/ar.json';
import localEs from '@deadline/common/data/translation/one/es.json';
import localDe from '@deadline/common/data/translation/one/de.json';
import localCn from '@deadline/common/data/translation/one/zh.json';
import localIl from '@deadline/common/data/translation/one/he.json';
import { Container, SocialShare } from '../components';
import MaterialContactForm from '@deadline/components/MaterialContactForm/MaterialContactForm';
import '../static/_styles.css';
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
  <LanguageProvider messages={messages}>
    <React.Fragment>
      <Head>
        {/* Load google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
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
          title: 'Coming Soon 1',
          description: 'React Next Coming Soon Template.',
        }}
      />
      <MainWrapper>
        <LogoImageContainer>
          <Link href={'/one'}>
            <a>
              <img src={LogoImage} alt="logo" />
            </a>
          </Link>
        </LogoImageContainer>
        <ParticleWrapper>
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 600,
                  },
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                  },
                },
                opacity: {
                  value: 0.2,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 7,
                  random: true,
                  anim: {
                    value: 4,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab',
                  },
                  onclick: {
                    enable: true,
                    mode: 'push',
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 300,
                    line_linked: {
                      opacity: 0.4,
                      enable: true,
                    },
                  },
                  push: {
                    particles_nb: 8,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </ParticleWrapper>
        <GradientDiv />
        <Container className="mainContainer">
          <MainContentSection>
            <span className="Ticker">
              <FormattedMessage id="ticker" />
            </span>
            <h2>
              <FormattedMessage id="mainMessage" />
            </h2>
            <p>
              <FormattedMessage id="description" />
            </p>
            <NormalClockWrapper>
              <NormalClock countdown={deadline} divider="true" />
            </NormalClockWrapper>
            <MaterialContactForm />
          </MainContentSection>
        </Container>
        <FooterSection>
          <SocialShare items={SOCIAL_PROFILES} />
          <p>
            <FormattedMessage id="copyrightText" />
          </p>
        </FooterSection>
      </MainWrapper>
    </React.Fragment>
    <LanguageSwitcher languageConfig={languageConfig} />
  </LanguageProvider>
);

export default IndexPage;
