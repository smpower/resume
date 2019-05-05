import appBackgroundImage from '../../images/background.jpg';
import cardBackgroundImage from '../../images/card_background.png';
import cardBackgroundImage2 from '../../images/card_background2.png';

const styleState = {
  appBackground: {
    background: `url(${appBackgroundImage}) no-repeat center center`,
    backgroundSize: 'center center'
  },
  cardBackground: {
    background: `url(${cardBackgroundImage}) no-repeat center top`,
    backgroundSize: 'center center'
  },
  cardBackground2: {
    background: `url(${cardBackgroundImage2}) no-repeat center center #08aeac`,
    backgroundSize: 'center top'
  }
};

export default (state = styleState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
