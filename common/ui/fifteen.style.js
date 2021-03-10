import styled from 'styled-components';

export const MainWrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #01043e;
  height: 100vh;
`;
export const FullWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #01043e;
  @media (max-width: 1024px) {
    min-height: 70vh;
  }
  @media (max-width: 360px) {
    min-height: 103vh;
  }
`;
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
  background-color: #01043e;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  order: 2;
  @media (max-width: 1099px) {
    width: 100%;
  }
  .mainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 600px) {
      width: 85%;
    }
  }
`;
export const ImageSection = styled.section`
  position: relative;
  width: 50%;
  order: 1;
  background-color: #01043e;
  @media (max-width: 1099px) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    position: relative;
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 0;
  }
`;

export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  @media (max-width: 1600px) {
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  .NormalClock {
    width: 600px;
    @media (max-width: 1600px) {
      width: 500px;
    }
    @media (max-width: 1440px) {
      width: 450px;
    }
    @media (max-width: 600px) {
      width: 100%;
      height: auto;
    }
    .NormalUnitContainer {
      background: transparent;
      @media (max-width: 600px) {
        width: 100px;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: 'Comfortaa';
          color: rgb(250, 251, 255);
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
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
          font-family: 'Comfortaa';
          color: rgb(250, 251, 255);
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
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
          font-family: 'Comfortaa';
          color: rgb(250, 251, 255);
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
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
        color: rgba(250, 251, 255, 0.502);
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;
        @media (max-width: 1600px) {
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
  width: 100%;
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 48px;
    font-family: 'Frank Ruhl Libre';
    color: rgb(255, 255, 255);
    line-height: 1.5;
    text-align: center;
    max-width: 750px;
    font-weight: 500;
    letter-spacing: -0.25px;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
      font-size: 36px;
      line-height: 48px;
      max-width: 570px;
      margin-bottom: 15px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 30px;
      max-width: 100%;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Lato';
    color: rgba(250, 251, 255, 0.6);
    line-height: 1.941;
    text-align: center;
    max-width: 480px;
    margin-bottom: 10px;
    @media (max-width: 1600px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 22px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 20px;
      max-width: 100%;
      margin-bottom: 0;
    }
  }
`;
export const ContactForm = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 5px;
  z-index: 2;

  @media (max-width: 1440px) {
    margin-top: 10px;
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
  form {
    margin-bottom: 10px;
  }
  > div {
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .field-wrapper {
    @media (max-width: 600px) {
      width: 100%;
    }
    input {
      background-color: rgba(255, 255, 255, 0.078);
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
        color: rgba(255, 255, 255, 0.8);
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
    }
  }
`;

export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 40px;
  background-color: #01043e;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: rgb(21, 24, 77);
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
        color: rgb(250, 251, 255);
        font-size: 17px;
        font-weight: 700;
        @media (max-width: 1440px) {
          font-size: 14px;
        }
      }
      &:hover {
        background-color: rgb(49, 132, 237);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    font-family: 'Roboto';
    color: rgba(250, 251, 255, 0.502);
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
    @media (max-width: 1600px) {
      margin-top: 15px;
      font-size: 14px;
    }
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
    @media (max-width: 600px) {
      margin-top: 15px;
    }
  }
`;
export default MainWrapper;
