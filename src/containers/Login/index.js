import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginLayout } from '../../components/Layout';
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
      <LoginLayout>
        <LoginForm onSubmit={this.handleSubmit} />
      </LoginLayout>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
