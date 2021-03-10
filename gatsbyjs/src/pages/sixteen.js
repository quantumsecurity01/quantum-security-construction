import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  ContactFormWrap,
  LogoImageContainer,
  ContentWrapper,
  NotifyButton,
} from '@deadline/common/ui/sixteen.style';
import LogoImage from '@deadline/common/static/images/logoTwo.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/sixteen';
// Language translation files
import localEng from '@deadline/common/data/translation/sixteen/en.json';
import localAr from '@deadline/common/data/translation/sixteen/ar.json';
import localEs from '@deadline/common/data/translation/sixteen/es.json';
import localDe from '@deadline/common/data/translation/sixteen/de.json';
import localCn from '@deadline/common/data/translation/sixteen/zh.json';
import localIl from '@deadline/common/data/translation/sixteen/he.json';
import { Container, SocialShare, SEO } from '../components';
import ContactForm from '@deadline/components/ContactForm/ContactForm';
import Button from '@deadline/components/Button';
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
  const [visible, setVisible] = useState(false);
  const toggleContact = () => {
    setVisible(true);
  };

  return (
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <SEO title="title" />
        <MainWrapper>
          <LogoImageContainer>
            <Link to={'/three'}>
              <img src={LogoImage} alt="logo" />
            </Link>
          </LogoImageContainer>
          <Container className="mainContainer">
            <MainContentSection>
              <NormalClockWrapper>
                <NormalClock countdown={deadline} />
              </NormalClockWrapper>
              <ContentWrapper>
                <p>
                  <FormattedMessage id="ticker" />
                </p>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                {visible ? (
                  <ContactFormWrap>
                    <ContactForm />
                  </ContactFormWrap>
                ) : (
                  ''
                )}

                {!visible ? (
                  <NotifyButton>
                    <Button
                      type="submit"
                      title="notifyText"
                      onClick={toggleContact}
                    />
                  </NotifyButton>
                ) : (
                  ''
                )}
              </ContentWrapper>
            </MainContentSection>
          </Container>
          <FooterSection>
            <SocialShare items={SOCIAL_PROFILES} />
            <p>
              <FormattedMessage id="copyrightText" />
            </p>
          </FooterSection>
        </MainWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  );
};

export default IndexPage;
