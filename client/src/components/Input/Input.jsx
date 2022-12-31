import React from 'react'
import './Input.scss'

const Input = (props) => {

    const {label ,errors, errorMessage, touched, ...inputProps} = props;

    return (
        <div className="input">
            <label  className="input__label">{label}</label>
            <input {...inputProps}
            autoComplete='off'
             className={`input__content ${touched && errorMessage ? 'error' : ""} `} />
            <span className='input__error' >{ touched && errorMessage }</span>
        </div>
  )
}

export default Input