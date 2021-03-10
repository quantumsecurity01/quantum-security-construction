import styled from 'styled-components';

export const ContactSection = styled.div`
  background-color: #ff4575;
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
  @media only screen and (max-width: 1024px) {
    padding: 50px 30px 60px;
  }
  .contactInfo {
    grid-template-columns: 160px 130px 160px;
    @media only screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  .infoItem {
  }
`;

export const Heading = styled.div`
  @media only screen and (max-width: 1366px) {
    margin-bottom: 40px;
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
    @media (max-width: 600px) {
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
`;

export const Contact = styled.div`
  margin-bottom: 120px;
  @media only screen and (max-width: 1366px) {
    margin-bottom: 40px;
  }
  form {
    @media only screen and (max-width: 1366px) {
      margin-top: 0;
    }
    @media only screen and (max-width: 480px) {
      width: 350px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.05em;
    margin-bottom: 35px;
    color: #040718;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
    }
    @media (max-width: 600px) {
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
  .field-wrapper {
    .form-field__control:after {
      background-color: #fff;
    }
    .form-field--is-active label {
      color: #fff;
    }
    label {
      color: #fff;
    }
    input,
    textarea {
      color: #fff;
      font-family: 'DM Sans', sans-serif;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 0 none;
        -webkit-text-fill-color: #fff;
        box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }

  button {
    background: #fff;
    color: #000;
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
  }
`;

export const InfoItem = styled.div`
  text-align: center;

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

export const ContactHeading = styled(Heading)`
  @media only screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  h2 {
    margin-bottom: 0;
  }
`;
