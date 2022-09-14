import React from 'react'
import "../pages/FormInput.css"

const FormInput = (props) => {
  const { onChange, id, ...inputProps } = props;
  return (
    <div>
        <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default FormInput