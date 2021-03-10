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
import ContactFormPortion from '@deadline/components/ContactForm/ContactForm';
import MainWrapper, {
  FullWrapper,
  MainContentSection,
  NormalClockWrapper,
  ContactForm,
  LogoImageContainer,
  ImageSection,
} from '@deadline/common/ui/nine.style';
// Language translation files
import localEng from '@deadline/common/data/translation/nine/en.json';
import localAr from '@deadline/common/data/translation/nine/ar.json';
import localEs from '@deadline/common/data/translation/nine/es.json';
import localDe from '@deadline/common/data/translation/nine/de.json';
import localCn from '@deadline/common/data/translation/nine/zh.json';
import localIl from '@deadline/common/data/translation/nine/he.json';
import { Container, SEO } from '../components';
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
      background: file(relativePath: { eq: "nine/image.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
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
              <Container className="mainContainer">
                <MainContentSection>
                  <LogoImageContainer>
                    <Link to={'/nine'}>
                      <img src={LogoImage} alt="logo" />
                    </Link>
                  </LogoImageContainer>
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
