import React from 'react';
import { Field, reduxForm } from 'redux-form'
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import { DatePicker } from 'redux-form-material-ui'
import { renderTextField, renderSelectField } from '../../components/Form';

class EmployeeDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Employee Details</h2>
        <div className="row">
          <div className="col-xs-10">
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-firstname" fullWidth={true} name="firstName" component={renderTextField} label="First Name" />
              </div>
              <div className="col-xs-6">
                <Field id="rms-emp-details-lastname" fullWidth={true} name="lastName" component={renderTextField} label="last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-dob" fullWidth={true} name="dob" component={DatePicker} format={null} hintText="Date of Birth" />              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-gender"
                  name="gender"
                  component={renderSelectField}
                  label="Gender"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="Male" />
                  <MenuItem value="2" primaryText="Female" />
                </Field>
              </div>
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-marital-status"
                  name="maritalStatus"
                  component={renderSelectField}
                  label="Marital Status"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="Single" />
                  <MenuItem value="2" primaryText="Married" />
                  <MenuItem value="3" primaryText="Defacto" />
                  <MenuItem value="4" primaryText="Separated" />
                  <MenuItem value="5" primaryText="Divorced" />
                  <MenuItem value="6" primaryText="Widowed" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-nationality"
                  name="nationality"
                  component={renderSelectField}
                  label="Nationality"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="Australia" />
                  <MenuItem value="2" primaryText="Indonesia" />
                  <MenuItem value="3" primaryText="Vietnam" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-email" fullWidth={true} name="Email" component={renderTextField} label="Email" />
              </div>
              <div className="col-xs-6">
                <Field id="rms-emp-details-phone-number" fullWidth={true} name="Phone No." component={renderTextField} label="Phone No." />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-grade"
                  name="grade"
                  component={renderSelectField}
                  label="Grade"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="JP" />
                  <MenuItem value="2" primaryText="PG" />
                  <MenuItem value="3" primaryText="AP" />
                  <MenuItem value="4" primaryText="AN" />
                </Field>
              </div>
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-status"
                  name="status"
                  component={renderSelectField}
                  label="Status"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="Permanent" />
                  <MenuItem value="2" primaryText="Contract" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-hire-date" fullWidth={true} name="hireDate" component={DatePicker} format={null} hintText="Hire Date" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-division"
                  name="division"
                  component={renderSelectField}
                  label="Division"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="CDC" />
                  <MenuItem value="2" primaryText="SWD Red" />
                  <MenuItem value="3" primaryText="SWD Blue" />
                  <MenuItem value="4" primaryText="SWD Purple" />
                </Field>
              </div>
              <div className="col-xs-6">
                <Field
                  id="rms-emp-details-office"
                  name="office"
                  component={renderSelectField}
                  label="Office"
                  fullWidth={true}
                >
                  <MenuItem value="1" primaryText="Bali" />
                  <MenuItem value="2" primaryText="Bandung" />
                  <MenuItem value="3" primaryText="Jakarta" />
                  <MenuItem value="4" primaryText="Yogyakarta" />
                  <MenuItem value="5" primaryText="Hanoi" />
                </Field>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <Field id="rms-emp-details-sub-division" fullWidth={true} name="Sub Division" component={renderTextField} label="Sub Division" />
              </div>
            </div>
          </div>
          <div className="center-xs col-xs-2">
            <Avatar size={100}>Y</Avatar>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'EmployeeDetailsForm',
})(EmployeeDetails);