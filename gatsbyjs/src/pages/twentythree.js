import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

import { useMediaQuery } from 'beautiful-react-hooks';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import PageWrapper, {
  MainWrapper,
  Logo,
  LeftSection,
  LeftContent,
  NotifyButton,
  ContactFormWrap,
  FooterSection,
  RightSection,
} from '@deadline/common/ui/twentythree.style';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/sixteen';
import { SocialShare, SEO } from '../components';
import SubscriptionForm from '@deadline/components/ContactForm/ContactForm';
import Button from '@deadline/components/Button';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import CountDownTimer from '../components/twentythree/CountDownTimer';
import About from '../components/twentythree/About';
import Contact from '../components/twentythree/Contact';
// Language translation files
import localEng from '@deadline/common/data/translation/twentythree/en.json';
import localAr from '@deadline/common/data/translation/twentythree/ar.json';
import localEs from '@deadline/common/data/translation/twentythree/es.json';
import localDe from '@deadline/common/data/translation/twentythree/de.json';
import localCn from '@deadline/common/data/translation/twentythree/zh.json';
import localIl from '@deadline/common/data/translation/twentythree/he.json';
// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const IndexPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [navColor, setNavColor] = useState('primary');
  const isTabletWide = useMediaQuery('(max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  const handleSubsForm = () => {
    setShowForm(true);
  };

  let options = {
    sectionClassName: 'section',
    arrowNavigation: true,
    anchors: ['home', 'about', 'contact'],
    navigation: true,
  };

  return (
    <PageWrapper>
      <LanguageProvider messages={messages}>
        <React.Fragment>
          <SEO title="title" />
          <MainWrapper>
            <LeftSection>
              <Logo>
                <Link to={'/twentythree'}>
                  <img src={LogoImage} alt="logo" />
                </Link>
              </Logo>
              <LeftContent>
                <p className="slogan">
                  <FormattedMessage id="ticker" />
                </p>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>

                {isTabletWide && (
                  <div>
                    <CountDownTimer />
                  </div>
                )}

                {showForm && (
                  <ContactFormWrap>
                    <SubscriptionForm />
                  </ContactFormWrap>
                )}
                {!showForm && (
                  <NotifyButton>
                    <Button
                      type="submit"
                      title="notifyText"
                      onClick={handleSubsForm}
                    />
                  </NotifyButton>
                )}
              </LeftContent>

              <FooterSection>
                <SocialShare items={SOCIAL_PROFILES} />
                <p>
                  <FormattedMessage id="copyrightText" />
                </p>
              </FooterSection>
            </LeftSection>

            {isTabletWide && (
              <React.Fragment>
                <About />
                <Contact />
              </React.Fragment>
            )}

            {isDesktop && (
              <RightSection>
                <SectionsContainer {...options}>
                  <Section>
                    <CountDownTimer />
                  </Section>
                  <Section>
                    <About />
                  </Section>
                  <Section>
                    <Contact />
                  </Section>
                </SectionsContainer>
                <Header className="pagination">
                  <nav className={`nav-${navColor}`}>
                    <a
                      href="#home"
                      className="active"
                      onClick={() => setNavColor('primary')}
                    >
                      <span className="label">Home</span>
                      <span className="dot"></span>
                    </a>
                    <a href="#about" onClick={() => setNavColor('light')}>
                      <span className="label">About</span>
                      <span className="dot"></span>
                    </a>
                    <a href="#contact" onClick={() => setNavColor('light')}>
                      <span className="label">Contact</span>
                      <span className="dot"></span>
                    </a>
                  </nav>
                </Header>
              </RightSection>
            )}
          </MainWrapper>
          <LanguageSwitcher languageConfig={languageConfig} />
        </React.Fragment>
      </LanguageProvider>
    </PageWrapper>
  );
};

export default IndexPage;
