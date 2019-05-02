import { SET_CARD_VISIBLE, SET_CARD_UNVISIBLE } from './actionTypes';

export const visible = (target) => ({
  type: SET_CARD_VISIBLE,
  target
});

export const unvisible = () => ({
  type: SET_CARD_UNVISIBLE
});

