import React from 'react';

import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


class DetailEmployee extends React.Component {

  constructor(props, context) {
      super(props, context);
  }

  handleChange(prop, value){
    let updatedEmployee = Object.assign({}, this.props.newEmployee, {[prop]: value});
    this.props.updateNewEmployeeProp(prop, value);
  }

  render(){
    return(
      <div>
        <h2>Employee</h2>

        <div className="content" >
            <input type="hidden" ref="id" value={this.props.newEmployee.id}/>
            <TextField
              value={this.props.newEmployee.firstName}
              floatingLabelText="First Name"
              onChange={(event) => this.handleChange('firstName', event.target.value)}
              disabled={this.props.disabled}
            /><br />
            <TextField
              value={this.props.newEmployee.lastName}
              floatingLabelText="Last Name"
              onChange={(event) => this.handleChange('lastName', event.target.value)}
              disabled={this.props.disabled}
            /><br />
            <SelectField
              value={this.props.newEmployee.gender}
              floatingLabelText="Gender"
              onChange={(event, index, value) =>  this.handleChange('gender', value)}
              disabled={this.props.disabled} >

            </SelectField><br />
            <DatePicker
              value={this.props.newEmployee.dob}
              floatingLabelText="Date of Birth"
              onChange={(event, date) => this.handleChange('dob', date)}
              autoOk={true}
              disabled={this.props.disabled}
            />
            <SelectField
              value={this.props.newEmployee.maritalStatus}
              floatingLabelText="Marital Status"
              onChange={(event, index, value) =>  this.handleChange('maritalStatus', value)}
              disabled={this.props.disabled}>

            </SelectField><br />
            <SelectField
              value={this.props.newEmployee.nationality}
              floatingLabelText="Nationality"
              onChange={(event, index, value) => this.handleChange('nationality', value)}
              disabled={this.props.disabled}>

            </SelectField><br />
            <TextField
              value={this.props.newEmployee.email}
              floatingLabelText="Email"
              onChange={(event) => this.handleChange('email', event.target.value)}
              disabled={this.props.disabled}
            /><br />
            <TextField
              value={this.props.newEmployee.phone}
              floatingLabelText="Phone"
              onChange={(event) => this.handleChange('phone', event.target.value)}
              disabled={this.props.disabled}
            /><br />
          </div>
          <div className="content">
            <SelectField
              value={this.props.newEmployee.grade}
              floatingLabelText="Grade"
              onChange={(event, index, value) =>  this.handleChange('grade', value)}
              disabled={this.props.disabled} >

            </SelectField><br />
            <SelectField
              value={this.props.newEmployee.division}
              floatingLabelText="Division"
              onChange={(event, index, value) =>  this.handleChange('division', value)}
              disabled={this.props.disabled} >

            </SelectField><br />
            <TextField
              value={this.props.newEmployee.subDivision}
              floatingLabelText="Sub Division"
              onChange={(event) => this.handleChange('subDivision', event.target.value)}
              disabled={this.props.disabled}
            /><br />
            <SelectField
              value={this.props.newEmployee.status}
              floatingLabelText="Status"
              onChange={(event, index, value) =>  this.handleChange('status', value)}
              disabled={this.props.disabled} >

            </SelectField><br />
            <DatePicker
              value={this.props.newEmployee.hireDate}
              floatingLabelText="Hire Date"
              onChange={(event, date) =>  this.handleChange('hireDate', date)}
              autoOk={true}
              disabled={this.props.disabled}
            />
            <SelectField
              value={this.props.newEmployee.office}
              floatingLabelText="Office"
              onChange={(event, index, value) =>  this.handleChange('office', value)}
              disabled={this.props.disabled} >

            </SelectField><br /><br /><br />
          </div>
          <div className="content">
            <Avatar size={100}>{String(this.props.newEmployee.firstName).charAt(0)}</Avatar>
          </div>
      </div>
    );
  }
}

export default DetailEmployee;
