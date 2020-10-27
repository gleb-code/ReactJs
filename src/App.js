import React, {Component} from 'react';
import './App.css';

import Card from './components/Card';
import Header from './components/Header';


class App extends Component {
  state = {
    cards: [
      { id: "1", head: "Card 1", body: "Some text" },
      { id: "2", head: "Card 2", body: "Some text" },
      { id: "3", head: "Card 3", body: "Some text" },
      { id: "4", head: "Card 4", body: "Some text" },
      { id: "5", head: "Card 5", body: "Some text" },
      { id: "6", head: "Card 6", body: "Some text" },
      { id: "7", head: "Card 7", body: "Some text" },
      { id :"8", head: "Card 8", body: "Some text" },
    ],
    isOnlyViewMode: false,
  };

  onlyViewModeToggle = () => {
    this.setState({ isOnlyViewMode: !this.state.isOnlyViewMode });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="view-mode">
          <p>Только просмотр</p>
          <input type="checkbox" onChange={this.onlyViewModeToggle} />
        </div>
        <div className="card-list">
          {this.state.cards.map((card) => {
            return (
              <div className="card" key={card.id}>
                <Card
                  head={card.head}
                  body={card.body}
                  viewMode={this.state.isOnlyViewMode}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
