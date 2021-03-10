import styled from 'styled-components';

const MainWrapper = styled.section`
  background: #fafbff;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  .bottomAnimation {
    margin-top: auto;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  @media (max-width: 600px) {
    justify-content: space-around;
  }
  .mainContainer {
    display: flex;
    width: 100%;
    height: 80vh;
    position: relative;
    z-index: 1;
    @media (max-width: 1099px) {
      flex-direction: column;
    }
    @media (max-width: 1024px) {
      height: auto;
    }
    @media (max-width: 600px) {
      height: 100%;
      width: 85%;
    }
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

export const ImageContainer = styled.section`
  width: 55%;
  padding-top: 220px;

  @media (max-width: 1199px) {
    width: 50%;
    padding-top: 120px;
  }
  @media (max-width: 1099px) {
    width: 60%;
    padding-top: 0;
    margin: 60px auto 0 auto;
  }
  @media (max-width: 600px) {
    padding-top: 0px;
    width: 80%;
    margin-top: 40px;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
  }
`;
export const BottomShape = styled.section`
  bottom: 0;
  overflow: hidden;
  @media (max-width: 1440px) {
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
      left: 10%;
      right: 0;
      top: 120px;
      @media (max-width: 1620px) {
        left: -6%;
      }
      @media (max-width: 1440px) {
        left: 10%;
      }
    }
    &:nth-child(2) {
      position: absolute;
      right: 3%;
      top: 28%;
      @media (max-width: 1620px) {
        right: -6%;
      }
      @media (max-width: 1440px) {
        top: 15%;
        right: 3%;
      }
    }
    &:nth-child(3) {
      position: absolute;
      right: 40%;
      top: 16%;
    }
  }
`;

export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 70px;

  @media (max-width: 1440px) {
    margin-bottom: 70px;
  }
  @media (max-width: 600px) {
    margin-bottom: 70px;
    width: 100%;
  }
  .NormalClock {
    width: 600px;
    @media (max-width: 1199px) {
      width: 500px;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: #fafbff;
      @media (max-width: 600px) {
        width: 100px;
        height: 50px;
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
  margin-top: 120px;
  width: 45%;
  margin-right: 100px;
  @media (max-width: 1440px) {
    margin-top: 70px;
  }
  @media (max-width: 1199px) {
    width: 50%;
    height: 100%;
    margin-top: 0;
  }
  @media (max-width: 1099px) {
    width: 100%;
    margin-right: 0;
    margin-top: 0px;
  }
  @media (max-width: 600px) {
    margin-top: 0px;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 40px;
    font-family: 'Roboto', serif;
    color: rgb(17, 35, 53);
    line-height: 56px;
    text-align: center;
    max-width: 700px;
    font-weight: 400;
    letter-spacing: -0.25px;
    margin-bottom: 60px;
    margin-top: 60px;
    @media (max-width: 1440px) {
      font-size: 36px;
      line-height: 48px;
      max-width: 570px;
      margin-bottom: 45px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 30px;
      max-width: 100%;
      margin-top: 60px;
      margin-bottom: 30px;
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
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
  form {
    margin: 0;
  }
  .field-wrapper {
    @media (max-width: 600px) {
      width: 100%;
    }
    input {
      background-color: rgb(239, 245, 249);
      border: transparent;
      height: 48px;
      border-radius: 3px;
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
    border-radius: 3px;
    background-image: -moz-linear-gradient(
      -31deg,
      rgb(250, 171, 75) 0%,
      rgb(246, 139, 59) 100%
    );
    background-image: -webkit-linear-gradient(
      -31deg,
      rgb(250, 171, 75) 0%,
      rgb(246, 139, 59) 100%
    );
    background-image: -ms-linear-gradient(
      -31deg,
      rgb(250, 171, 75) 0%,
      rgb(246, 139, 59) 100%
    );
    padding: 13px 33px 15px 34px;
    height: 48px;
    transition: all 0.5s ease;
    min-width: max-content;
    &:hover {
      box-shadow: rgba(246, 139, 59, 0.57) 0px 12px 24px -10px;
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
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }
  @media (max-width: 1440px) {
    margin-top: 80px;
    position: relative;
    bottom: 0;
  }
  @media (max-width: 1099px) {
    position: relative;
    bottom: 0;
    margin-top: 80px;
  }
  @media (max-width: 600px) {
    margin-top: 60px;
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
        background-color: rgb(17, 35, 53);
        a {
          color: rgb(239, 245, 249);
        }
      }
    }
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    font-family: 'Roboto';
    color: rgb(142, 147, 154);
    line-height: 1.6;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
  }
`;
export default MainWrapper;
