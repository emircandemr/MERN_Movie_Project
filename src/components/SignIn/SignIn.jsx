import React from 'react'
import { useFormik } from 'formik'
import Input from "../Input/Input"
import './SignIn.scss'
import { inputSchemas } from '../../schemas'

const SignIn = () => {

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
            placeholder: "Enter your username",
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

  return (
    <div className='container'>
      <form className='form'>
        <h1 className='form__title' >Sign In</h1>
        {inputs.map((input) => (
          <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
        ))}
        <button className='form__button'  >Login</button>
        {/* <div className='mt-6 text-gray-600'> New Here ? <Link to="/register" className='text-[#050e1d] px-2 font-bold cursor-pointer'>Create an Account</Link></div> */}
      </form>
    </div>

  )
}

export default SignIn


{/* <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center items-center '>
<h1 className='text-4xl mb-10 font-pacifico text-[#050e1d]' >Sign In</h1>
{inputs.map((input) => (
  <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
))}
<div className="flex items-start w-1/2 mt-3 mb-5">
    <div className="flex items-center h-5">
    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember Me</label>
</div>
<button className='bg-[#082a4e] text-white py-3 px-4 w-10/12 sm:w-1/2 rounded-xl' onClick={submit} >Login</button>
<div className='mt-6 text-gray-600'> New Here ? <Link to="/register" className='text-[#050e1d] px-2 font-bold cursor-pointer'>Create an Account</Link></div>
</form> */}