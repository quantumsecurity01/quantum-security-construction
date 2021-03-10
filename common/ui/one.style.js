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
export const GradientDiv = styled.section`
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  opacity: 0.16;
  left: -100px;
  top: -100px;
  background: radial-gradient(circle closest-side, #6d8cf3, #03103b);
  @media (max-width: 1440px) {
    width: 450px;
    height: 450px;
  }
`;
const MainWrapper = styled.section`
  background: #03103b;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .mainContainer {
    @media (min-width: 600px) {
      width: 600px;
      max-width: 100%;
    }
  }
`;

export const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  padding: 60px 0;
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  form {
    margin-bottom: 0;
  }
  .Ticker {
    border-style: solid;
    border-width: 1px;
    border-color: #161b58;
    background-color: #161b58;
    color: rgba(255, 255, 255, 0.902);
    box-shadow: 0px 5px 15px 0px rgba(22, 53, 76, 0.05);
    padding: 10px 16px;
    border-radius: 28px;
    margin-bottom: 10px;
    font-size: 14px;
    @media (max-width: 1440px) {
      font-size: 12px;
      padding: 5px 14px;
    }
  }
  h2 {
    font-size: 48px;
    font-family: 'Roboto';
    color: #fff;
    line-height: 1.25;
    text-align: center;
    max-width: 550px;
    font-weight: 300;
    letter-spacing: -0.25px;
    margin-bottom: 20px;

    @media (max-width: 1440px) {
      font-size: 36px;
      max-width: 550px;
      margin-bottom: 20px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      max-width: 100%;
    }
  }
  p {
    font-size: 16px;
    font-family: 'Roboto';
    color: rgba(142, 199, 255, 0.6);
    line-height: 1.8;
    text-align: center;
    max-width: 420px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;
export const ParticleWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 70px;
  margin-top: 20px;

  @media (max-width: 1440px) {
    margin-bottom: 70px;
    margin-top: 15px;
  }
  @media (max-width: 600px) {
    margin-bottom: 30px;
    margin-top: 25px;
    width: 100%;
  }
  .NormalClock {
    @media (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: #101c45;
      width: 140px;
      height: 100px;
      z-index: 100;
      @media (max-width: 1440px) {
        width: 80px;
        height: 70px;
      }
      @media (max-width: 600px) {
        width: 60px;
        height: 60px;
      }
      .NormalupperCard {
        align-items: center;
        span {
          font-size: 55px;
          font-family: 'Roboto';
          color: rgb(255, 255, 255);
          font-weight: 300;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 55px;
          font-family: 'Roboto';
          color: rgb(255, 255, 255);
          font-weight: 300;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
          }
          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 55px;
          font-family: 'Roboto';
          color: rgb(255, 255, 255);
          font-weight: 300;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1440px) {
            font-size: 36px;
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
        color: rgba(142, 199, 255, 0.502);
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;
        @media (max-width: 1440px) {
          margin-top: 10px;
          letter-spacing: 1px;
        }
        @media (max-width: 600px) {
          letter-spacing: 1px;
          font-size: 10px;
        }
        @media (max-width: 420px) {
          font-size: 10px;
        }
      }
    }
    .dividerColon {
      font-size: 40px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      margin-right: 15px;
      @media (max-width: 1440px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media (max-width: 600px) {
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
`;

export const ContactForm = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 30px;
  z-index: 2;
  @media (max-width: 1440px) {
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
  .field-wrapper {
    @media (max-width: 600px) {
      width: 100%;
    }
    > div {
      .form-field__control {
        background: transparent;
        label {
          font-size: 16px;
          font-family: 'Roboto';
          color: rgb(142, 199, 255);
          letter-spacing: -0.15px;
          padding: 12px 0px 0;
          pointer-events: none;
          font-weight: 300;
        }
        input {
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          height: 48px;
          width: 316px;
          margin-top: 0;
          color: rgba(142, 199, 255, 0.6);
          @media (max-width: 600px) {
            width: 100%;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  button {
    margin-left: 20px;
    border-radius: 3px;
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
    padding: 13px 33px 15px 34px;
    height: 48px;
    transition: all 0.35s ease;
    &:hover {
      box-shadow: rgba(82, 104, 219, 0.57) 0px 12px 24px -10px;
    }
    .btn-text {
      padding: 0;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 15px;
      display: block;
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
      background-color: rgba(239, 245, 249, 0.102);
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      @media (max-width: 1440px) {
        width: 36px;
        height: 36px;
      }
      a {
        color: #fff;
        font-size: 16px;
        transition: all 0.5s ease;
      }
      &:hover {
        background-color: rgba(239, 245, 249, 0.251);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 25px;
    font-size: 16px;
    font-family: 'Roboto';
    color: rgba(142, 199, 255, 0.6);
    line-height: 1.5;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      font-size: 14px;
      margin-top: 15px;
    }
  }
`;

export default MainWrapper;
