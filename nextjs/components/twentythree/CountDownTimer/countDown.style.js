import styled from 'styled-components';

export const CountDownSection = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 50px;
    min-height: auto;
  }
`;
export const ClockWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 1440px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 35px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    width: 100%;
  }
  .NormalClock {
    width: 550px;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    .NormalUnitContainer {
      background: transparent;
      @media only screen and (max-width: 600px) {
        width: 100px;
      }
      @media only screen and (max-width: 420px) {
        width: 80px;
      }
      .NormalupperCard {
        span {
          font-size: 60px;
          font-family: 'Comfortaa';
          color: #000;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media only screen and (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 60px;
          color: #000;
          font-weight: 700;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media only screen and (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 60px;
          color: #000;
          font-weight: 700;
          line-height: 0.8;
          text-align: center;
          letter-spacing: 0.025em;
          @media only screen and (max-width: 1440px) {
            font-size: 36px;
            line-height: 46px;
          }
          @media only screen and (max-width: 600px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
      .digitLabel {
        font-size: 14px;
        color: #000;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        @media only screen and (max-width: 1440px) {
          margin-top: 5px;
        }
        @media only screen and (max-width: 600px) {
          letter-spacing: 1px;
        }
        @media only screen and (max-width: 420px) {
          font-size: 12px;
        }
      }
    }
  }
`;
