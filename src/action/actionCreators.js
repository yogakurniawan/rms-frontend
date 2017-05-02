import axios from 'axios';
import * as constants from '../constants/index';

export function requestGetEmployee(){
  return function (dispatch) {
    return axios.get(constants.BASE_URL+'/api/employee/all')
      .then(response => {
        dispatch(fetchEmployee(response.data));
        console.log(response.data)
      }).catch(error => {
        console.log(error.response);
      });
  };
};

export function requestGetEmployeeByName(name){
  return function (dispatch) {
    return axios.get(constants.BASE_URL+'/api/employee/search/name/'+name)
      .then(response => {
        dispatch(fetchEmployee(response.data));
      }).catch(error => {
        console.log(error.response);
      });
  };
};

export function requestPostEmployee(employee){
  return function (dispatch){
    return axios.post(constants.BASE_URL+'/api/employee/', employee)
      .then(response => {
        dispatch(createNewEmployee(response.data));
      }).catch(error => {
        console.log(error.response);
      });
  };
};

export function requestPutEmployee(employee, index){
  return function(dispatch){
    return axios.put(constants.BASE_URL+'/api/employee/'+employee.id, employee)
      .then(response => {
        dispatch(updateEmployee(response.data, index));
      }).catch(error => {
        console.log(error.response);
      });
  };
}

export function requestDeleteEmployee(employee, index){
  return function(dispatch){
    return axios.delete(constants.BASE_URL+'/api/employee/'+employee.id)
      .then(response => {
        dispatch(deleteEmployee(index));
      }).catch(error => {
        console.log(error.response);
      });
  };
}

/*
 **
 EMPLOYEES
 **
 **
 */

export function createNewEmployee(employee){
  return{
    type: 'CREATE_NEW_EMPLOYEE',
    employee
  }
}

export function deleteEmployee(index){
  return{
    type: 'DELETE_EMPLOYEE',
    index
  }
}

export function fetchEmployee(employees) {
  return {
    type: 'FETCH_EMPLOYEES',
    employees
  }
};

export function updateEmployee(employee, index){
  return{
    type: 'UPDATE_EMPLOYEE',
    employee,
    index,
  }
}
