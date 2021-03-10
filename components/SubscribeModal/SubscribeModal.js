import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'react-icons-kit';
import { x } from 'react-icons-kit/feather/x';
import { closeModal } from '@redq/reuse-modal';
import BellImage from '@deadline/common/static/images/bell.png';
import ContactForm from '@deadline/components/ContactFormTwo/ContactForm';
import {
  SubscribeWrapper,
  SubscribeImage,
  ModalStyle,
  Close,
  NewsletterForm,
} from './SubscribeModal.style';

const SubscribeModal = () => {
  return (
    <>
      <ModalStyle></ModalStyle>
      <SubscribeWrapper>
        <Close type="submit" aria-label="close">
          <Icon icon={x} size={33} onClick={closeModal} />
        </Close>
        <SubscribeImage>
          <img src={BellImage} alt="bell"></img>
        </SubscribeImage>
        <h2>
          <FormattedMessage id="newsletterTitle" />
        </h2>
        <p>
          <FormattedMessage id="newsletterText" />
        </p>
        <NewsletterForm>
          <ContactForm />
        </NewsletterForm>
      </SubscribeWrapper>
    </>
  );
};

export default SubscribeModal;
