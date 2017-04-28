import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import './LoginForm.css';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <div className="root">
        <div className="container">
          <div className="headerBox">
            <span>Login</span>
          </div>
          <div className="contentBox">
            <form onSubmit={onSubmit}>
              <div className="rmsInputField">
                <Field id="rms-username" fullWidth={true} name="Username" component={renderTextField} label="Username" />
                <Field id="rms-password" fullWidth={true} name="Password" type="password" component={renderTextField} label="Password" />
              </div>
              <div className="rmsLoginButtonWrapper">
                <RaisedButton type="submit" className="rmsLoginButton" label="Login" secondary={true} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
