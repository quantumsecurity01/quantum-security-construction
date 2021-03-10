import styled from 'styled-components';

const MainWrapper = styled.section`
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .bottomAnimation {
    margin-top: auto;
  }
  .mainContainer {
    padding-bottom: 120px;
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
  }
`;
export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  @media (max-width: 1440px) {
    padding-top: 32px;
  }
  img {
    margin-bottom: 0;
  }
`;

export const BottomShape = styled.section`
  bottom: 0;
  overflow: hidden;
  @media (max-width: 1199px) {
    display: none;
  }
  img {
    &:nth-child(1) {
      position: absolute;
      left: 0%;
      bottom: -30px;
    }
    &:nth-child(2) {
      position: absolute;
      right: 0%;
      bottom: -30px;
    }
  }
`;
export const CloudImages = styled.section`
  @media (max-width: 1199px) {
    display: none;
  }
  img {
    &:nth-child(1) {
      position: absolute;
      left: -20%;
      right: 0;
      top: 75px;
      @media (max-width: 1620px) {
        left: -6%;
      }
    }
    &:nth-child(2) {
      position: absolute;
      right: -20%;
      top: 28%;
      @media (max-width: 1620px) {
        right: -6%;
      }
    }
    &:nth-child(3) {
      position: absolute;
      right: 10%;
      top: -6%;
    }
  }
`;

export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 1440px) {
    margin-bottom: 35x;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
    width: 100%;
  }
  .NormalClock {
    width: 600px;
    @media (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: #fafbff;
      @media (max-width: 600px) {
        width: 100px;
        height: auto;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      .NormalupperCard {
        span {
          font-size: 50px;
          font-family: 'Comfortaa';
          color: rgb(17, 35, 53);
          font-weight: bold;
          line-height: 1;
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
          font-size: 65px;
          font-family: 'Comfortaa';
          color: rgb(17, 35, 53);
          font-weight: bold;
          line-height: 1;
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
          font-size: 50px;
          font-family: 'Comfortaa';
          color: rgb(17, 35, 53);
          font-weight: bold;
          line-height: 1;
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
  padding: 100px 0 70px 0;
  @media (max-width: 1099px) {
    height: 100%;
    min-height: calc(100vh - 360px);
    margin-top: 0;
  }
  @media (max-width: 600px) {
    padding: 60px 0;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 48px;
    font-family: 'Playfair Display', serif;
    color: rgb(17, 35, 53);
    line-height: 1.3;
    text-align: center;
    max-width: 650px;
    font-weight: 500;
    letter-spacing: -0.5px;
    margin-bottom: 25px;
    @media (max-width: 1440px) {
      font-size: 36px;
      max-width: 570px;
      margin-bottom: 25px;
    }
    @media (max-width: 1024px) {
      max-width: 460px;
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
    font-size: 17px;
    font-family: 'Roboto';
    color: rgba(17, 35, 53, 0.6);
    line-height: 1.941;
    text-align: center;
    max-width: 420px;
    margin-bottom: 15px;
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

export const ContactForm = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 0px;
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
    padding: 13px 33px 15px 34px;
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
  margin-top: 40px;
  @media (max-width: 1440px) {
    margin-top: 40px;
  }
  @media (max-width: 1099px) {
    position: relative;
    bottom: 0;
  }
  @media (max-width: 600px) {
    margin-top: 0px;
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
      z-index: 1;
      a {
        color: rgb(17, 35, 53);
        font-size: 17px;
      }
      &:hover {
        background-color: rgba(47, 128, 237, 1);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    font-family: 'Roboto';
    color: rgb(142, 147, 154);
    line-height: 2.357;
    text-align: center;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
  }
`;
export const BottomIllustration = styled.section`
  bottom: 0;
  overflow: hidden;
  position: absolute;
  @media (max-width: 1099px) and (min-width: 767px) {
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }
`;
export default MainWrapper;
