import axios from 'axios';
import {
  // ADD_EMPLOYEE,
  // ADD_EMPLOYEE_SUCCESS,
  // ADD_EMPLOYEE_ERROR,
  // DELETE_EMPLOYEE,
  // DELETE_EMPLOYEE_SUCCESS,
  // DELETE_EMPLOYEE_ERROR,
  // UPDATE_EMPLOYEE,
  // UPDATE_EMPLOYEE_SUCCESS,
  // UPDATE_EMPLOYEE_ERROR,
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_ERROR,
  BASE_URL
} from '../constants';

const EMPLOYEE_API_URL = `${BASE_URL}/api/employee`;
const ALL_EMPLOYEE_URL = `${EMPLOYEE_API_URL}/all`;
// const EMPLOYEE_BY_NAME = `${EMPLOYEE_API_URL}/search/name`;

// const addEmployee = (employee) => {
//   return {
//     type: ADD_EMPLOYEE,
//     employee
//   }
// }

// const deleteEmployee = (index) => {
//   return {
//     type: DELETE_EMPLOYEE,
//     index
//   }
// }

// const updateEmployee = (employee, index) => {
//   return {
//     type: UPDATE_EMPLOYEE,
//     employee,
//     index,
//   }
// }

const loadEmployee = () => {
  return {
    type: LOAD_EMPLOYEES
  }
};

const loadEmployeeSuccess = (payload) => {
  return {
    type: LOAD_EMPLOYEES_SUCCESS,
    payload
  }
};

const loadEmployeeError = (error) => {
  return {
    type: LOAD_EMPLOYEES_ERROR,
    error
  }
};

const requestGetAllEmployees = () => {
  return (dispatch) => {
    dispatch(loadEmployee());
    return axios.get(ALL_EMPLOYEE_URL)
      .then((response) => {
        dispatch(loadEmployeeSuccess(response.data));
      }).catch((error) => {
        dispatch(loadEmployeeError(error.response));
      });
  };
};

// const requestGetEmployeeByName = (name) => {
//   return (dispatch) => {
//     return axios.get(`${EMPLOYEE_BY_NAME}/name`)
//       .then(response => {
//         dispatch(fetchEmployee(response.data));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// };

// const requestCreateEmployee = (employee) => {
//   return (dispatch) => {
//     return axios.post(`${EMPLOYEE_API_URL}`, employee)
//       .then(response => {
//         dispatch(addEmployee(response.data));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// };

// const requestUpdateEmployee = (employee, index) => {
//   return (dispatch) => {
//     return axios.put(`${EMPLOYEE_API_URL}/${employee.id}`, employee)
//       .then(response => {
//         dispatch(updateEmployee(response.data, index));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// }

// const requestDeleteEmployee = (employee, index) => {
//   return (dispatch) => {
//     return axios.delete(`${EMPLOYEE_API_URL}/${employee.id}`)
//       .then(response => {
//         dispatch(deleteEmployee(index));
//       }).catch(error => {
//         console.log(error.response);
//       });
//   };
// }

export default {
  requestGetAllEmployees,
  // requestGetEmployeeByName,
  // requestCreateEmployee,
  // requestUpdateEmployee,
  // requestDeleteEmployee
}
