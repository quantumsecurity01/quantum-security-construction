import styled from 'styled-components';
import BannerBG from '@deadline/common/static/images/nineteen/bg.png';

const MainWrapper = styled.section`
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-image: url(${BannerBG});
  background-color: #040014;
  background-position: center;
  background-size: 600px;
  background-repeat: no-repeat;
  @media (max-width: 1300px) and (min-width: 1200px) {
    background-position: center 120px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    &.sidebar-open {
      background-position: center;
    }
  }
  @media (max-width: 767px) {
    background-position: center 120px;
    background-size: 90%;
  }
  @media (width: 812px) and (height: 375px) {
    background-image: none !important;
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

export const NormalClockWrapper = styled.div`
  position: relative;
  margin-bottom: 60px;
  @media (max-width: 1440px) {
    margin-top: 15px;
    margin-bottom: 60px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 40px;
  }
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
  .NormalClock {
    width: 600px;
    @media (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: transparent;
      @media (max-width: 600px) {
        width: 80px;
        height: auto;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: 'Comfortaa';
          color: #fff;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;

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
          color: #fff;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;

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
          color: #fff;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;

          @media (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .digitLabel {
        font-size: 14px;
        font-family: 'Roboto';
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;

        @media (max-width: 600px) {
          letter-spacing: 2px;
          margin-top: 5px;
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
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 480px) {
    margin-top: 0px;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 46px;
    font-family: 'Anton', sans-serif;
    color: #fff;
    line-height: 1.35;
    text-align: center;
    max-width: 660px;
    letter-spacing: 2px;
    margin-bottom: 40px;
    @media (max-width: 1440px) {
      font-size: 38px;
      max-width: 550px;
      margin-bottom: 40px;
      line-height: 1.6;
    }
    @media (max-width: 768px) {
      font-size: 41px;
      margin-bottom: 25px;
      line-height: 1.6;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      margin-bottom: 15px;
      line-height: 1.6;
    }
  }
  p {
    font-size: 16px;
    font-family: 'Lato';
    color: rgba(255, 255, 255, 0.9);
    line-height: 2;
    text-align: center;
    max-width: 420px;
    font-weight: 400;
    @media (max-width: 1440px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

export const ContactForm = styled.div`
  margin-top: 60px;
  form {
    margin: 0;
  }
  .field-wrapper {
    input {
      background-color: rgb(255, 255, 255, 0.08);
      color: #fff;
    }
  }
  button {
    background-color: red;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
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
      background-color: #191c29;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      a {
        color: #fff;
        font-size: 17px;
        transition: all 0.5s ease;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
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
    color: rgb(78, 97, 124);
    line-height: 22px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
    @media (max-width: 340px) {
      font-size: 12px;
    }
  }
`;
export default MainWrapper;
