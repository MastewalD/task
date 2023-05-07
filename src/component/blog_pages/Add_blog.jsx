import React, { useState } from 'react';
import Axios from "axios"
import {Link} from "react-router-dom"
import InputForm from '../signup_pages/Input';
const Add_blog = () => {
  const [values, setValue] = useState({
    title: '',
    body: '',
   
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
      label: 'Title',
      name: 'title',
      placeholder: 'enter title',
      type: 'text',
      required: true,
      pattern: '^[A-Za-z][A-Za-z0-9_]$',
      errorMessage: 'userName should start with letter ',
    },
    {
      id: 2,
      label: 'Body',
      name: 'body',
      placeholder: 'enter the body',
      type: 'text',
      required: true,
    }

  ];
  return (
    <div className='allBlog'>
      <form className='blogForm' onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <InputForm
            key={input.id}
            value={values[input.name]}
            {...input}
            onChange={onChange}
          />
        ))}

        <button>add</button>
      </form>
      
    </div>
  );
};
export default Add_blog;
