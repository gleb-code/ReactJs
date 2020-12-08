import React, { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import './index.css'

const Header = () => {
  const { showNumberOfCards } = useContext(CardContext);
  return (
    <div className = "Header">
      <h3>
        Количество карточек:{" "}
        <span className="badge badge-secondary">{showNumberOfCards()}</span>
      </h3>
    </div>
  );
};

export default Header;
