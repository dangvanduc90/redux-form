import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validateInput from './validate';
import { Button } from 'react-bootstrap';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
);

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="first name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="last name"
      />
       <Field
        name="email"
        type="text"
        component={renderField}
        label="email"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      {error && <strong>{error}</strong>}
      <div>
        <Button type="submit" disabled={submitting}>register</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
  validate: validateInput,
})(SubmitValidationForm);