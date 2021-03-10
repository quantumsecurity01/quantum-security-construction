import styled from 'styled-components';
import BannerBG from '../static/images/twenty/bg.png';

export const MainWrapper = styled.div`
  background-image: url(${BannerBG});
  display: flex;
  max-width: 100%;
  overflow: hidden;
  background-color: #040014;
  background-position: center 120px;
  background-size: 600px;
  background-repeat: no-repeat;
  transition: background-position 0.4s cubic-bezier(0.36, 0.55, 0.51, 0.89);
  transition-delay: 0.4s;
  &.sidebar-open {
    background-position: 270px 120px;
    transition-delay: 0s;
  }
  @media (max-width: 1300px) and (min-width: 1200px) {
    background-position: center 120px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    &.sidebar-open {
      background-position: center 120px;
    }
  }
  @media (max-width: 767px) {
    background-position: center 120px;
    background-size: 90%;
  }
  @media (width: 812px) and (height: 375px) {
    background-image: none !important;
  }
  @media (max-width: 768px) {
    background-position: center 140px;
  }
  @media (max-width: 480px) {
    background-position: center 140px;
  }
`;

const MainContentWrapper = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  flex-grow: 1;
`;

export const LogoImageContainer = styled.div`
  text-align: center;
  position: relative;
  padding-top: 40px;
  @media (max-width: 1600px) {
    padding-top: 30px;
  }
  img {
    margin: 0;
  }
`;

export const SidebarButton = styled.div`
  position: absolute;
  right: 50px;
  top: calc(50% - 5px);
  button {
    background-color: transparent;
  }
  @media (max-width: 600px) {
    right: 10px;
    top: calc(50% - 10px);
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
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    margin-top: 50px;
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

export const SubscriptionWrapper = styled.div`
  margin-top: 60px;
  @media (max-width: 480px) {
    margin-top: 20px;
  }
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
`;

export const SideBar = styled.div`
  width: 0;
  flex: 0;
  transition: 0.4s cubic-bezier(0.36, 0.55, 0.51, 0.89);
  position: relative;
  transition-delay: 0.42s;
  align-self: flex-start;
  height: 100vh;
  background: #03000d;
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
    @media (max-width: 1600px) {
      width: 550px;
      flex: 0 0 550px;
    }
    @media (max-width: 600px) {
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
    letter-spacing: 2px;
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Anton', sans-serif;
    @media (max-width: 600px) {
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(254, 255, 255, 0.6);
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
    margin-bottom: 35px;
    letter-spacing: 2px;
    color: #fff;
    font-family: 'Anton', sans-serif;
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
  .field-wrapper {
    .form-field__control:after {
      background-color: rgba(253, 253, 253, 0.15);
    }
    .form-field--is-active label {
      color: #fff;
    }
    .form-field__input {
      border-color: rgba(253, 253, 253, 0.15);
    }
    .form-field--is-filled,
    .form-field--is-active {
      .form-field__control:after {
        background-color: rgba(253, 253, 253, 0.65);
      }
      .form-field__input {
        color: #fff;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    > div {
      border-radius: 20px;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 50px;
    }
    &:nth-child(1) > div {
      background-color: rgba(56, 122, 255, 0.15);
      color: #387aff;
    }
    &:nth-child(2) > div {
      background-color: rgba(168, 107, 251, 0.15);
      color: #a868fb;
    }
    &:nth-child(3) > div {
      background-color: rgba(245, 98, 37, 0.15);
      color: #f56289;
    }
  }
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
    font-family: Roboto, sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 15px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.4);
    line-height: 1.6;
    margin-bottom: 0;
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
  right: 80px;
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

export default MainContentWrapper;
