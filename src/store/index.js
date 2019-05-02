import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { reducer as cardReducer } from './card/';

const reducer = combineReducers({
  card: cardReducer
});

export default createStore(reducer, devToolsEnhancer());

