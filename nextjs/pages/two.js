import React from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
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
  BottomIllustrationWrapper,
} from '@deadline/common/ui/two.style';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
import BottomIllustration from '@deadline/common/static/images/two/1.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/two';
// Language translation files
import localEng from '@deadline/common/data/translation/two/en.json';
import localAr from '@deadline/common/data/translation/two/ar.json';
import localEs from '@deadline/common/data/translation/two/es.json';
import localDe from '@deadline/common/data/translation/two/de.json';
import localCn from '@deadline/common/data/translation/two/zh.json';
import localIl from '@deadline/common/data/translation/two/he.json';
import { Container, SocialShare } from '../components';
import MaterialContactForm from '@deadline/components/MaterialContactForm/MaterialContactForm';
import '../static/_styles.css';
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
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Head>
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
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
            title: 'Coming Soon 2',
            description: 'React Next Coming Soon Template.',
          }}
        />

        <MainWrapper style={{ backgroundColor: '#03103b' }}>
          <LogoImageContainer>
            <Link href={'/two'}>
              <a>
                <img src={LogoImage} alt="logo" />
              </a>
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
          <BottomIllustrationWrapper>
            <img src={BottomIllustration} alt="Bottom" />
          </BottomIllustrationWrapper>
        </MainWrapper>
      </React.Fragment>
      <LanguageSwitcher languageConfig={languageConfig} />
    </LanguageProvider>
  );
};

export default IndexPage;
