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
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  LogoImageContainer,
} from '@deadline/common/ui/six.style';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/six';
// Language translation files
import localEng from '@deadline/common/data/translation/six/en.json';
import localAr from '@deadline/common/data/translation/six/ar.json';
import localEs from '@deadline/common/data/translation/six/es.json';
import localDe from '@deadline/common/data/translation/six/de.json';
import localCn from '@deadline/common/data/translation/six/zh.json';
import localIl from '@deadline/common/data/translation/six/he.json';
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

const IndexPage = () => {
  const Data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "six/bg.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
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
          <BackgroundImage
            fluid={Data.background.childImageSharp.fluid}
            backgroundColor={`#18192e`}
            Tag="div"
            className="gatsby-bg"
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            fadeIn={true}
          >
            <MainWrapper>
              <LogoImageContainer>
                <Link to={'/six'}>
                  <img src={LogoImage} alt="logo" />
                </Link>
              </LogoImageContainer>
              <Container className="mainContainer">
                <MainContentSection>
                  <h2>
                    <FormattedMessage id="mainMessage" />
                  </h2>
                  <p>
                    <FormattedMessage id="description" />
                  </p>
                  <Fade>
                    <NormalClockWrapper>
                      <NormalClock countdown={deadline} />
                    </NormalClockWrapper>
                  </Fade>
                </MainContentSection>
              </Container>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainWrapper>
          </BackgroundImage>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
