import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
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
} from '@deadline/common/ui/nineteen.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/nineteen';
// Language translation files
import localEng from '@deadline/common/data/translation/nineteen/en.json';
import localAr from '@deadline/common/data/translation/nineteen/ar.json';
import localEs from '@deadline/common/data/translation/nineteen/es.json';
import localDe from '@deadline/common/data/translation/nineteen/de.json';
import localCn from '@deadline/common/data/translation/nineteen/zh.json';
import localIl from '@deadline/common/data/translation/nineteen/he.json';
import { Container, SocialShare, SEO } from '../components';
import LogoImage from '@deadline/common/static/images/logoTwo.png';

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
        <SEO title="title" />
        <MainWrapper>
          <LogoImageContainer>
            <Link to={'/nineteen'}>
              <img src={LogoImage} alt="logo" />
            </Link>
          </LogoImageContainer>
          <Container className="mainContainer">
            <MainContentSection>
              <Fade>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
              </Fade>
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
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
