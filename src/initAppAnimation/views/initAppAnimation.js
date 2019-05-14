import React from 'react';
import './initAppAnimation.scss';

const cubeSurfaceAnimationState = [
  {
    type: 'front',
  },
  {
    type: 'back',
  },
  {
    type: 'top',
  },
  {
    type: 'right',
  },
  {
    type: 'bottom',
  },
  {
    type: 'left',
  }
];

export default () => (
  <div className="initApp">
    <div className="cube-container">
      <div className="cube animation-active">
	{
	  cubeSurfaceAnimationState.map((item, index) => {
	    return (
	      <div className={`${item.type} animation-active`} key={index}>
	      </div>
	    );
	  })
	}
	<div className="circle">
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	  <div className="surface"></div>
	</div>
      </div>
    </div>
    <p>正在初始化……</p>
  </div>
);

