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
import NormalClock from '@deadline/components/NormalClock/NormalClock';
import ContactFormPortion from '@deadline/components/ContactForm/ContactForm';
import MainWrapper, {
  FullWrapper,
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  FooterSection,
  LogoImageContainer,
  ImageSection,
  MainWrapperSection,
} from '@deadline/common/ui/fifteen.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/fifteen';
// Language translation files
import localEng from '@deadline/common/data/translation/fifteen/en.json';
import localAr from '@deadline/common/data/translation/fifteen/ar.json';
import localEs from '@deadline/common/data/translation/fifteen/es.json';
import localDe from '@deadline/common/data/translation/fifteen/de.json';
import localCn from '@deadline/common/data/translation/fifteen/zh.json';
import localIl from '@deadline/common/data/translation/fifteen/he.json';
import { Container, SocialShare } from '../components';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
import BannerBG from '@deadline/common/static/images/fifteen/illustration.png';

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

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <Head>
            {/* Load google fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Frank+Ruhl+Libre:300,400,500,700,900|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
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
              title: 'Coming Soon 15',
              description: 'React Next Coming Soon Template.',
            }}
          />
          <MainWrapperSection>
            <LogoImageContainer>
              <Link href={'/eight'}>
                <a>
                  <img src={LogoImage} alt="logo" />
                </a>
              </Link>
            </LogoImageContainer>
            <FullWrapper>
              <MainWrapper>
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
                    <ContactForm>
                      <Fade>
                        <ContactFormPortion />
                      </Fade>
                    </ContactForm>
                  </MainContentSection>
                </Container>
              </MainWrapper>

              <ImageSection>
                <div
                  style={{
                    backgroundImage: `url(${BannerBG})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                    width: '100%',
                  }}
                ></div>
              </ImageSection>
            </FullWrapper>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainWrapperSection>

          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
