import axios from 'axios';
import * as constants from '../constants/index';

const createNewEmployee = (employee) => {
  return {
    type: 'CREATE_NEW_EMPLOYEE',
    employee
  }
}

const deleteEmployee = (index) => {
  return {
    type: 'DELETE_EMPLOYEE',
    index
  }
}

const fetchEmployee = (employees) => {
  return {
    type: 'FETCH_EMPLOYEES',
    employees
  }
};

const updateEmployee = (employee, index) => {
  return {
    type: 'UPDATE_EMPLOYEE',
    employee,
    index,
  }
}

const updateNewEmployeeProp = (prop, value) => {
  return {
    type: 'UPDATE_NEW_EMPLOYEE_PROP',
    prop,
    value
  }
}

const requestGetEmployee = () => {
  return (dispatch) => {
    return axios.get(constants.BASE_URL + '/api/employee/all')
      .then(response => {
        dispatch(fetchEmployee(response.data));
        console.log(response.data)
      }).catch(error => {
        console.log(error.response);
      });
  };
};

const requestGetEmployeeByName = (name) => {
  return (dispatch) => {
    return axios.get(constants.BASE_URL + '/api/employee/search/name/' + name)
      .then(response => {
        dispatch(fetchEmployee(response.data));
      }).catch(error => {
        console.log(error.response);
      });
  };
};

const requestPostEmployee = (employee) => {
  return (dispatch) => {
    return axios.post(constants.BASE_URL + '/api/employee/', employee)
      .then(response => {
        dispatch(createNewEmployee(response.data));
      }).catch(error => {
        console.log(error.response);
      });
  };
};

const requestPutEmployee = (employee, index) => {
  return (dispatch) => {
    return axios.put(constants.BASE_URL + '/api/employee/' + employee.id, employee)
      .then(response => {
        dispatch(updateEmployee(response.data, index));
      }).catch(error => {
        console.log(error.response);
      });
  };
}

const requestDeleteEmployee = (employee, index) => {
  return (dispatch) => {
    return axios.delete(constants.BASE_URL + '/api/employee/' + employee.id)
      .then(response => {
        dispatch(deleteEmployee(index));
      }).catch(error => {
        console.log(error.response);
      });
  };
}

export default {
  requestGetEmployee,
  requestGetEmployeeByName,
  requestPostEmployee,
  requestPutEmployee,
  requestDeleteEmployee,
  createNewEmployee,
  deleteEmployee,
  fetchEmployee,
  updateEmployee,
  updateNewEmployeeProp
}
