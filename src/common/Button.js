import React, { Component } from 'react';
class Button extends Component {
  render() {
    return <button>Button {process.env.REACT_APP_NOT_SECRET_CODE + ' ' + process.env.DB_HOST}</button>
  }
}
export default Button; // Don’t forget to use export default!