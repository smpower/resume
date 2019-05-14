import React from 'react';
import { Boundle } from './utilities/';

export default props => (
  <Boundle load={ () => import('./App.js') } initApp>
    { App => <App {...props} /> }
  </Boundle>
);
