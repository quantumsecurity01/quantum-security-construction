import styled from 'styled-components';

export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  @media (max-width: 1600px) {
    padding-top: 30px;
  }
  img {
    margin: 0;
  }
`;
const MainWrapper = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CornerImages = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  img {
    margin-bottom: 0;
    &:nth-child(1) {
      position: absolute;
      left: 0%;
      top: 0px;
    }
    &:nth-child(2) {
      position: absolute;
      top: 0%;
      right: 0px;
    }
    &:nth-child(3) {
      position: absolute;
      bottom: 0%;
      left: 0px;
    }
    &:nth-child(4) {
      position: absolute;
      bottom: 0%;
      right: 0px;
    }
  }
`;
export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 1440px) {
    margin-bottom: 35px;
  }
  @media (max-width: 767px) {
    margin-bottom: 25px;
    width: 100%;
  }
  .NormalClock {
    width: 600px;
    @media (max-width: 600px) {
      width: 100%;
      height: 100%;
    }
    .NormalUnitContainer {
      background: transparent;
      @media (max-width: 600px) {
        width: 100px;
        height: auto;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: 'Roboto';
          color: rgb(17, 35, 53);
          font-weight: 400;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 60px;
          font-family: 'Roboto';
          color: rgb(17, 35, 53);
          font-weight: 400;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 60px;
          font-family: 'Roboto';
          color: rgb(17, 35, 53);
          font-weight: 400;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .digitLabel {
        font-size: 14px;
        font-family: 'Roboto';
        color: rgb(136, 155, 183);
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;
        @media (max-width: 1440px) {
          margin-top: 5px;
        }
        @media (max-width: 600px) {
          letter-spacing: 1px;
        }
        @media (max-width: 420px) {
          font-size: 12px;
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
  padding: 60px 0;
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 40px;
    font-family: 'Roboto';
    color: rgb(17, 35, 53);
    line-height: 1.25;
    text-align: center;
    max-width: 600px;
    font-weight: 400;
    letter-spacing: -0.25px;
    margin-bottom: 30px;
    @media (max-width: 1440px) {
      font-size: 36px;
      max-width: 550px;
      margin-bottom: 25px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
      margin-bottom: 15px;
      max-width: 450px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      max-width: 100%;
    }
  }
  p {
    font-size: 17px;
    font-family: 'Roboto';
    color: rgba(17, 35, 53, 0.6);
    line-height: 1.941;
    text-align: center;
    max-width: 420px;
    @media (max-width: 1440px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
      max-width: 100%;
    }
  }
`;

export const ContactFormWrap = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 5px;
  z-index: 2;
  @media (max-width: 1440px) {
    margin-top: 0px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
    }
  }
  form {
    margin-bottom: 0;
  }
  .field-wrapper {
    @media (max-width: 600px) {
      width: 100%;
    }
    input {
      background-color: rgb(239, 245, 249);
      border: transparent;
      height: 48px;
      border-radius: 28px;
      padding-left: 30px;
      width: 316px;
      @media (max-width: 600px) {
        width: 100%;
      }
      &::placeholder {
        font-size: 15px;
        font-family: 'Roboto';
        color: rgb(142, 147, 154);
      }
      &:focus {
        outline: none;
      }
    }
  }
  button {
    margin-left: 20px;
    border-radius: 28px;
    background-image: -moz-linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    background-image: -webkit-linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    background-image: -ms-linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );

    height: 48px;
    transition: all 0.5s ease;
    &:hover {
      box-shadow: rgba(47, 128, 237, 0.57) 0px 12px 24px -10px;
    }
    .btn-text {
      padding: 0;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`;
export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 40px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: rgb(239, 245, 249);
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      a {
        color: rgb(17, 35, 53);
        font-size: 17px;
      }
      &:hover {
        background-color: rgba(47, 128, 237, 0.8);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: 14px;
    font-family: 'Roboto';
    color: rgb(142, 147, 154);
    line-height: 2.357;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
  }
`;

export const FullWrapper = styled.div`
  position: relative;
  background: #fff;
`;

export default MainWrapper;
