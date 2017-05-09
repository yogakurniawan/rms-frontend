import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddDialog from '../../components/AddDialog';

import { bindActionCreators} from 'redux'
//import * as actionCreators from '../../actions/employee'

import { employee } from '../../actions';

class Dialog extends React.Component {
  handleSubmit = (evt, values) => {
    evt.preventDefault();
    console.log(values);
  }

  render() {
    const { newEmployee, updateNewEmployeeProp } = this.props;
    const newEmployeeProps = {
      newEmployee,
      updateNewEmployeeProp
    }
    return (
      <div>
        <AddDialog {... newEmployeeProps} />
      </div>
    );
  }
}

Dialog.propTypes = {
  newEmployee: PropTypes.object
};

const mapDispatchToProps = {
  updateNewEmployeeProp : employee.updateNewEmployeeProp
};

const mapStateToProps = (state) => ({
  newEmployee: state.employee.newEmployee
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
