import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_FORM_RESET
} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return initialState;
    case EMPLOYEE_SAVE_SUCCESS:
      return initialState;
    case EMPLOYEE_FORM_RESET:
      return initialState;
    default:
      return state;
  }
};
