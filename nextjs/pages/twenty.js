import React, { useState } from 'react';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from 'react-scroll-parallax';
import '@redq/reuse-modal/lib/index.css';
import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { home } from 'react-icons-kit/entypo/home';
import { x } from 'react-icons-kit/feather/x';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
// import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight'
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Button from '@deadline/components/Button';
import ContactForm from '@deadline/components/MaterialContactFormTwo/MaterialContactForm';
import SubscriptionForm from '@deadline/components/ContactForm/ContactForm';
import MainContentWrapper, {
  LogoImageContainer,
  SidebarButton,
  MainContentSection,
  SubscriptionWrapper,
  MainWrapper,
  NormalClockWrapper,
  SideBar,
  Overlay,
  FooterSection,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose,
} from '@deadline/common/ui/twenty.style';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/six';
// Language translation files
import localEng from '@deadline/common/data/translation/twenty/en.json';
import localAr from '@deadline/common/data/translation/twenty/ar.json';
import localEs from '@deadline/common/data/translation/twenty/es.json';
import localDe from '@deadline/common/data/translation/twenty/de.json';
import localCn from '@deadline/common/data/translation/twenty/zh.json';
import localIl from '@deadline/common/data/translation/twenty/he.json';
import { Container, SocialShare } from '../components';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
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
  const [state, setState] = useState({
    toggle: false,
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  return (
    <ParallaxProvider>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <Head>
            {/* Load google fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Anton&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=DM+Sans:500,700|Lato|Roboto:400,500|Comfortaa:700&display=swap"
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
              title: 'Coming Soon 20',
              description: 'React Next Coming Soon Template.',
            }}
          />

          <MainWrapper className={state.toggle === true ? 'sidebar-open' : ''}>
            <MainContentWrapper>
              <LogoImageContainer>
                <Link href={'/six'}>
                  <a>
                    <img src={LogoImage} alt="logo" />
                  </a>
                </Link>
                {state.toggle === false ? (
                  <SidebarButton>
                    <Button
                      icon={<Icon icon={androidMenu} size={25} />}
                      onClick={toggleHandle}
                    />
                  </SidebarButton>
                ) : (
                  ''
                )}
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
                  <SubscriptionWrapper>
                    <SubscriptionForm />
                  </SubscriptionWrapper>
                </MainContentSection>
              </Container>
              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </MainContentWrapper>
            <SideBar className={state.toggle === true ? 'expand' : ''}>
              <SidebarContent>
                <SidebarClose type="submit" aria-label="close">
                  <Icon icon={x} size={33} onClick={toggleHandle} />
                </SidebarClose>
                <About>
                  <h2>
                    <FormattedMessage id="aboutTitle" />
                  </h2>
                  <p>
                    <FormattedMessage id="aboutText" />
                  </p>
                </About>

                <Contact>
                  <h2>
                    <FormattedMessage id="contactTitle" />
                  </h2>
                  <ContactForm />
                </Contact>

                <Info>
                  <InfoItem>
                    <InfoIcon>
                      <Icon icon={location} size={33} />
                    </InfoIcon>
                    <h4>
                      <FormattedMessage id="addressTitle" />
                    </h4>
                    <p>
                      <FormattedMessage id="addressDetails" />
                    </p>
                  </InfoItem>

                  <InfoItem>
                    <InfoIcon>
                      <Icon icon={phone} size={32} />
                    </InfoIcon>
                    <h4>
                      <FormattedMessage id="phoneTitle" />
                    </h4>
                    <p>
                      <FormattedMessage id="phoneNumbers" />
                    </p>
                  </InfoItem>

                  <InfoItem>
                    <InfoIcon>
                      <Icon icon={home} size={32} />
                    </InfoIcon>
                    <h4>
                      <FormattedMessage id="websiteTitle" />
                    </h4>
                    <p>
                      <FormattedMessage id="Websites" />
                    </p>
                  </InfoItem>
                </Info>
              </SidebarContent>
              <Overlay className={state.toggle === true ? 'expand' : ''} />
            </SideBar>
          </MainWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
