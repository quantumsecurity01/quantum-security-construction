import React, { useState } from 'react';
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
  ContactFormWrap,
  LogoImageContainer,
  ParticleContainer,
  ContentWrapper,
  NotifyButton,
} from '@deadline/common/ui/eleven.style';
import '../static/_styles.css';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/three';
// Language translation files
import localEng from '@deadline/common/data/translation/eleven/en.json';
import localAr from '@deadline/common/data/translation/eleven/ar.json';
import localEs from '@deadline/common/data/translation/eleven/es.json';
import localDe from '@deadline/common/data/translation/eleven/de.json';
import localCn from '@deadline/common/data/translation/eleven/zh.json';
import localIl from '@deadline/common/data/translation/eleven/he.json';
import { Container, SocialShare } from '../components';
import ContactForm from '@deadline/components/ContactForm/ContactForm';
import Button from '@deadline/components/Button';
import Particle2 from '@deadline/common/static/images/eleven/2.png';
import Particle3 from '@deadline/common/static/images/eleven/3.png';
import Particle6 from '@deadline/common/static/images/eleven/6.png';
import Particle7 from '@deadline/common/static/images/eleven/7.png';
import Particle8 from '@deadline/common/static/images/eleven/8.png';
import Particle9 from '@deadline/common/static/images/eleven/9.png';
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
              value: 14,
              density: { enable: true, value_area: 1400 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Particle2}`,
                  width: 15,
                  height: 15,
                },
                {
                  src: `${Particle3}`,
                  width: 45,
                  height: 40,
                },
                {
                  src: `${Particle6}`,
                  width: 26,
                  height: 26,
                },
                {
                  src: `${Particle7}`,
                  width: 54,
                  height: 30,
                },
                {
                  src: `${Particle8}`,
                  width: 44,
                  height: 30,
                },

                {
                  src: `${Particle9}`,
                  width: 50,
                  height: 30,
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

const IndexPage = () => {
  const [visible, setVisible] = useState(false);
  const toggleContact = () => {
    setVisible(true);
  };

  return (
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Head>
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
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
            title: 'Coming Soon 11',
            description: 'React Next Coming Soon Template.',
          }}
        />
        <MainWrapper>
          <ParticleContainer>
            <ParticlesComponent />
          </ParticleContainer>
          <LogoImageContainer>
            <Link href={'/eleven'}>
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
              <ContentWrapper>
                <p>
                  <FormattedMessage id="ticker" />
                </p>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                {visible ? (
                  <ContactFormWrap>
                    <ContactForm />
                  </ContactFormWrap>
                ) : (
                  ''
                )}

                {!visible ? (
                  <NotifyButton>
                    <Button
                      type="submit"
                      title="notifyText"
                      onClick={toggleContact}
                    />
                  </NotifyButton>
                ) : (
                  ''
                )}
              </ContentWrapper>
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
};

export default IndexPage;
