import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  button {
    border-radius: 3px;
    background-image: linear-gradient(
      -31deg,
      rgb(86, 204, 242) 0%,
      rgb(47, 128, 237) 100%
    );
    padding: 13px 33px 15px 34px;
    height: 48px;
    transition: all 0.35s ease;
    @media (min-width: 767px) {
      min-width: 150px;
      padding: 12px 15px 15px;
    }
    &:hover {
      box-shadow: rgba(82, 104, 219, 0.57) 0px 12px 24px -10px;
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
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }
`;

export const InputFeedback = styled.div`
  color: ${props => (props.success ? 'rgb(14, 158, 105)' : 'rgb(246, 86, 86)')};
  position: absolute;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
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
