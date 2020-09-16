import React, {Component} from 'react';
import './App.css';

import Card from './components/Card';
import Header from './components/Header';


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
