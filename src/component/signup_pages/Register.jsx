import React, { useState ,useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import Axios from "axios"
import {Link} from "react-router-dom"
import InputForm from './Input';
const Register = () => {
  const navigate=useNavigate()
  const [values, setValue] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
async function handleSubmit(e) {
    e.preventDefault();
  console.log(values)
  try{
    
      Axios.post("https://7jpb97-8000.csb.app/register", {
  values
  }).then((res)=>{
    if(res.data="exist"){
       alert("user exist")
       navigate("/")
    }
    else{
      alert("user sign up successfuly")
    }
  })
  
  }
  catch(err){
      console.log(err)}
      
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
      errorMessage: 'userName should start with letter  ',
    },
    {
      id: 2,
      label: 'Email',
      name: 'email',
      placeholder: 'enter the email',
      type: 'email',
      required: true,
      
    },
    {
      id: 3,
      label: 'Password',
      name: 'password',
      placeholder: 'enter the password',
      type: 'text',
      required: true,
      pattern: '^[A-Za-z][A-Za-z0-9_]{3,15}$',
      errorMessage: 'password should start with letter ',
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
