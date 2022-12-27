import React from 'react'
import Input from "../Input/Input"
import './Form.scss'

const Form = ({inputs,onBlurHandler,onClickHandler,onChangeHandler,buttonText}) => {
  return (
    <form className='form'>
        {inputs.map((input) => (
        <Input key={input.id} {...input} onBlur={onBlurHandler} onChange={onChangeHandler} />
        ))}
        <button className='form__button' onClick={onClickHandler} >{buttonText}</button>
  </form>
  )
}

export default Form