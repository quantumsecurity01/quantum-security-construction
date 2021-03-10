import React, { useState } from 'react';
import useTimeout from '@deadline/common/hooks/useTimeout';
import TextField from '../TextField/TextField';
import Button from '../Button/';
import Loader from '../Loader';
import { Form } from './ConatctForm.style';

export default function ContactForm() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const { start } = useTimeout(() => {
    if (error) setError(false);
    if (success) setSuccess(false);
  }, 3500);
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
    // } else if (data.errors.length) {
    //   setPending(false);
    //   setError(true);
    //   start();
    // }

    console.log('contact form');

    setTimeout(function() {
      setPending(false);
      setSuccess(true);
      setError(false);
      start();
      setValue('');
    }, 2000);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="user_email"
        placeholder="placeholder"
        type="email"
        required="required"
        value={value}
        error={error}
        errorMessage="errorMessage"
        successMessage="successMsg"
        success={success}
        onChange={handleChange}
      />
      <Button
        type="submit"
        title="subscribeButtonText"
        isLoading={pending}
        loader={<Loader loaderColor="white" />}
      />
    </Form>
  );
}
