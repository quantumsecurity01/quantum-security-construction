import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';

const ring = keyframes`
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }
  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;

const goRight = keyframes`
   0%, 20%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(6px);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    div[lang="ar"],
    div[lang="he"] {
      .background-img::before {
        transform: rotate(180deg);
      }
      .mainContainer {
        margin: 0 100px 0 0;
        @media only screen and (max-width: 1440px) {
          margin: 0 0 0 0;
        }
        @media only screen and (max-width: 1366px) {
          margin: 0 100px 0 0;
        }
        @media only screen and (max-width: 1024px) {
          margin: auto;
        }
      }
    }
  }
`;

export const PageWrapper = styled.div`
  display: block;
  .background-img {
    background-color: #010522;
    &::before {
      background-position: center !important;
      background-size: cover !important;
    }
  }
`;

export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  @media (max-width: 1600px) {
    padding-top: 32px;
  }
  @media (max-width: 1024px) {
    padding-top: 40px;
  }
  a {
    display: block;
  }
  img {
    margin-bottom: 0;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  max-width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
`;

export const MainContentWrapper = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  flex-grow: 1;

  .mainContainer {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    max-width: 900px;
    margin: 0 0 0 100px;
    width: initial;
    @media only screen and (max-width: 1366px) {
      max-width: 650px;
    }
    @media only screen and (max-width: 1280px) {
      margin-left: 60px;
    }
    @media only screen and (max-width: 1024px) {
      margin-left: auto;
      max-width: none;
    }
  }
`;
export const NormalClockWrapper = styled.div`
  position: relative;
  margin: 47px 0 0;
  @media (max-width: 1600px) {
    margin: 50px 0 0;
  }
  @media (max-width: 1300px) {
    margin: 40px 0 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 35px 0 0;
  }
  .NormalClock {
    width: 820px;
    max-width: 100%;
    @media (max-width: 1600px) {
      width: 700px;
    }
    @media (max-width: 1440px) {
      width: 600px;
    }
    @media (max-width: 1300px) {
      width: 600px;
    }
    @media (max-width: 1200px) {
      width: 550px;
    }
    @media (max-width: 767px) {
      margin: 0 auto;
      width: 90%;
    }
    .dividerColon {
      font-size: 60px;
      font-family: 'Montserrat', sans-serif;
      color: #fff;
      font-weight: 700;
      align-self: flex-start;
      line-height: 1.3;
      @media (max-width: 1600px) {
        font-size: 52px;
      }
      @media (max-width: 1400px) {
        font-size: 46px;
      }
      @media (max-width: 767px) {
        font-size: 26px;
        line-height: 1;
      }
    }
    .NormalUnitContainer {
      height: auto;
      min-width: 120px;
      width: auto;
      text-align: center;
      background: transparent;
      @media (max-width: 767px) {
        width: 100px;
        min-width: auto;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      @media (max-width: 330px) {
        width: 70px;
      }
      .NormalupperCard {
        width: auto;
        height: auto;
        span {
          font-size: 72px;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1400px) {
            font-size: 60px;
          }
          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 85px;
          font-family: 'Montserrat', sans-serif;
          color: #141a3c;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1400px) {
            font-size: 60px;
          }
          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 85px;
          font-family: 'Montserrat', sans-serif;
          color: #141a3c;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1400px) {
            font-size: 60px;
          }
          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .digitLabel {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: ${rgba('#fff', 0.65)};
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;
        @media (max-width: 1600px) {
          font-size: 16px;
          margin-top: 15px;
        }
        @media (max-width: 767px) {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
`;
export const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 1366px) {
    margin-top: 40px;
  }
  @media (min-width: 1200px) and (max-width: 1366px) {
    min-height: 100vh;
  }
  h2 {
    font-size: 42px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    line-height: 1.67;
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.25px;
    margin-bottom: 20px;
    max-width: 500px;
    @media (max-width: 1600px) {
      font-size: 42px;
      max-width: 570px;
      margin-bottom: 15px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
      font-size: 30px;
    }
  }
  p {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    color: ${rgba('#fff', 0.7)};
    line-height: 2.22;
    text-align: center;
    max-width: 460px;
    margin: 55px 0 0;
    @media (max-width: 1600px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
      max-width: 93%;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.9;
    }
  }
`;

export const FooterSection = styled.footer`
  position: relative;
  padding-bottom: 30px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }
  @media (max-width: 1366px) {
    margin-top: 50px;
  }
  .social_profiles {
    justify-content: center;
    .social_profile_item {
      margin: 0 5px;
      a {
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.15);
        width: 46px;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 16px;
        transition: 0.15s ease-in-out;
        &:hover {
          color: #702e72;
          background: #fff;
        }
        @media (max-width: 767px) {
          width: 40px;
          height: 40px;
          font-size: 14px;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    line-height: 2;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
    @media (max-width: 767px) {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 70px;
  @media (max-width: 1600px) {
    margin-top: 60px;
  }
  @media (max-width: 1300px) {
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  button {
    border-radius: 4em;
    min-width: 160px;
    height: 46px;
    padding: 0 6px;
    justify-content: space-between;
    border: 0;
    min-height: auto;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    background: #fff;
    margin: 0 15px;
    position: relative;
    transition: 0.15s ease-in-out;
    @media (max-width: 767px) {
      margin: 0 8px;
      min-width: auto;
      height: 42px;
      font-size: 13px;
    }
    @media (max-width: 350px) {
      margin: 0 3px;
      font-size: 11px;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(to right, #44a8f0 0%, #2f80ed 100%);
      opacity: 0;
      transition: 0.15s ease-in-out;
    }
    .btn-text {
      flex-grow: 1;
      padding: 10px;
      position: relative;
    }
    .btn-icon {
      position: relative;
      width: 35px;
      height: 35px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(17, 17, 17, 0.1);
      transition: background 0.15s ease-in-out;
      @media (max-width: 767px) {
        width: 33px;
        height: 33px;
      }
    }
    &:hover,
    &.notify {
      color: #fff;
      &::before {
        opacity: 1;
      }
      .btn-icon {
        background: rgba(255, 255, 255, 0.1);
      }
    }
    &.notify {
      &:hover {
        .btn-icon {
          i {
            animation: ${ring} 4s 0.05s ease-in-out infinite;
          }
        }
      }
    }
    &.info {
      &:hover {
        .btn-icon {
          i {
            animation: ${goRight} 2s ease-in-out infinite;
          }
        }
      }
    }
  }
`;

export const SideBar = styled.div`
  width: 0;
  flex: 0;
  transition: 0.4s cubic-bezier(0.36, 0.55, 0.51, 0.89);
  position: relative;
  transition-delay: 0.42s;
  align-self: flex-start;
  height: 100vh;
  background-color: #010522;
  margin-right: -25px;
  overflow: hidden;
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    min-height: 100vh;
    height: fit-content;
  }

  &.expand {
    width: 750px;
    flex: 0 0 750px;
    transition-delay: 0s;
    margin-right: 0;
    @media only screen and (max-width: 1600px) {
      width: 550px;
      flex: 0 0 550px;
    }
    @media only screen and (max-width: 1366px) {
      height: 100%;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      flex: 0 0 100%;
      height: 100%;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(60deg, #56ccf2 0%, #2f80ed 100%);
  z-index: 9;
  transition: 0.4s ease-in-out;
  &.expand {
    transform: translateX(-100%);
    transition-delay: 0.4s;
  }
`;

export const SidebarContent = styled.div`
  position: relative;
  padding: 90px 120px 90px 90px;
  height: 100%;
  overflow-x: hidden;
  margin-right: -30px;
  @media (max-width: 1600px) {
    padding: 70px 70px 70px 40px;
  }
  @media (max-width: 1024px) {
    padding: 60px 75px 60px 45px;
  }
  @media (max-width: 600px) {
    padding: 50px 65px 50px 35px;
  }
`;

export const About = styled.div`
  text-align: center;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    margin-bottom: 70px;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.05em;
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 600px) {
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${rgba('#fff', 0.7)};
    line-height: 2;
    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;

export const Contact = styled.div`
  margin-bottom: 120px;
  @media (max-width: 600px) {
    margin-bottom: 70px;
  }
  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.05em;
    margin-bottom: 35px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 600px) {
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
  .field-wrapper {
    .form-field--is-active label {
      color: #fff;
    }
    .form-field__input {
      color: #fff;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: #fff;
        box-shadow: transparent 0px 0px 0px 0px inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoItem = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  text-align: center;
  padding: 0 15px;
  @media (max-width: 600px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  h4 {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 15px;
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: ${rgba('#fff', 0.7)};
    line-height: 1.6;
    margin-bottom: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export const InfoIcon = styled.div`
  color: #bfbcc7;
  margin-bottom: 25px;
`;

export const SidebarClose = styled.button`
  display: block;
  border: 0;
  background: transparent;
  position: absolute;
  top: 35px;
  right: 35px;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    opacity: 0.65;
  }
  @media (max-width: 600px) {
    top: 25px;
    right: 35px;
  }
`;

export default GlobalStyle;
