import { SET_PROJECTDETAIL_VISIBLE, SET_PROJECTDETAIL_UNVISIBLE, } from './actionTypes';

export const visible = (target) => ({
  type: SET_PROJECTDETAIL_VISIBLE,
  [target]: true,
  target
});

export const unvisible = (target) => ({
  type: SET_PROJECTDETAIL_UNVISIBLE,
  [target]: false,
  target
});

