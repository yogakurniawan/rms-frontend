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
  ],
  newEmployee: {
    Id: null,
    firstName: '',
    lastName: '',
    gender: '',
    dob: null,
    nationality: '',
    maritalStatus: '',
    phone: '',
    subDivision: '',
    status: '',
    hireDate: null,
    grade: '',
    division: '',
    email: '',
    office: '',
    active: true,
    historyList: [{id: 0, startDate: null, endDate: null, name: '', role: '', description: ''}]
  }
};

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employeeList: action.employees
      };
    case 'UPDATE_NEW_EMPLOYEE_PROP':
      return {
        ...state,
        newEmployee: Object.assign({}, state.newEmployee, {
          [action.prop]: action.value
        })
      };
    default:
      return state;
  }
}

export default reducer;
