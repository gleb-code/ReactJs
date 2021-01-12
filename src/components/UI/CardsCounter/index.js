import React, { useContext } from "react";
import { CardContext } from "../../../context/CardContext";

function CardsCounter() {
  const { showNumberOfCards } = useContext(CardContext);

  return (
    <h3 style={{ textAlign: "center" }}>
      Количество карточек:{" "}
      <span className="badge badge-secondary">{showNumberOfCards()}</span>
    </h3>
  );
}

export default CardsCounter;