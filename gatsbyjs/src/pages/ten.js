import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
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
  FooterSection,
  LogoImageContainer,
  ImageSection,
} from '@deadline/common/ui/ten.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/ten';
// Language translation files
import localEng from '@deadline/common/data/translation/ten/en.json';
import localAr from '@deadline/common/data/translation/ten/ar.json';
import localEs from '@deadline/common/data/translation/ten/es.json';
import localDe from '@deadline/common/data/translation/ten/de.json';
import localCn from '@deadline/common/data/translation/ten/zh.json';
import localIl from '@deadline/common/data/translation/ten/he.json';
import { Container, SocialShare, SEO } from '../components';
import LogoImage from '@deadline/common/static/images/logoOne.png';

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
          <SEO title="title" />
          <FullWrapper>
            <MainWrapper>
              <LogoImageContainer>
                <Link to={'/ten'}>
                  <img src={LogoImage} alt="logo" />
                </Link>
              </LogoImageContainer>
              <Container className="mainContainer">
                <MainContentSection>
                  <NormalClockWrapper>
                    <Fade>
                      <NormalClock countdown={deadline} />
                    </Fade>
                  </NormalClockWrapper>
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
              </Container>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainWrapper>
            <ImageSection></ImageSection>
          </FullWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
