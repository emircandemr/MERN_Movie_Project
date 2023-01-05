import React from 'react'
import Background from '../components/Background/Background'
import { useFormik } from 'formik'
import { inputSchemas } from '../schemas'
import { Link } from 'react-router-dom'
import Form from '../components/Form/Form'
import '../../src/App.scss'
import {register} from '../services/authService'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  const {values , handleSubmit, handleBlur , handleChange , errors ,touched} = useFormik({
    initialValues:{
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
    },
    validationSchema:inputSchemas,
})

const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      value : values.username,
      errorMessage : errors.username,
      touched : touched.username
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value : values.email,
      errorMessage : errors.email,
      touched : touched.email,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value : values.password,
      errorMessage : errors.password,
      touched : touched.password,        
    },
    {
      id: 4,
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      value : values.confirmpassword,
      errorMessage : errors.confirmpassword,
      touched : touched.confirmpassword,            
    },
  ];

  const checkValues = () => {
   return Object.keys(values).every( (key) => values[key] !== "" )
  }


const registerHandler =async (e) => {
    e.preventDefault()
    if(checkValues()){
      await register(values.email,values.password)
      navigate("/login" , {
        replace : true
      })
    }
  }
  return (
    <div>
      <Background>
        <div className='container'>
          <h1 className='container__title'>Register</h1>
          <Form inputs={inputs} 
          onBlurHandler={handleBlur} 
          onChangeHandler={handleChange} 
          onClickHandler={registerHandler} 
          buttonText="Register"/>
          <div className='container__direct'>
            <span className='container__direct__text' > Already have an account ? </span>
            <Link className='container__direct__link' to="/login" 
            >Sign In
            </Link>
          </div>
        </div>
      </Background>
    </div>
  )
}

export default Register