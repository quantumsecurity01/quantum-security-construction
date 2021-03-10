import styled from 'styled-components';

export const AboutSection = styled.div`
  background-color: #457eff;
  padding: 0 140px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 1600px) {
    padding: 0 80px;
  }
  @media only screen and (max-width: 1440px) {
    padding: 0 44px;
  }
  @media only screen and (max-width: 1366px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 100px 150px 120px;
    min-height: auto;
  }
  @media only screen and (max-width: 768px) {
    padding: 100px 80px 120px;
  }
  @media only screen and (max-width: 480px) {
    padding: 50px 30px 60px;
  }
  .aboutInfo {
    @media only screen and (max-width: 1366px) {
      grid-gap: 20px 30px;
    }
    @media only screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-gap: 40px 30px;
    }
  }
`;

export const Heading = styled.div`
  text-align: center;
  max-width: 565px;
  margin: 0 auto 100px;
  @media only screen and (max-width: 1366px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 60px;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.05em;
    margin: 0 0 20px;
    color: #fff;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    line-height: 2;
    @media only screen and (max-width: 1366px) {
      font-size: 16px;
      margin-top: 0;
    }
    @media only screen and (max-width: 1280px) {
      margin: 0;
    }
    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;

export const Info = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  h2 {
    color: #fff;
    grid-column: 1/4;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.05em;
    margin: 0 0 20px;
    text-align: center;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 480px) {
      grid-column: 1/2;
      margin-bottom: 0;
    }
  }
`;

export const InfoItem = styled.div`
  text-align: center;
  @media only screen and (max-width: 480px) {
    max-width: 200px;
  }
  h4 {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-top: 0;
    margin-bottom: 15px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    line-height: 1.6;
    margin-bottom: 0;
  }
`;

export const InfoIcon = styled.div`
  align-items: center;
  color: #fff;
  margin-bottom: 45px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 25px;
  }
  &.withBg {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.17);
    display: flex;
    height: 60px;
    justify-content: center;
    margin: 0 auto 45px;
    width: 60px;
  }
`;
