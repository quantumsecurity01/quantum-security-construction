import React from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin: 0 9px;
  a {
    color: #fff;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #3444f1;
    }
  }
`;

export const SocialShare = ({ items = [], className, iconSize = 22 }) => {
  if (!items) return null;
  return (
    <Wrapper className={`social_profiles ${className ? className : ''}`.trim()}>
      {items.map(item => (
        <Item key={`social-item-${item.id}`} className="social_profile_item">
          <Link href={item.url || '#'}>
            <a>
              <Icon icon={item.icon || socialDribbbleOutline} size={iconSize} />
            </a>
          </Link>
        </Item>
      ))}
    </Wrapper>
  );
};

// export default SocialShare;
