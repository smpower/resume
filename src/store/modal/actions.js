import { SET_MODAL_VISIBLE, SET_MODAL_UNVISIBLE } from './actionTypes';

export const visible = (which) => ({
  type: SET_MODAL_VISIBLE,
  isModalVisible: true,
  which
});

export const unvisible = () => ({
  type: SET_MODAL_UNVISIBLE,
  isModalVisible: false
});

