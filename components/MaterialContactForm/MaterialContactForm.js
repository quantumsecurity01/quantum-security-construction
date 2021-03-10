import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { ic_cancel } from 'react-icons-kit/md/ic_cancel';
import { FormattedMessage } from 'react-intl';
import useTimeout from '@deadline/common/hooks/useTimeout';
import MaterialTextField from '../MaterialTextField/MaterialTextField';
import Button from '../Button/';
import Loader from '../Loader';
import { InputFeedback, Form } from './MaterialContactForm.style';

export default function ContactForm() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputRef, setInputRef] = useState(null);
  const [formField, setformFieldRef] = useState(null);
  const [pending, setPending] = useState(false);
  const { start } = useTimeout(() => {
    if (error) setError(false);
    if (success) setSuccess(false);
  }, 2000);
  const setActive = active => {
    if (active) {
      formField.current.classList.add('form-field--is-active');
    } else {
      formField.current.classList.remove('form-field--is-active');
      inputRef.current.value === ''
        ? formField.current.classList.remove('form-field--is-filled')
        : formField.current.classList.add('form-field--is-filled');
    }

    console.log(inputRef.current.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setPending(true);
    // const response = await fetch(
    //   'https://api.sendgrid.com/v3/marketing/contacts',
    //   {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     },
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       list_ids: [],
    //       contacts: [{ email: value }],
    //     }),
    //   }
    // );
    // const data = await response.json();
    // console.log(data, 'data');
    // if (data.job_id) {
    //   setPending(false);
    //   setSuccess(true);
    //   start();
    //   setValue('');
    //   setActive(false);
    // } else if (data.errors.length) {
    //   setPending(false);
    //   setError(true);
    //   start();
    // }

    console.log('contact form');
    setTimeout(function() {
      setPending(false);
      setSuccess(true);
      start();
      setValue('');
      setActive(false);
    }, 2000);
  };

  const handleChange = (inputEl, formField) => {
    let value = inputEl.current.value;
    console.log(inputEl);
    setInputRef(inputEl);
    setformFieldRef(formField);
    setValue(value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <MaterialTextField
        labelText="inputLabel"
        type="email"
        required="required"
        value={value}
        error={error}
        success={success}
        onChange={handleChange}
      />
      <Button
        type="submit"
        title="buttonText"
        isLoading={pending}
        loader={<Loader loaderColor="white" />}
      />
      {error && (
        <InputFeedback error>
          <Icon icon={ic_cancel} />
          <FormattedMessage id="errorMsg" defaultMessage="errorMessage" />
        </InputFeedback>
      )}
      {success && (
        <InputFeedback success>
          <Icon icon={ic_check_circle} />
          <FormattedMessage id="successMsg" defaultMessage="successMessage" />
        </InputFeedback>
      )}
    </Form>
  );
}
