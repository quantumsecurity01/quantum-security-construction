import styled from 'styled-components';

export const FullWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
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
  background-image: linear-gradient(to bottom, #fcfcfd, #f9f9fb);
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  @media (max-width: 1099px) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
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
      background: #fbfcfd;
      @media (max-width: 600px) {
        width: 100px;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: 'Frank Ruhl Libre';
          color: #4b8145;
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
          font-family: 'Frank Ruhl Libre';
          color: #4b8145;
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
          font-family: 'Frank Ruhl Libre';
          color: #4b8145;
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
        font-family: 'Frank Ruhl Libre';
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
  overflow: hidden;
  width: 100%;
  padding: 60px 0;
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 48px;
    font-family: 'Frank Ruhl Libre';
    color: rgb(17, 35, 53);
    line-height: 1.5;
    text-align: center;
    max-width: 640px;
    font-weight: 500;
    letter-spacing: -0.25px;
    margin-bottom: 30px;
    @media (max-width: 1600px) {
      font-size: 36px;
      line-height: 48px;
      max-width: 550px;
      margin-bottom: 15px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.4;
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
    margin-bottom: 0;
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
        background-color: #4b8145;
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
