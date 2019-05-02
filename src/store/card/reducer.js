import { SET_CARD_VISIBLE, SET_CARD_UNVISIBLE } from './actionTypes';

const test = 'test'
const cardState = {
  isHomeVisible: true,
  isResumeVisible: false,
  isSkillVisible: false,
  isPortfolioVisible: false,
  isContactVisible: false,
};

export default (state = cardState, action) => {
  switch(action.type) {
    case SET_CARD_VISIBLE:
      return {
        ...state,
	...action.target
      };
    case SET_CARD_UNVISIBLE:
      return {
        ...state,
      };
    default: 
      return state;
  }
};

