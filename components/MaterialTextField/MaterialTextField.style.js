import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 316px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const FromField = styled.div`
  display: block;
  width: 100%;
  /* margin-bottom: 16px; */

  &.form-field--is-active {
    .form-field__control {
      &::after {
        /* border-bottom: 1px solid rgb(142, 199, 255); */
        /* transform: scaleX(110); */
        transform: scaleX(1);
      }
    }
    .form-field__label {
      color: rgb(142, 199, 255);
      font-size: 0.75rem;
      transform: translateY(-28px);
    }
  }
  &.form-field--is-filled {
    .form-field__label {
      font-size: 0.75rem;
      transform: translateY(-28px);
    }
    .form-field__control {
      &::after {
        /* border-bottom: 1px solid rgb(142, 199, 255); */
        /* transform: scaleX(110); */
        transform: scaleX(1);
      }
    }
  }
`;
export const FromFieldControl = styled.div`
  background: transparent;
  /* border-radius: 8px 8px 0 0; */
  /* overflow: hidden; */
  position: relative;
  width: 100%;

  &::after {
    /* border-bottom: 1px solid rgb(142, 199, 255); */
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    margin: 0 auto;
    position: absolute;
    /* right: -15px; */
    right: 0;
    transform: scaleX(0);
    transition: all 0.4s;
    width: 100%;
    height: 2px;
    background-color: rgb(142, 199, 255);
  }
`;
export const Label = styled.label`
  box-sizing: border-box;
  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  transition: all 0.4s;
  width: 100%;
  font-size: 16px;
  font-family: 'Roboto';
  color: rgb(142, 199, 255);
  letter-spacing: -0.15px;
  padding: 12px 0px 0;
  pointer-events: none;
  font-weight: 300;
`;
export const Input = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  display: block;
  font-size: 14px;
  outline: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 48px;
  margin-top: 0;
  color: rgba(142, 199, 255, 0.6);

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  appearance: none;
  background: transparent;
  border: 0;
  display: block;
  font-size: 14px;
  outline: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 48px;
  margin-top: 0;
  color: rgba(142, 199, 255, 0.6);

  &:focus {
    outline: none;
  }
`;
