import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Particles from 'react-particles-js';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
  ParticleContainer,
} from '@deadline/common/ui/three.style';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/three';
// Language translation files
import localEng from '@deadline/common/data/translation/three/en.json';
import localAr from '@deadline/common/data/translation/three/ar.json';
import localEs from '@deadline/common/data/translation/three/es.json';
import localDe from '@deadline/common/data/translation/three/de.json';
import localCn from '@deadline/common/data/translation/three/zh.json';
import localIl from '@deadline/common/data/translation/three/he.json';
import { Container, SocialShare } from '../components';
import ContactForm from '@deadline/components/ContactForm/ContactForm';
import Particle1 from '@deadline/common/static/images/three/1.png';
import Particle2 from '@deadline/common/static/images/three/2.png';
import Particle3 from '@deadline/common/static/images/three/3.png';
import Particle4 from '@deadline/common/static/images/three/4.png';
import Particle5 from '@deadline/common/static/images/three/5.png';
import Particle6 from '@deadline/common/static/images/three/10.png';
import Particle7 from '@deadline/common/static/images/three/11.png';
import Particle8 from '@deadline/common/static/images/three/8.png';
import Particle9 from '@deadline/common/static/images/three/9.png';
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
const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 10,
              density: { enable: true, value_area: 1400 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Particle1}`,
                  width: 34,
                  height: 25,
                },
                {
                  src: `${Particle2}`,
                  width: 29,
                  height: 45,
                },
                {
                  src: `${Particle3}`,
                  width: 34,
                  height: 24,
                },
                {
                  src: `${Particle4}`,
                  width: 28,
                  height: 40,
                },
                {
                  src: `${Particle5}`,
                  width: 22,
                  height: 20,
                },
                {
                  src: `${Particle6}`,
                  width: 26,
                  height: 40,
                },
                {
                  src: `${Particle7}`,
                  width: 22,
                  height: 20,
                },
                {
                  src: `${Particle8}`,
                  width: 22,
                  height: 20,
                },

                {
                  src: `${Particle9}`,
                  width: 50,
                  height: 24,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

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
          title: 'Coming Soon 3',
          description: 'React Next Coming Soon Template.',
        }}
      />
      <MainWrapper>
        <ParticleContainer>
          <ParticlesComponent />
        </ParticleContainer>
        <LogoImageContainer>
          <Link href={'/three'}>
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
            <h2>
              <FormattedMessage id="mainMessage" />
            </h2>
            <p>
              <FormattedMessage id="description" />
            </p>

            <ContactForm />
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
);

export default IndexPage;
