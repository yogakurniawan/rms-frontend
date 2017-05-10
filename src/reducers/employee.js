import {
  LOAD_EMPLOYEES,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_ERROR
} from '../constants'

const initialState = {
  loadingEmployee: false,
  loadEmployeeError: null,
  employeeList: []
};

const reducer = (state = initialState, action) => {
  const { payload, error } = action;
  switch (action.type) {
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
    default:
      return state;
  }
}

export default reducer;
