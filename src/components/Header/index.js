import React, { useContext } from "react";
import { CardContext } from "../../context/CardContext";
<<<<<<< HEAD


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

=======
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

>>>>>>> train9
export default Header;
