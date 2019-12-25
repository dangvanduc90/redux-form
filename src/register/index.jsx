import React, { Component } from 'react';

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
      <RegisterForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default register;