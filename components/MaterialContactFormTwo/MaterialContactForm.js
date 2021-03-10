import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { ic_cancel } from 'react-icons-kit/md/ic_cancel';
import Fade from 'react-reveal/Fade';
import { FormattedMessage } from 'react-intl';
import useTimeout from '@deadline/common/hooks/useTimeout';
import MaterialTextField from '../MaterialTextField/MaterialTextField';
import Button from '../Button/';
import Loader from '../Loader';
import { Form, InputFeedback } from './MaterialContactForm.style';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputRef, setInputRef] = useState(null);
  const [formField, setFormFieldRef] = useState(null);
  const [pending, setPending] = useState(false);
  const { start } = useTimeout(() => {
    if (error) setError(false);
    if (success) setSuccess(false);
  }, 3500);
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
    //       contacts: [{ email: email, name: name, message: message }],
    //     }),
    //   }
    // );
    // const data = await response.json();
    // console.log(data, 'data');
    // if (data.job_id) {
    //   setPending(false);
    //   setSuccess(true);
    //   start();
    //   setEmail('');
    //   setName('');
    //   setMessage('');
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
      setEmail('');
      setName('');
      setMessage('');
      setActive(false);
    }, 2000);
  };

  const handleChange = (inputEl, formField) => {
    let value = inputEl.current.value;
    console.log('email', inputEl);
    setInputRef(inputEl);
    setFormFieldRef(formField);
    setEmail(value);
  };

  const handleChangeName = (inputEl, formField) => {
    let value = inputEl.current.value;
    console.log('name', inputEl);
    setInputRef(inputEl);
    setFormFieldRef(formField);
    setName(value);
  };

  const handleChangeMessage = (inputEl, formField) => {
    let value = inputEl.current.value;
    console.log('message', inputEl);
    setInputRef(inputEl);
    setFormFieldRef(formField);
    setMessage(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MaterialTextField
        labelText="nameInputLabel"
        type="text"
        required="required"
        value={name}
        error={error}
        success={success}
        onChange={handleChangeName}
      />
      <MaterialTextField
        labelText="emailInputLabel"
        type="email"
        required="required"
        value={email}
        error={error}
        success={success}
        onChange={handleChange}
      />
      <MaterialTextField
        labelText="messageInputLabel"
        type="textarea"
        required="required"
        value={message}
        error={error}
        success={success}
        onChange={handleChangeMessage}
      />
      <Button
        type="submit"
        title="contactFormButton"
        isLoading={pending}
        loader={<Loader loaderColor="white" />}
      />
      {error && (
        <Fade bottom duration={2000}>
          <InputFeedback error>
            <Icon icon={ic_cancel} />
            <FormattedMessage id="errorMsg" defaultMessage="errorMessage" />
          </InputFeedback>
        </Fade>
      )}
      {success && (
        <Fade bottom duration={2000}>
          <InputFeedback success>
            <Icon icon={ic_check_circle} />
            <FormattedMessage id="successMsg" defaultMessage="successMessage" />
          </InputFeedback>
        </Fade>
      )}
    </Form>
  );
}
