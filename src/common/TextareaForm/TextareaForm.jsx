import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import classNames from 'classnames';

export default function TextareaForm({ name, value,
  handleChange, handleBlur, errors, touched, placeholder }) {

  return (
    <div className="form__group form__group-textarea">
      <TextareaAutosize
        style={{ minHeight: 100, maxHeight: 500 }}
        name={name}
        className={`form__control form__control-textarea ${errors[name] && touched[name] && "form__control-error"}`}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        value={value}
      />
      {touched[name] && errors[name] ? (
        <div className="form__input-feedback" >{errors[name]}</div>
      ) : null}

    </div>
  )
}
