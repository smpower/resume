import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { reducer as cardReducer } from './card/';
import { reducer as styleReducer } from './style/';
import { reducer as modalReducer } from './modal/';

const reducer = combineReducers({
  card: cardReducer,
  style: styleReducer,
  modal: modalReducer
});

export default createStore(reducer, devToolsEnhancer());

