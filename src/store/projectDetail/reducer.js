import { SET_PROJECTDETAIL_VISIBLE, SET_PROJECTDETAIL_UNVISIBLE } from './actionTypes';

const projectDetail = {
  todo: false,
  ums: false
};

export default (state = projectDetail, action) => {
  switch(action.type) {
    case SET_PROJECTDETAIL_VISIBLE:
      return {
        ...state,
	[action.target]: action[action.target]
      };
    case SET_PROJECTDETAIL_UNVISIBLE:
      return {
        ...state,
	[action.target]: action[action.target]
      };
    default:
      return state;
  }
};

