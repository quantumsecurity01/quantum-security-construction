import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'react-icons-kit';
import { location } from 'react-icons-kit/icomoon/location';
import { ic_alarm } from 'react-icons-kit/md/ic_alarm';
import { ic_person } from 'react-icons-kit/md/ic_person';

import { AboutSection, Heading, Info, InfoItem, InfoIcon } from './about.style';

const About = () => {
  return (
    <AboutSection>
      <Heading>
        <h2>
          <FormattedMessage id="aboutTitle" />
        </h2>
        <p>
          <FormattedMessage id="aboutText" />
        </p>
      </Heading>

      <Info className="aboutInfo">
        <h2>
          <FormattedMessage id="serviceTitle" />
        </h2>
        <InfoItem>
          <InfoIcon className="withBg">
            <Icon icon={location} size={33} />
          </InfoIcon>
          <h4>
            <FormattedMessage id="serviceTitle1" />
          </h4>
          <p>
            <FormattedMessage id="serviceDesc1" />
          </p>
        </InfoItem>
        <InfoItem>
          <InfoIcon className="withBg">
            <Icon icon={ic_alarm} size={33} />
          </InfoIcon>
          <h4>
            <FormattedMessage id="serviceTitle2" />
          </h4>
          <p>
            <FormattedMessage id="serviceDesc2" />
          </p>
        </InfoItem>
        <InfoItem>
          <InfoIcon className="withBg">
            <Icon icon={ic_person} size={33} />
          </InfoIcon>
          <h4>
            <FormattedMessage id="serviceTitle3" />
          </h4>
          <p>
            <FormattedMessage id="serviceDesc3" />
          </p>
        </InfoItem>
      </Info>
    </AboutSection>
  );
};

export default About;
