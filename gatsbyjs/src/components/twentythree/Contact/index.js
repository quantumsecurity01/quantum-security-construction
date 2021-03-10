import React from 'react';
import { FormattedMessage } from 'react-intl';

import ContactForm from '@deadline/components/MaterialContactFormTwo/MaterialContactForm';

import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { phone } from 'react-icons-kit/icomoon/phone';
import { home } from 'react-icons-kit/entypo/home';

import {
  ContactSection,
  ContactHeading,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
} from './contact.style';

const RightSection = () => {
  return (
    <ContactSection>
      <ContactHeading>
        <h2>
          <FormattedMessage id="contactTitle" />
        </h2>
      </ContactHeading>

      <Contact>
        <ContactForm />
      </Contact>

      <Info className="contactInfo">
        <InfoItem className="infoItem">
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
        <InfoItem className="infoItem">
          <InfoIcon>
            <Icon icon={phone} size={33} />
          </InfoIcon>
          <h4>
            <FormattedMessage id="phoneTitle" />
          </h4>
          <p>
            <FormattedMessage id="phoneNumbers" />
          </p>
        </InfoItem>
        <InfoItem className="infoItem">
          <InfoIcon>
            <Icon icon={home} size={33} />
          </InfoIcon>
          <h4>
            <FormattedMessage id="websiteTitle" />
          </h4>
          <p>
            <FormattedMessage id="Websites" />
          </p>
        </InfoItem>
      </Info>
    </ContactSection>
  );
};

export default RightSection;
