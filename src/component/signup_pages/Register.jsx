import React, { useState } from 'react';
import Axios from "axios"
import {Link} from "react-router-dom"
import InputForm from './Input';
const Register = () => {
  const [values, setValue] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const onChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const inputs = [
    {
      id: 1,
      label: 'UserName',
      name: 'userName',
      placeholder: 'enter email',
      type: 'text',
      required: true,
      pattern: '^[A-Za-z][A-Za-z0-9_]{3,15}$',
      errorMessage: 'userName should be start with letter and have more than three character ',
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      placeholder: 'enter the email',
      type: 'email',
      required: true,
      errorMessage: 'please enter the valid email',
    },
    {
      id: 3,
      label: 'Password',
      name: 'password',
      placeholder: 'enter the password',
      type: 'text',
      required: true,
      pattern: '^[A-Za-z][A-Za-z0-9_]{3,15}$',
      errorMessage: 'password should start with letter and be greater than 3 ',
    },
    {
      id: 4,
      label: 'confirmPassword',
      name: 'confirmPassword',
      placeholder: 'please enter the confirmPassword',
      type: 'text',
      required: true,
      pattern: values.password,
      errorMessage: 'password should match',
    },
  ];
  return (
    <div className='allRegister'>
      <form className='registerForm' onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <InputForm
            key={input.id}
            value={values[input.name]}
            {...input}
            onChange={onChange}
          />
        ))}

        <button>submit</button>
      </form>
      <p>already have an account <Link to="/">login</Link></p>
    </div>
  );
};
export default Register;