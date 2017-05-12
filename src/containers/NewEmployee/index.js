import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DialogForm from '../../components/DialogForm';
import EmployeeDetails from './EmployeeDetails';
import {
  employee as employeeActions
} from '../../actions'

class NewEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmployeeDialogOpen: false
    };
  }

  handleSubmit = (evt, values) => {
    evt.preventDefault();
    console.log(values);
  }

  render() {
    const { dialogOpen, closeDialog, handleSaveEmployee } = this.props;
    const dialogFormProps = {
      components: {
        EmployeeDetails
      },
      handleSaveEmployee,
      handleClose: closeDialog,
      open: dialogOpen
    }

    return (
      <div>
        <DialogForm {...dialogFormProps} />
      </div>
    );
  }
}

NewEmployee.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  handleSaveEmployee: PropTypes.func.isRequired,
  employeeDetailsPayload: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  closeDialog: employeeActions.closeNewEmployeeDialog,
  handleSaveEmployee: employeeActions.requestCreateEmployee
};

const mapStateToProps = ({ employee, form }) => ({
  dialogOpen: employee && employee.newEmployeeDialogOpen,
  employeeDetailsPayload: form.EmployeeDetailsForm && form.EmployeeDetailsForm.values,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee);
