import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const ModalStyle = createGlobalStyle`
  .newsletter-modal{
    background: transparent !important;
    border: 0 !important;
    padding: 0 !important;
    .innerRndComponent{
      overflow: auto;
    }
  }
`;

export const SubscribeWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 60px;
  text-align: center;
  position: relative;
  @media (max-width: 1400px) {
    padding: 60px 40px;
    margin-top: 40px;
  }
  @media (max-width: 767px) {
    margin-top: 0;
    padding: 80px 30px;
  }
  @media (max-width: 340px) {
    margin-top: 0;
    padding: 80px 15px;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.05em;
    margin-bottom: 15px;
    color: #040718;
    font-family: 'DM Sans', sans-serif;
    @media (max-width: 1400px) {
      font-size: 32px;
      margin-bottom: 5px;
    }
    @media (max-width: 767px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 17px;
    font-weight: 500;
    line-height: 2.11;
    letter-spacing: -0.05em;
    margin-bottom: 20px;
    color: #39424a;
    font-family: 'DM Sans', sans-serif;
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    @media (max-width: 1400px) {
      font-size: 16px;
    }
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
`;

export const SubscribeImage = styled.div`
  margin-bottom: 30px;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
  @media (max-width: 1400px) {
    width: 60px;
    margin: 0 auto 15px auto;
  }
  @media (max-width: 767px) {
    width: 50px;
  }
`;

export const Close = styled.button`
  display: block;
  border: 0;
  background: transparent;
  position: absolute;
  top: 30px;
  right: 30px;
  color: #040718;
  cursor: pointer;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    opacity: 0.65;
  }
`;

export const NewsletterForm = styled.div`
  button {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    @media (max-width: 767px) {
      margin-top: 15px;
    }
  }
  form {
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 25px;
    }
  }
  input {
    width: 100%;
    box-sizing: border-box;
  }
`;
