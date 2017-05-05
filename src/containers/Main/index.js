import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeList from '../../components/EmployeeList';

class Main extends React.Component {
  handleSubmit = (evt, values) => {
    evt.preventDefault();
    console.log(values);
  }

  render() {
    const { employeeList } = this.props;
    const employeeListProps = {
      list: employeeList
    }
    return (
      <div>
        <div className="row">
          <div className="col-xs-5">
            <EmployeeList {...employeeListProps} />
          </div>
          <div className="col-xs-7">
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  employeeList: PropTypes.array
};

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  employeeList: state.employee.employeeList
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
