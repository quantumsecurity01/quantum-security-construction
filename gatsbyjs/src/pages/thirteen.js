import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Modal, openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
import { Icon } from 'react-icons-kit';
import { iosBell } from 'react-icons-kit/ionicons/iosBell';
import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { home } from 'react-icons-kit/entypo/home';
import { x } from 'react-icons-kit/feather/x';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock.js';
import Button from '@deadline/components/Button';
import ContactForm from '@deadline/components/MaterialContactFormTwo/MaterialContactForm';
import SubscribeModal from '@deadline/components/SubscribeModal/SubscribeModal';
import MainContentWrapper, {
  MainContentSection,
  NormalClockWrapper,
  LogoImageContainer,
  ButtonWrapper,
  MainWrapper,
  SideBar,
  Overlay,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose,
  PageWrapper,
} from '@deadline/common/ui/thirteen.style';
import LogoImage from '@deadline/common/static/images/logoOne.png';
// Language translation files
import localEng from '@deadline/common/data/translation/thirteen/en.json';
import localAr from '@deadline/common/data/translation/thirteen/ar.json';
import localEs from '@deadline/common/data/translation/thirteen/es.json';
import localDe from '@deadline/common/data/translation/thirteen/de.json';
import localCn from '@deadline/common/data/translation/thirteen/zh.json';
import localIl from '@deadline/common/data/translation/thirteen/he.json';
import { Container, SEO } from '../components';
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
      background: file(relativePath: { eq: "thirteen/background.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const [state, setState] = useState({
    toggle: false,
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  const CloseComponent = () => <div></div>;

  const handleModal = () => {
    openModal({
      config: {
        className: 'newsletter-modal',
        disableDragging: false,
        enableResizing: {
          bottom: true,
          bottomLeft: true,
          bottomRight: true,
          left: true,
          right: true,
          top: true,
          topLeft: true,
          topRight: true,
        },
        width: 975,
        height: 600,
        animationFrom: { transform: 'scale(0.7)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'scale(1)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 130,
          friction: 26,
        }, // react-spring config props
      },
      withRnd: false,
      overlayClassName: 'modal_overlay',
      closeOnClickOutside: true,
      component: SubscribeModal,
      closeComponent: CloseComponent,
    });
  };

  return (
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <SEO title="title" />
        <Modal />
        <PageWrapper>
          <BackgroundImage
            fluid={Data.background.childImageSharp.fluid}
            backgroundColor={`#e6e8ee`}
            Tag="div"
            className="background-img"
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
            }}
            fadeIn={true}
          >
            <MainWrapper>
              <MainContentWrapper>
                <LogoImageContainer>
                  <Link to={'/thirteen'}>
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
                    <NormalClockWrapper>
                      <NormalClock divider={true} countdown={deadline} />
                    </NormalClockWrapper>
                    <ButtonWrapper>
                      <Button
                        type="submit"
                        title="modalButtonText"
                        icon={<Icon icon={iosBell} size={20} />}
                        className="notify"
                        onClick={handleModal}
                      />
                      <Button
                        type="submit"
                        title="sidebarButtonText"
                        icon={<Icon icon={iosArrowThinRight} size={25} />}
                        className="info"
                        onClick={toggleHandle}
                      />
                    </ButtonWrapper>
                  </MainContentSection>
                </Container>
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
          </BackgroundImage>
        </PageWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  );
};

export default IndexPage;
