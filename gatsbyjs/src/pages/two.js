import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock';
import MainWrapper, {
  LogoImageContainer,
  GradientDiv,
  MainContentSection,
  ContactForm,
  NormalClockWrapper,
  FooterSection,
  ClockSection,
} from '@deadline/common/ui/two.style';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/two';
// Language translation files
import localEng from '@deadline/common/data/translation/two/en.json';
import localAr from '@deadline/common/data/translation/two/ar.json';
import localEs from '@deadline/common/data/translation/two/es.json';
import localDe from '@deadline/common/data/translation/two/de.json';
import localCn from '@deadline/common/data/translation/two/zh.json';
import localIl from '@deadline/common/data/translation/two/he.json';
import { Container, SocialShare, SEO } from '../components';
import MaterialContactForm from '@deadline/components/MaterialContactForm/MaterialContactForm';
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
      background: file(relativePath: { eq: "two/1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <LanguageProvider messages={messages}>
      <SEO title="title" />
      <BackgroundImage
        fluid={Data.background.childImageSharp.fluid}
        backgroundColor={`#03103b;`}
        Tag="div"
        className="gatsby-bg"
        style={{
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
        fadeIn={true}
      >
        <MainWrapper>
          <LogoImageContainer>
            <Link to={'/two'}>
              <img src={LogoImage} alt="logo" />
            </Link>
          </LogoImageContainer>
          <GradientDiv />
          <Container className="mainContainer">
            <MainContentSection>
              <span className="Ticker">
                <FormattedMessage id="ticker" />
              </span>
              <h2>
                <FormattedMessage id="mainMessage" />
              </h2>
              <p>
                <FormattedMessage id="description" />
              </p>

              <ContactForm>
                <MaterialContactForm />
              </ContactForm>
            </MainContentSection>
            <ClockSection>
              <NormalClockWrapper>
                <NormalClock countdown={deadline} divider="true" />
              </NormalClockWrapper>
            </ClockSection>
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
    </LanguageProvider>
  );
};

export default IndexPage;
