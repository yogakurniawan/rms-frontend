import {
  OPEN_NEW_EMPLOYEE_DIALOG,
  CLOSE_NEW_EMPLOYEE_DIALOG,
} from '../constants';

const openNewEmployeeDialog = () => {
  return {
    type: OPEN_NEW_EMPLOYEE_DIALOG
  }
};

const closeNewEmployeeDialog = () => {
  return {
    type: CLOSE_NEW_EMPLOYEE_DIALOG
  }
};


export default {
  openNewEmployeeDialog,
  closeNewEmployeeDialog
}
