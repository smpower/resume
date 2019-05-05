import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { reducer as cardReducer } from './card/';
import { reducer as styleReducer } from './style/';

const reducer = combineReducers({
  card: cardReducer,
  style: styleReducer
});

export default createStore(reducer, devToolsEnhancer());

