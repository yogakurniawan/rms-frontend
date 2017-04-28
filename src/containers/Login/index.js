/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  handleSubmit = (evt, values) => {
    evt.preventDefault();
    console.log(values);
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
