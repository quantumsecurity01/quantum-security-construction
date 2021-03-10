import styled from 'styled-components';
import SectionImage from '../static/images/ten/image.svg';

export const FullWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  @media (max-width: 600px) {
    min-height: 100vh;
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
  background: #fff;
  width: 60%;
  display: flex;
  justify-content: space-between;
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
  width: 40%;
  background-image: url(${SectionImage});
  background-size: cover;
  background-position: top right;
  order: 1;
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
    }
    .NormalUnitContainer {
      background: #fff;
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
          font-family: 'Anton';
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
      .NormallowerCard {
        span {
          font-size: 60px;
          font-family: 'Anton';
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
          font-family: 'Anton';
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
        font-family: 'Anton';
        color: #889bb7;
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
  @media (max-width: 1099px) {
    margin-left: 15px;
    margin-right: 15px;
    min-height: calc(100vh - 300px);
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 48px;
    font-family: 'Anton';
    color: rgb(17, 35, 53);
    line-height: 1.35;
    text-align: center;
    max-width: 640px;
    font-weight: 500;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
      font-size: 36px;
      max-width: 480px;
      margin-bottom: 15px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
      max-width: 430px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      max-width: 100%;
    }
  }
  p {
    font-size: 18px;
    font-family: 'Frank Ruhl Libre';
    font-weight: 400;
    color: rgba(17, 35, 53, 0.6);
    line-height: 1.941;
    text-align: center;
    max-width: 480px;
    @media (max-width: 1600px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
      max-width: 100%;
      margin-bottom: 0;
    }
  }
`;
export const ContactForm = styled.div`
  display: flex;
  max-width: 100%;
  margin-top: 40px;
  z-index: 2;
  margin-bottom: 10px;
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
    margin-bottom: 0px;
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
  form {
    margin-top: 0;
    margin-bottom: 0;
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
      background-color: rgb(245, 245, 245);
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
    border-radius: 3px !important;
    background-color: rgb(51, 51, 51) !important;
    padding: 13px 33px 15px 34px;
    height: 48px;
    transition: all 0.35s ease;
    background-image: none;
    &:hover {
      box-shadow: rgba(51, 51, 51, 0.57) 0px 12px 24px -10px !important;
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
      @media (max-width: 1440px) {
        width: 36px;
        height: 36px;
      }
      a {
        color: rgb(17, 35, 53);
        font-size: 17px;
        @media (max-width: 1440px) {
          font-size: 14px;
        }
      }
      &:hover {
        background-color: rgb(17, 35, 53);
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: 16px;
    font-family: 'Frank Ruhl Libre';
    color: rgb(142, 147, 154);
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
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
