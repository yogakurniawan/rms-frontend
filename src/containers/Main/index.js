import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../../actions'
import { Layout } from '../../components/Layout';
import EmployeeList from '../../components/EmployeeList';

class Main extends React.Component {
  handleSubmit = (evt, values) => {
    evt.preventDefault();
    console.log(values);
  }

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { employeeList } = this.props;
    const employeeListProps = {
      list: employeeList
    };
    const layoutProps = {
      logout: this.handleLogout
    };
    return (
      <Layout {...layoutProps}>
        <div className="row">
          <div className="col-xs-5">
            <EmployeeList {...employeeListProps} />
          </div>
          <div className="col-xs-7">
          </div>
        </div>
      </Layout>
    );
  }
}

Main.propTypes = {
  employeeList: PropTypes.array,
  logout: PropTypes.func
};

const mapDispatchToProps = {
  logout: auth.logout
};

const mapStateToProps = (state) => ({
  employeeList: state.employee.employeeList
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
