import appBackgroundImage from '../../images/background.jpg';
import cardBackgroundImage from '../../images/card_background.png';

const styleState = {
  appBackground: {
    background: `url(${appBackgroundImage}) no-repeat center center`,
    backgroundSize: 'center center'
  },
  cardBackground: {
    background: `url(${cardBackgroundImage}) no-repeat center top`,
    backgroundSize: 'center center'
  }
};

export default (state = styleState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
