import React from 'react';
import { Field } from 'formik';

export default function InputForm({ name, type, value,
  handleChange, handleBlur, errors, touched, placeholder }) {
  return (
    <div className="form__group">
      <Field
        className={`form__control form__input ${errors[name] && touched[name] && "form__control-error"}`}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {touched[name] && errors[name] ? (
        <span className="form__input-feedback" >{errors[name]}</span>
      ) : null}
    </div>
  )
}
