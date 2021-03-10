import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import MainWrapper, {
  FullWrapper,
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
  ImageSection,
} from '@deadline/common/ui/seven.style';

import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/seven';
// Language translation files
import localEng from '@deadline/common/data/translation/seven/en.json';
import localAr from '@deadline/common/data/translation/seven/ar.json';
import localEs from '@deadline/common/data/translation/seven/es.json';
import localDe from '@deadline/common/data/translation/seven/de.json';
import localCn from '@deadline/common/data/translation/seven/zh.json';
import localIl from '@deadline/common/data/translation/seven/he.json';
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
  const Data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "seven/image.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ParallaxProvider>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <SEO title="title" />
          <FullWrapper>
            <MainWrapper>
              <LogoImageContainer>
                <Link to={'/seven'}>
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
                </MainContentSection>
              </Container>
              <FooterSection>
                <Fade>
                  <SocialShare items={SOCIAL_PROFILES} />
                  <p>
                    <FormattedMessage id="copyrightText" />
                  </p>
                </Fade>
              </FooterSection>
            </MainWrapper>
            <ImageSection>
              <BackgroundImage
                fluid={Data.background.childImageSharp.fluid}
                Tag="div"
                className="gatsby-bg"
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'top right',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                }}
                fadeIn={true}
              />
            </ImageSection>
          </FullWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
