import React from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { auth } from '../../actions'
import { Layout } from '../../components/Layout';
import Tabs from '../../components/Tabs';
import EmployeeList from '../../components/EmployeeList';
import './Main.css';

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
      logout: this.handleLogout,
      userInfo: qs.parse(Cookie.get('userInfo'))
    };
    return (
      <Layout className="Main" {...layoutProps}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4" style={{ paddingRight: 0 }}>
            <EmployeeList {...employeeListProps} />
            <FloatingActionButton className="Main__AddEmployeeIcon" secondary={true}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8" style={{ paddingLeft: 0 }}>
            <Tabs />
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
