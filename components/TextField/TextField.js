import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { ic_cancel } from 'react-icons-kit/md/ic_cancel';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

//styled-components for stylings
const FieldWrapper = styled.div`
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Label = styled.label``;
const HelpText = styled.span``;
const InputFeedback = styled.div`
  color: ${props =>
    props.success ? 'rgb(250, 251, 255)' : 'rgb(250, 251, 255)'};
  position: absolute;
  border-radius: 5px;
  background-color: ${props =>
    props.success ? 'rgb(14, 158, 105)' : 'rgb(246, 86, 86)'};
  font-size: 14px;
  font-family: 'Roboto';
  color: rgb(250, 251, 255);
  left: ${props => (props.success ? '17%' : '0')};
  bottom: -60px;
  box-shadow: ${props =>
    props.success
      ? '0px 5px 18.8px 1.2px rgba(17, 182, 122, 0.5)'
      : '0px 5px 18.8px 1.2px rgba(246, 86, 86, 0.35)'};
  padding: 6px 16px;
  transition: all 250ms linear;
  width: 90%;
  text-align: center;
  z-index: 99;
  @media (max-width: 600px) {
    left: 5%;
    bottom: -110px;
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
const Input = styled.input`
  background-color: rgb(239, 245, 249);
  border: transparent;
  height: 48px;
  border-radius: 28px;
  padding-left: 30px;
  width: 316px;
  padding-right: 30px;
  @media (max-width: 600px) {
    width: 100%;
  }
  &::placeholder {
    font-size: 15px;
    font-family: 'Roboto';
    color: rgb(142, 147, 154);
  }
  &:focus {
    outline: none;
  }
`;

// react-components
export default function TextField({
  label,
  id,
  helpText,
  error,
  success,
  defaultLabel,
  type,
  placeholder,
  name,
  value,
  onBlur,
  onFocus,
  onChange,
  className,
  errorMessage,
  successMessage,
  ...props
}) {
  return (
    <FieldWrapper
      className={`field-wrapper ${className ? className : ''}`.trim()}
    >
      {label && (
        <Label htmlFor={id}>
          <FormattedMessage id={label} defaultMessage={label} />
        </Label>
      )}
      <FormattedMessage id={placeholder} defaultMessage={placeholder}>
        {placeholder => (
          <Input
            placeholder={placeholder}
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
            {...props}
          />
        )}
      </FormattedMessage>
      {helpText && (
        <HelpText>
          <FormattedMessage id={helpText} defaultMessage={helpText} />
        </HelpText>
      )}
      {error && (
        <HeadShake duration={1000}>
          <InputFeedback error className="feedback">
            <Icon icon={ic_cancel} />
            <FormattedMessage id="errorMsg" defaultMessage="errorMessage" />
          </InputFeedback>
        </HeadShake>
      )}
      {success && (
        <Fade bottom duration={2000}>
          <InputFeedback success className="feedback">
            <Icon icon={ic_check_circle} />
            <FormattedMessage
              id={successMessage}
              defaultMessage="successMessage"
            />
          </InputFeedback>
        </Fade>
      )}
    </FieldWrapper>
  );
}

/** Inout prop type checking. */
TextField.propTypes = {
  /** className of the Input component. */
  className: PropTypes.string,

  /** Set input label value. */
  label: PropTypes.string,

  /** The input value, required for a controlled component. */
  value: PropTypes.string,

  /** Set input type of the input element. Default type is text. */
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,
};

/** Inout default type. */
Input.defaultProps = {
  type: 'text',
};
