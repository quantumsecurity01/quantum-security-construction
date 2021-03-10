import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import ContactForm from '@deadline/components/ContactForm/ContactForm';
import MainWrapper, {
  MainContentSection,
  ContactFormWrap,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
  CornerImages,
  FullWrapper,
} from '@deadline/common/ui/four.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/four';
// Language translation files
import localEng from '@deadline/common/data/translation/four/en.json';
import localAr from '@deadline/common/data/translation/four/ar.json';
import localEs from '@deadline/common/data/translation/four/es.json';
import localDe from '@deadline/common/data/translation/four/de.json';
import localCn from '@deadline/common/data/translation/four/zh.json';
import localIl from '@deadline/common/data/translation/four/he.json';
import { Container, SocialShare, SEO } from '../components';
import LogoImage from '@deadline/common/static/images/logoOne.png';
//corner images
import Image1 from '@deadline/common/static/images/four/top-left.svg';
import Image2 from '@deadline/common/static/images/four/top-right.svg';
import Image3 from '@deadline/common/static/images/four/bottom-left.svg';
import Image4 from '@deadline/common/static/images/four/bottom-right.svg';

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
        <FullWrapper className="fullWrapper">
          <CornerImages>
            <Fade left>
              <img src={Image1} alt="corner one" />
            </Fade>
            <Fade right>
              <img src={Image2} alt="corner two" />
            </Fade>
            <Fade left>
              <img src={Image3} alt="corner three" />
            </Fade>
            <Fade right>
              <img src={Image4} alt="corner four" />
            </Fade>
          </CornerImages>
          <MainWrapper>
            <LogoImageContainer>
              <Link to={'/four'}>
                <img src={LogoImage} alt="logo" />
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

                <ContactFormWrap>
                  <ContactForm />
                </ContactFormWrap>
              </MainContentSection>
            </Container>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainWrapper>
        </FullWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
