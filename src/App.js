import React, {Component} from 'react';
import './App.css';

import Card from './Card/Card';
import Header from './Header/Header';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="card">
          <Card />
        </div>
      </div>
    );
  }
    
}

export default App;
