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
