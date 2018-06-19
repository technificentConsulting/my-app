import React, { Component
} from 'react';
import sage from './sage.svg';
 class Card extends React.Component {
 	 render() {
	 return ( <div className="Card"> 
          <img src={sage} className="card-logo" alt="logo" /> <h1 className="card-name">card</h1>
         </div> );
  }
}
