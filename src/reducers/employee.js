import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_ERROR,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG
} from '../constants'

const initialState = {
  addingNewEmployee: false,
  addNewEmployeeError: null,
  addedEmployee: null,
  newEmployeeDialogOpen: false,
  loadingEmployee: false,
  loadEmployeeError: null,
  employeeList: []
};

const reducer = (state = initialState, action) => {
  const { payload, error } = action;
  switch (action.type) {
    case OPEN_NEW_EMPLOYEE_DIALOG:
      return {
        ...state,
        newEmployeeDialogOpen: true
      };
    case CLOSE_NEW_EMPLOYEE_DIALOG:
      return {
        ...state,
        newEmployeeDialogOpen: false
      };
    case LOAD_EMPLOYEES:
      return {
        ...state,
        loadingEmployee: true
      };
    case LOAD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loadingEmployee: false,
        loadEmployeeError: null,
        employeeList: payload
      };
    case LOAD_EMPLOYEES_ERROR:
      return {
        ...state,
        loadingEmployee: false,
        employeeList: null,
        loadEmployeeError: error
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        addingNewEmployee: true
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        addingNewEmployee: false,
        addNewEmployeeError: null,
        addedEmployee: payload
      };
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        addingNewEmployee: false,
        addedEmployee: null,
        addNewEmployeeError: error
      };
    default:
      return state;
  }
}

export default reducer;
