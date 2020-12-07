import React, { useContext } from "react";
import { CardContext } from "../../context/CardContext";


const Header = () => {
  const { showNumberOfCards } = useContext(CardContext);
  return (
    <Header>
      <div className="Header">
        Количество карточек:{" "}
        <span className="badge badge-secondary">{showNumberOfCards()}</span>
      </div>
    </Header>
  );
};

export default Header;
