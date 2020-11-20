import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import CardList from "../components/CardList";
import Header from '../components/Header';
import NewCard from "./NewCard";
import Modal from "../components/UI/Modal";
import BtnSuccess from "../components/UI/Buttons/BtnSuccess";
import BtnDanger from "../components/UI/Buttons/BtnDanger";
import './App.css';

const StyledCheckbox = styled.input`
  cursor: pointer;
  margin-left: 10px;
`;
class App extends Component {
  state = {
    cards: [
      {
        id: "1",
        head: "Card 1",
        body: "Some text on card 1",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "2",
        head: "Card 2",
        body: "Some text on card 2",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "3",
        head: "Card 3",
        body: "Some text on card 3",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "4",
        head: "Card 4",
        body: "Some text on card 4",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "5",
        head: "Card 5",
        body: "Some text on card 5",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "6",
        head: "Card 6",
        body: "Some text on card 6",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "7",
        head: "Card 7",
        body: "Some text on card 7",
        isChecked: false,
        isEditMode: false,
      },
      {
        id: "8",
        head: "Card 8",
        body: "Some text on card  8",
        isChecked: false,
        isEditMode: false,
      },
    ],
    isOnlyViewMode: false,
    showAddingCard: false,
  };

  onlyViewModeToggle = () => {
    this.setState({ isOnlyViewMode: !this.state.isOnlyViewMode });
  };

  editModeEnabled = (id) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedCard,
      isChecked: false,
      isEditMode: true,
    };
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };

  deleteCardsHandler = () => {
    let updatedCards = [...this.state.cards].filter((card) => !card.isChecked);
    this.setState({ cards: updatedCards });
  };

  cardCheckedHandler = (id) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedCard,
      isChecked: !updatedCards[cardIndex].isChecked,
    };
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };

  saveChanges = (id, updatedTempCard) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard = {
      ...updatedTempCard,
      isEditMode: false,
    };
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };

  cancelChanges = (id) => {
    const updatedCards = [...this.state.cards];
    const cardIndex = updatedCards.findIndex((c) => {
      return c.id === id;
    });
    let updatedCard = updatedCards[cardIndex];
    updatedCard.isEditMode = false;
    updatedCards[cardIndex] = updatedCard;
    this.setState({ cards: updatedCards });
  };
  addCardHandler = (newCard) => {
    const card = { ...newCard };
    card.id = uuidv4();
    this.setState({ cards: [...this.state.cards, card] });
  };

  showAddingCardHandler = () => {
    this.setState({ showAddingCard: true });
  };

  closeAddingCardHandler = () => {
    this.setState({ showAddingCard: false });
  };


  render() {
    let newCard = (
      <Modal
        show={this.state.showAddingCard}
        onClose={this.closeAddingCardHandler}
      >
        <NewCard
          onAdd={this.addCardHandler}
          onClose={this.closeAddingCardHandler}
        />
      </Modal>
    );
    if (this.state.isOnlyViewMode) {
      newCard = null;
    }
    return (
      <div>
        <Header />
        <div className="container">
          <div className="view-mode">
            <p>Только просмотр</p>
            <StyledCheckbox
              type="checkbox"
              onChange={this.onlyViewModeToggle}
            />
          </div>
          <div className="container_buttons">
            <BtnSuccess
              size={{ height: "40px" }}
              onSuccess={this.showAddingCardHandler}
              isDisabled={this.state.isOnlyViewMode}
            >
              Добавить карточку
            </BtnSuccess>
            <BtnDanger
              size={{ height: "40px" }}
              onDanger={this.deleteCardsHandler}
              isDisabled={this.state.isOnlyViewMode}
            >
              Удалить выбранные карточки
            </BtnDanger>
          </div>
        </div>
        {newCard}
        <CardList
          cards={this.state.cards}
          isOnlyView={this.state.isOnlyViewMode}
          onCheck={this.cardCheckedHandler}
          onSave={this.saveChanges}
          onCancel={this.cancelChanges}
          onEdit={this.editModeEnabled}
        />
      </div>
    );
  }
}

export default App;