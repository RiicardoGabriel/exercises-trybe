import { RECEIVE_PERSONAL_DATA } from '../actions/actions';

const INITIAL_STATE = {
  personalData: {},
};

const personalReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_PERSONAL_DATA:
    return {
      ...state,
      personalData: { ...state.personalData, ...action.payload },
    };
  default:
    return state;
  }
};

export default personalReduce;
