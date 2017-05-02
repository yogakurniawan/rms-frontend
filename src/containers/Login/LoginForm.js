import React from 'react';
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
      <div className="LoginForm">
        <div className="LoginForm__Container">
          <div className="LoginForm__HeaderBox">
            <span>Login</span>
          </div>
          <div className="LoginForm__ContentBox">
            <form onSubmit={onSubmit}>
              <div className="LoginForm__RmsInputField">
                <Field  id="rms-username" fullWidth={true} name="Username" component={renderTextField} label="Username" />
                <Field id="rms-password" fullWidth={true} name="Password" type="password" component={renderTextField} label="Password" />
              </div>
              <div className="LoginForm__RmsLoginButtonWrapper">
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
