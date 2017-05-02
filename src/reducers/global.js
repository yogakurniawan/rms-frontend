const initialState = {
  dummyGlobalState: false,
  employeeList: []
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES':
      return Object.assign({}, state, {
        employeeList : action.employees
      });
    default:
      return state;
  }
}

export default globalReducer;
