import React from 'react';
import Icon from 'react-icons-kit';
import styled from 'styled-components';

import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';

export function SocialShare({ items = [], className, iconSize = 22 }) {
  return (
    <Wrapper className={`social_profiles ${className ? className : ''}`.trim()}>
      {items.map(item => (
        <Item key={`social-item-${item.id}`} className="social_profile_item">
          <a href={item.url || '#'}>
            <Icon icon={item.icon || socialDribbbleOutline} size={iconSize} />
          </a>
        </Item>
      ))}
    </Wrapper>
  );
}

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
