import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
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
  BottomShape,
  CloudImages,
  ImageContainer,
} from '@deadline/common/ui/twelve.style';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/twelve';
// Language translation files
import localEng from '@deadline/common/data/translation/twelve/en.json';
import localAr from '@deadline/common/data/translation/twelve/ar.json';
import localEs from '@deadline/common/data/translation/twelve/es.json';
import localDe from '@deadline/common/data/translation/twelve/de.json';
import localCn from '@deadline/common/data/translation/twelve/zh.json';
import localIl from '@deadline/common/data/translation/twelve/he.json';
import { Container, SocialShare, SEO } from '../components';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import ClouldImage1 from '@deadline/common/static/images/twelve/cloud1.svg';
import ClouldImage2 from '@deadline/common/static/images/twelve/cloud2.svg';
import ClouldImage3 from '@deadline/common/static/images/twelve/cloud3.svg';
import Shape1 from '@deadline/common/static/images/twelve/shape2.svg';
import Shape2 from '@deadline/common/static/images/twelve/shape1.svg';
import MainImage from '@deadline/common/static/images/twelve/image.png';

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
        <div className="fullWrapper">
          <MainWrapper>
            <Container className="mainContainer">
              <MainContentSection>
                <LogoImageContainer>
                  <Link to={'/twelve'}>
                    <img src={LogoImage} alt="logo" />
                  </Link>
                </LogoImageContainer>

                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
                <ContactForm>
                  <ContactFormPortion />
                </ContactForm>
              </MainContentSection>
              <ImageContainer>
                <img src={MainImage} alt="MainImage" />
              </ImageContainer>
            </Container>
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
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainWrapper>
        </div>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  </ParallaxProvider>
);

export default IndexPage;
