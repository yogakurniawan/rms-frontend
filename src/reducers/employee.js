import { FETCH_EMPLOYEES } from '../constants'

const initialState = {
  employeeList: [
    {
      id: 1,
      fullName: "Albertus Mahaputra",
      jobFamily: "SE",
      grade: "PG",
      currentProject: "CDC Asterx",
      baseOffice: "Bali",
      phoneNumber: "+6281234567890"
    },
    {
      id: 2,
      fullName: "Karena Cindy Alika",
      jobFamily: "SE",
      grade: "AP",
      currentProject: "SWD Pink",
      baseOffice: "Yogyakarta",
      phoneNumber: "+6281234567890"
    }
  ]
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
