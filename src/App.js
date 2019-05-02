import React from 'react';
import { view as Navigation } from './navigation/';
import { view as Home } from './home/';
import { view as Resume } from './resume/';
import { view as Skill } from './skill/';
import { view as Portfolio } from './portfolio/';
import { view as Contact } from './contact/';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main">
	<Navigation />
	<Home />
	<Resume />
	<Skill />
	<Portfolio />
	<Contact />
      </div>
    </div>
  );
}

export default App;
