import React from 'react'
import Background from '../components/Background/Background'
import { useFormik } from 'formik'
import { inputSchemas } from '../schemas'
import { Link } from 'react-router-dom'
import Form from '../components/Form/Form'
import '../../src/App.scss'
import {login} from '../services/authService'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {loginReducer} from '../store/Slice/auth-slice'
const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {values , handleSubmit , handleBlur, handleChange , errors , touched} = useFormik({
    initialValues: {
        email: "",
        password: ""
    },
    validationSchema:inputSchemas,
})

const inputs = [
    {
        id: 1,
        name: "email",
        label: "Email",
        type: "text",
        placeholder: "Enter your email",
        value : values.email,
        errorMessage : errors.email,
        touched : touched.email
      },
      {
        id: 2,
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        value : values.password,
        errorMessage : errors.password,
        touched : touched.password,       
      },
]

const loginHandler = async(e) => {
    e.preventDefault()
    const user = await login(values.email,values.password)
    if(user){
      dispatch(loginReducer(user))
      navigate("/" , {
        replace : true
      })
    }
  }

  return (
    <div>
      <Background>
        <div className='container'>
          <h1 className='container__title'>Sign In</h1>
          <Form inputs={inputs} 
          onBlurHandler={handleBlur} 
          onChangeHandler={handleChange} 
          onClickHandler={loginHandler} 
          buttonText="Login"/>
          <div className='container__direct'>
            <span className='container__direct__text' > New Here ? </span>
            <Link className='container__direct__link' to="/register" 
            >Create an Account
            </Link>
          </div>
        </div>
      </Background>
    </div>
  )
}

export default Login