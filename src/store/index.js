import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { reducer as cardReducer } from './card/';
import { reducer as styleReducer } from './style/';
import { reducer as modalReducer } from './modal/';
import { reducer as projectDetailReducer } from './projectDetail/';

const reducer = combineReducers({
  card: cardReducer,
  style: styleReducer,
  modal: modalReducer,
  projectDetail: projectDetailReducer
});

export default createStore(reducer, devToolsEnhancer());

