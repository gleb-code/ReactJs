import React, { useState } from "react";
import BtnSuccess from "../../components/UI/Buttons/BtnSuccess";
import BtnDanger from "../../components/UI/Buttons/BtnDanger";
import "./index.css";

const NewCard = (props) => {
  const [card, setCard] = useState({
    Number: "",
    Name: "",
    About: "",
    isChecked: false,
    isEditMode: false,
  });

  const inputChangedHandler = (event, property) => {
    const newCard = { ...card };
    newCard[property] = event.target.value;
    setCard(newCard);
  };

  return (
    <div className="add-card">
      <p className="add-card-item">Добавить карточку</p>
      <div className="add-item">
        <p>Заголовок карточки</p>
        <input
          type="text"
          placeholder="Введите заголовок"
          onChange={(event) => inputChangedHandler(event, "Name")}
        />
      </div>
      <div className="add-item">
        <p>Текст карточки</p>
        <input
          type="text"
          placeholder="Введите текст"
          onChange={(event) => inputChangedHandler(event, "About")}
        />
      </div>
      <div className="buttons">
        <BtnSuccess
          size={{ height: "30px" }}
          onSuccess={() => props.onAddCardHandler(props.cards, card)}
        >
          Добавить
        </BtnSuccess>
        <BtnDanger size={{ height: "30px" }} onDanger={props.onClose}>
          Завершить
        </BtnDanger>
      </div>
    </div>
  );
};

export default NewCard;
