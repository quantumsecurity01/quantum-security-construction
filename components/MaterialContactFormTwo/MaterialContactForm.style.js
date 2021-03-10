import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  button {
    border-radius: 3px;
    background-image: linear-gradient(
      31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    padding: 12px 33px 15px 34px;
    height: 46px;
    border-radius: 4em;
    min-width: 160px;
    min-height: auto;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 6px 20px;
    transition: all 0.35s ease;
    @media (min-width: 767px) {
      min-width: 150px;
      padding: 12px 15px 15px;
    }
    .btn-text {
      padding: 0;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      margin-top: 15px;
    }
  }
  /* max-width: 100%; */
  margin-top: 30px;
  z-index: 2;

  @media (max-width: 575px) {
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
  .field-wrapper {
    text-align: justify;
    margin: 0 0 30px 0;
    width: 100%;
    .form-field--is-active {
      label {
        color: #040718;
      }
    }
    .form-field__control {
      &:after {
        height: 1px;
        background: #040718;
      }
    }

    input {
      height: 42px;
    }

    input,
    textarea {
      border-color: #dadadd;
      color: #040718;
    }
    & label {
      color: #9b9ca3;
      font-size: 14px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
    }
  }
`;

export const InputFeedback = styled.div`
  color: ${props =>
    props.success ? 'rgb(250, 251, 255)' : 'rgb(250, 251, 255)'};
  position: absolute;
  border-radius: 5px;
  background-color: ${props =>
    props.success ? 'rgb(14, 158, 105)' : 'rgb(246, 86, 86)'};
  box-shadow: ${props =>
    props.success
      ? '0px 5px 18.8px 1.2px rgba(17, 182, 122, 0.5)'
      : '0px 5px 18.8px 1.2px rgba(246, 86, 86, 0.35)'};
  font-size: 14px;
  font-family: 'Roboto';
  left: ${props => (props.success ? '25%' : '0')};
  bottom: -50px;
  padding: 6px 16px;
  transition: all 250ms linear;
  text-align: center;
  width: auto;
  left: 0;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  @media (max-width: 600px) {
    position: static;
    bottom: 0;
    left: 0;
    margin-top: 15px;
    transform: translate(0);
  }
  i {
    position: absolute;
    top: 4px;
  }
  span {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
