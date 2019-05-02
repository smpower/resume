import { SET_CARD_VISIBLE, SET_CARD_UNVISIBLE } from './actionTypes';

export const visible = (target) => {
  return {
    type: SET_CARD_VISIBLE,
    target: target,
    [target]: true
  };
};

export const unvisible = (target) => ({
  type: SET_CARD_UNVISIBLE,
  target: target,
  [target]: false
});

