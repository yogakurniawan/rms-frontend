import { FETCH_EMPLOYEES } from '../constants'

const initialState = {
  employeeList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employeeList: action.employees
      };
    default:
      return state;
  }
}

export default reducer;
