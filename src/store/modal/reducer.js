import { SET_MODAL_VISIBLE, SET_MODAL_UNVISIBLE } from './actionTypes';

export default (state = {isModalVisible: false, which: ''}, action) => {
  switch(action.type) {
    case SET_MODAL_VISIBLE:
      return {
	...state,
	isModalVisible: action.isModalVisible,
	which: action.which
      };
    case SET_MODAL_UNVISIBLE:
      return {
	...state,
	isModalVisible: action.isModalVisible,
	which: ''
      };
    default:
      return state;
  }
};
