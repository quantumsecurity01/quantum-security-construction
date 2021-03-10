import styled from 'styled-components';

const PageWrapper = styled.section`
  div[lang='ar'],
  div[lang='he'] {
    > section > div > header {
      right: auto;
      left: 20px;
      .dot {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const MainWrapper = styled.section`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  font-family: 'DM Sans';
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

export const LeftSection = styled.div`
  background-color: #f6f9fb;
  display: grid;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    display: flex;
    min-height: 70vh;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 768px) {
    min-height: 85vh;
  }
  @media only screen and (max-width: 480px) {
    min-height: 85vh;
  }
`;

export const Logo = styled.div`
  text-align: center;
  @media only screen and (max-width: 1600px) {
    padding-top: 30px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1366px) {
    padding-top: 0;
  }
  img {
    margin: 0;
  }
`;

export const LeftContent = styled.div`
  max-width: 520px;
  margin: 0 auto;
  @media only screen and (max-width: 1366px) {
    margin-bottom: 30px;
    margin-top: 60px;
  }
  @media only screen and (max-width: 1280px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 30px;
  }
  .slogan {
    font-size: 18px;
    font-weight: 700;
    line-height: 33px;
    position: relative;
    margin: 0 0 15px 0;
    margin-left: 70px;
    @media only screen and (max-width: 1024px) {
      text-align: center;
    }
    span {
      position: relative;
      &::before {
        content: '';
        display: block;
        border-top: 2px solid #000;
        width: 48px;
        position: absolute;
        left: -70px;
        bottom: 9px;
      }
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 48px;
    line-height: 1.35;
    text-align: left;
    max-width: 520px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 30px;
    margin-top: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 36px;
      max-width: 570px;
      margin-bottom: 25px;
    }
    /* @media only screen and (max-width: 1366px) {
      font-size: 28px;
      max-width: 420px;
    } */
    @media only screen and (max-width: 1366px) {
      font-size: 26px;
      line-height: 1.7;
    }
    @media only screen and (max-width: 1024px) {
      text-align: center;
      font-size: 36px;
      max-width: none;
      line-height: 1.5;
    }
    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 20px;
      max-width: 100%;
    }
  }
`;

export const NotifyButton = styled.div`
  padding-top: 50px;
  @media only screen and (max-width: 1440px) {
    padding-top: 15px;
  }
  @media only screen and (max-width: 1024px) {
    text-align: center;
    margin-top: 30px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 0px;
  }
  button {
    font-size: 18px;
    font-weight: 700;
    line-height: 33px;
    position: relative;
    background: transparent;
    transition: all 0.2s ease-in-out;
    position: relative;
    padding-left: 0;
    padding-right: 0;
    color: #000;
    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      width: 0px;
      height: 2px;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.75s;
      opacity: 0;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      width: 0px;
      height: 2px;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.75s;
      opacity: 0;
      left: 0;
      background-color: #000;
    }
    &:hover {
      &::before {
        width: 100%;
        opacity: 1;
      }
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
    span.btn-text {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const ContactFormWrap = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 15px;
    z-index: 2;
    @media only screen and (max-width: 1440px) {
      margin-top: 15px;
      flex-direction: column;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 310px;
      margin: 50px auto 0;
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }

    @media only screen and (max-width: 575px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;
      button {
        width: 100%;
      }
    }
    .field-wrapper {
      width: 100%;
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
      input {
        background-color: transparent;
        border: 2px solid #000;
        height: 48px;
        border-radius: 5px;
        width: 420px;
        @media only screen and (max-width: 1440px) {
          width: 310px;
        }
        @media only screen and (max-width: 600px) {
          width: 100%;
        }
        &::placeholder {
          font-size: 15px;
          font-family: 'Roboto';
          color: #000;
        }
        &:focus {
          outline: none;
          color: #000;
        }
      }
    }
    button {
      font-size: 18px;
      font-family: 'DM Sans';
      color: #000;
      font-weight: 700;
      line-height: 33px;
      position: relative;
      background: transparent;
      transition: all 0.2s ease-in-out;
      position: relative;
      padding-left: 0;
      padding-right: 0;
      justify-content: flex-start;
      width: fit-content;
      min-width: 95px;
      height: 51px;
      padding-left: 0;
      padding-right: 0;
      margin-left: 0;
      margin-right: 0;
      margin-top: 15px;
      margin-bottom: 0;
      @media only screen and (max-width: 1099px) {
        min-width: 100%;
        justify-content: center;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.75s;
        opacity: 0;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.75s;
        opacity: 1;
        left: 0;
        background-color: #000;
      }
      span.btn-text {
        padding-left: 0;
        padding-right: 0;
      }
      &:hover {
        box-shadow: none;
        background: transparent;
      }
    }
  }
  .feedback {
    left: 0%;
    bottom: -120px;
  }
`;

export const FooterSection = styled.div`
  position: relative;
  @media only screen and (max-width: 1600px) {
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 20px 20px 20px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: #e5e5e5;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s ease;

      a {
        color: #000;
        font-size: 17px;
      }
      &:hover {
        background-color: #000;
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 2.06;
    margin-top: 15px;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  background-color: #fff;
  max-height: 100vh;
  position: relative;

  .Navigation {
    display: none !important;
  }

  > header {
    right: 20px;
    transform: translateY(-50%);
    top: 50% !important;
    width: initial !important;
    position: absolute !important;
    nav {
      display: inline-flex;
      flex-direction: column;
    }
    a {
      color: #000;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: -4px 0;
      span {
        display: block;
      }
    }
    .label {
      background-color: #f4f4f4;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-flex;
      min-height: 35px;
      align-items: center;
      padding: 0 20px;
      border-radius: 20px;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease 0s;
    }
    .dot {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      height: 12px;
      margin-left: 10px;
      width: 12px;
      transition: 0.3s ease 0s;
    }
    a:hover .label {
      opacity: 1;
      visibility: visible;
    }
    .active .dot {
      background-color: rgba(0, 0, 0, 0.4);
    }
    /* .nav-primary {
      .label {
        background-color: #457eff;
        color: #fff;
      }
      .dot {
        background-color: #dae3e9;
      }
      .active .dot {
        background-color: #98a1a8;
      }
    }
    .nav-light {
      .label {
        background-color: #fff;
        color: #000;
      }
      .dot {
        background-color: rgba(255, 255, 255, 0.25);
      }
      .active .dot {
        background-color: #fff;
      }
    } */
  }
`;

export default PageWrapper;
