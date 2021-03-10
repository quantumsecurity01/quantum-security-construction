import styled from 'styled-components';
import SectionImage from '@deadline/common/static/images/twentyone/illustration.png';

export const FullWrapper = styled.div`
  background-color: #0c0d15;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;

export const CornerImages = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
  img {
    margin-bottom: 0;
    position: absolute;
    &:nth-child(1) {
      left: 0;
      top: 0;
      max-width: 15%;
    }
    &:nth-child(2) {
      bottom: 0;
      right: 0;
    }
  }
`;

export const LogoImageContainer = styled.div`
  text-align: center;
  @media (max-width: 600px) {
    position: relative;
    top: 0;
  }
  img {
    margin: 0;
  }
  margin-bottom: 65px;
  @media (max-width: 1024px) {
    margin-bottom: 45px;
  }
  @media (max-width: 767px) {
    margin-bottom: 35px;
  }
`;

const MainWrapper = styled.section`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  order: 1;

  @media (max-width: 1440px) {
    width: 47%;
  }
  @media (max-width: 1099px) {
    width: 100%;
  }
  .mainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    @media (max-width: 600px) {
      width: 85%;
    }
  }
`;

export const ImageSection = styled.section`
  background-image: url(${SectionImage});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 70%;
  position: relative;
  width: 45%;
  order: 2;
  @media (max-width: 1440px) {
    width: 53%;
  }
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
      background-color: transparent;
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
          color: #fafbff;
          font-weight: 500;
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
          color: rgb(17, 35, 53);
          font-weight: 500;
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
          color: rgb(17, 35, 53);
          font-weight: 500;
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
        color: rgba(250, 251, 255, 0.5);
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
  width: 100%;
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 48px;
    font-family: 'Playfair Display';
    color: #fafbff;
    line-height: 72px;
    text-align: center;
    max-width: 640px;
    font-weight: 500;
    letter-spacing: -0.25px;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
      font-size: 36px;
      line-height: 48px;
      max-width: 550px;
      margin-bottom: 25px;
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
    font-size: 16px;
    font-family: 'Lato';
    font-weight: 400;
    color: rgba(250, 251, 255, 0.5);
    line-height: 1.941;
    text-align: center;
    max-width: 480px;
    @media (max-width: 1600px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 0;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 20px;
      max-width: 100%;
      margin-bottom: 10px;
      margin-bottom: 0;
    }
  }
`;

export const ContactForm = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 30px;
  z-index: 2;
  form {
    margin-top: 0;
  }
  @media (max-width: 1600px) {
    margin-top: 10px;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    padding-bottom: 0px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
    button {
      width: 100%;
    }
  }
  form {
    margin-bottom: 0;
  }
  > div {
    @media (max-width: 600px) {
      width: 100%;
    }
    form {
      @media (max-width: 600px) {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    .field-wrapper {
      @media (max-width: 600px) {
        width: 100%;
      }
      input {
        background-color: #191c29;
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
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        }
      }
    }
    button {
      margin-left: 20px;
      border-radius: 28px;
      padding: 13px 33px 15px 34px;
      height: 48px;
      transition: all 0.35s ease;
      &:hover {
        box-shadow: rgba(255, 95, 109, 0.57) 0px 12px 24px -10px;
      }
      .btn-text {
        padding: 0;
      }
      @media (max-width: 600px) {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
`;
export const FooterSection = styled.div`
  position: relative;
  padding-top: 60px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: #191c29;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      a {
        color: #ffffff;
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

export default MainWrapper;
