import styled from 'styled-components';

export const Form = styled.form`
  max-width: 100%;
  width: 320px;
  margin: 50px auto 0 auto;
  z-index: 2;
  @media (max-width: 1440px) {
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    margin-top: 25px;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  button {
    border-radius: 4em;
    min-width: 160px;
    height: 46px;
    padding: 0 6px;
    border: 0;
    min-height: auto;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin: 0 15px;
    margin-top: 30px;
    position: relative;
    transition: 0.15s ease-in-out;
    background: linear-gradient(to right, #44a8f0 0%, #2f80ed 100%);
    margin-bottom: 50px;
    @media (max-width: 575px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .field-wrapper {
    .feedback {
      left: 0;
      bottom: -120px;
      max-width: 100%;
    }
  }
`;
