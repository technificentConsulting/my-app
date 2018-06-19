
import React, { Component 
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Arminda 
Get it!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

rendercard() {
         return ( <div className="Card">                                 
<img src={sage} className="card-logo" alt="logo" /> $
         </div> );                                               
}
export default App;
