import isEmpty from 'lodash/isEmpty';

 const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateInput = (values) => {
  const errors = {};
  if(isEmpty(values.firstName)) {
    errors.firstName = { _error: 'Required' };
  }
  if(isEmpty(values.lastName)) {
    errors.lastName = { _error: 'Required' };
  }
  if(isEmpty(values.email)) {
    errors.email = { _error: 'Required' };
  } else if(!regexEmail.test(values.email)){
    errors.email = { _error: 'Email invalid' };
  }
  if(isEmpty(values.password)) {
      errors.password = { _error: 'Required' };
  }
  return errors;
};

export default validateInput;