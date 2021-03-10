import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
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
} from '@deadline/common/ui/five.style';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/five';
// Language translation files
import localEng from '@deadline/common/data/translation/five/en.json';
import localAr from '@deadline/common/data/translation/five/ar.json';
import localEs from '@deadline/common/data/translation/five/es.json';
import localDe from '@deadline/common/data/translation/five/de.json';
import localCn from '@deadline/common/data/translation/five/zh.json';
import localIl from '@deadline/common/data/translation/five/he.json';
import { Container, SocialShare, SEO } from '../components';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import ClouldImage1 from '@deadline/common/static/images/five/cloud1.svg';
import ClouldImage2 from '@deadline/common/static/images/five/cloud2.svg';
import ClouldImage3 from '@deadline/common/static/images/five/cloud3.svg';
import Shape1 from '@deadline/common/static/images/five/shape1.svg';
import Shape2 from '@deadline/common/static/images/five/shape2.svg';

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
      background: file(relativePath: { eq: "five/buildings.png" }) {
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
            backgroundColor={`#fafbff`}
            Tag="div"
            className="gatsby-bg"
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
            fadeIn={true}
          >
            <div className="fullWrapper">
              <MainWrapper>
                <LogoImageContainer>
                  <Link to={'/five'}>
                    <img src={LogoImage} alt="logo" />
                  </Link>
                </LogoImageContainer>
                <Container className="mainContainer">
                  <MainContentSection>
                    <NormalClockWrapper>
                      <NormalClock countdown={deadline} />
                    </NormalClockWrapper>
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
                  <FooterSection>
                    <SocialShare items={SOCIAL_PROFILES} />
                    <p>
                      <FormattedMessage id="copyrightText" />
                    </p>
                  </FooterSection>
                </Container>
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
              </MainWrapper>
            </div>
          </BackgroundImage>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
