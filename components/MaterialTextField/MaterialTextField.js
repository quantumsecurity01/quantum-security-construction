import React, { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Wrapper,
  FromField,
  FromFieldControl,
  Label,
  Input,
  Textarea,
} from './MaterialTextField.style';
export default function MaterialTextField({
  id,
  type,
  labelText,
  helpText,
  error,
  success,
  name,
  onChange,
  className,
  value,
  ...props
}) {
  const inputEl = useRef(null);
  const formField = useRef(null);

  const setActive = active => {
    if (active) {
      formField.current.classList.add('form-field--is-active');
    } else {
      formField.current.classList.remove('form-field--is-active');
      inputEl.current.value === ''
        ? formField.current.classList.remove('form-field--is-filled')
        : formField.current.classList.add('form-field--is-filled');
    }

    console.log(inputEl.current.value);
  };

  const handleBlur = () => {
    setActive(false);
  };
  const handleFocus = () => {
    setActive(true);
  };

  const handleChange = () => {
    // let value = inputEl.current.value;
    // onChange(value);
    //let inputRef = inputEl;
    onChange(inputEl, formField);
  };

  return (
    <Wrapper className={`field-wrapper ${className ? className : ''}`.trim()}>
      <FromField ref={formField}>
        <FromFieldControl className="form-field__control">
          <Label htmlFor={id} className="form-field__label">
            <FormattedMessage id={labelText} defaultMessage={labelText} />
          </Label>
          <div
            style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
          >
            {type === 'textarea' ? (
              <Textarea
                id={id}
                type={type}
                name={name}
                ref={inputEl}
                className="form-field__input"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                value={value}
                {...props}
              />
            ) : (
              <Input
                id={id}
                type={type}
                name={name}
                ref={inputEl}
                className="form-field__input"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                value={value}
                {...props}
              />
            )}
          </div>
        </FromFieldControl>
      </FromField>
    </Wrapper>
  );
}
