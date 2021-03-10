import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  max-width: 100%;
  margin-top: 40px;
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
    }
  }
  button {
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 28px;
    background-image: -moz-linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    background-image: -webkit-linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    background-image: -ms-linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    padding: 13px 33px 15px 34px;
    height: 48px;
    transition: all 0.5s ease;
    @media (min-width: 767px) {
      min-width: 150px;
      padding: 12px 15px 15px;
    }
    &:hover {
      box-shadow: 0px 5px 11px 0 rgba(47, 128, 237, 0.57);
    }
    .btn-text {
      padding: 0;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 15px;
      margin-right: 0;
    }
  }
`;
