import React, { useState, useEffect, useContext } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import { CardContext } from "../../context/CardContext";
import "./index.css";

const Card = (props) => {
  const { saveChanges, cancelChanges } = useContext(CardContext);

  const [cardTempState, setCardTempState] = useState({
    tempCards: {},
  });

  useEffect(() => {
    setCardTempState({ tempCards: props.card });
  }, [props.editMode]);// eslint-disable-line react-hooks/exhaustive-deps

  const inputChangedHandler = (event, property) => {
    const updatedTempCard = { ...cardTempState.tempCards };
    updatedTempCard[property] = event.target.value;
    setCardTempState({ tempCards: updatedTempCard });
  };

  return (
    <React.Fragment>
      <div className={props.card.isChecked ? "card-checked" : "card"}>
        <CardHeader
          id={props.card.id}
          editMode={props.editMode}
          checked={props.isChecked}
          cardHead={props.card.head}
          tempHead={cardTempState.tempCards.head}
          view={props.isOnlyView}
          onChange={(event) => inputChangedHandler(event, "head")}
          onSave={() => saveChanges(props.card.id, cardTempState.tempCards)}
          onCancel={() => cancelChanges(props.card.id)}
        />
        <hr/>
        <CardBody
          editMode={props.editMode}
          cardBody={props.card.body}
          tempBody={cardTempState.tempCards.body}
          onChange={(event) => inputChangedHandler(event, "body")}
        />
      </div>
    </React.Fragment>
  );
};

export default withLoadingDelay(Card, "card-size");