import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import RegisterForm from './RegisterForm';

class register extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    // handle data after pass validate
    console.log(values)
  }

  render() {
    return (
      <Fragment>
        <Helmet title="Login" />
        <RegisterForm
          onSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}

export default register;