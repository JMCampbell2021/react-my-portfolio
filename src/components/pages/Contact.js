import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='container-fluid mh-100 p-5'>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form p-2" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="name">Name:</label>
          <input className='form-control' type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='mb-3'>
          <label htmlFor="email">Email address:</label>
          <input className='form-control' type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='mb-3'>
          <label htmlFor="message">Message:</label>
          <textarea className='form-control' name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className='btn btn-primary mp-3'data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
