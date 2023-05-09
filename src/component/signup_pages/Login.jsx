import React, { useState } from 'react';
import InputForm from './Input';
import axios from "axios"
import "./style.css"
const Login = () => {
  const [values, setValue] = useState({
    userName: '',
    password: '',
    
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/login",{
      values
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
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
      errorMessage: "username doesn't exist"
    },
    
    {
      id: 2,
      label: 'Password',
      name: 'password',
      placeholder: 'enter the password',
      type: 'text',
      required: true,
      pattern: '^[A-Za-z][A-Za-z0-9_]{3,15}$',
      errorMessage: 'enter valid password ',
    },
  ];
  return (
    <div className='allLogin'>
      <form className='loginForm' onSubmit={handleSubmit}>
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
    </div>
  );
};
export default Login;
