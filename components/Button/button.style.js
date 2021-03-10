import styled from 'styled-components';

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #028489;
  min-height: 48px;
  min-width: 48px;
  border-radius: 3px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border: 0;
  transition: all 0.3s ease;
  span.btn-text {
    padding-left: 4px;
    padding-right: 4px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
