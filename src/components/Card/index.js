import React, { useEffect, useState } from 'react';
import './index.css';
import CardHeader from './CardHeader';
import CardBody from "./CardBody";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import Auxiliary from "../../hoc/Auxiliary";

const Card = (props) => {
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
          <Auxiliary>
            <div className={props.card.isChecked ? "card-checked" : "card"}>
              <CardHeader
                editMode={props.editMode}
                checked={props.isChecked}
                cardHead={props.card.head}
                tempHead={cardTempState.tempCards.head}
                view={props.isOnlyView}
                onCheck={props.onCheck}
                onChange={(event) => inputChangedHandler(event, "head")}
                onCancel={() => props.onCancel(props.card.id)}
                onSave={() => props.onSave(props.card.id, cardTempState.tempCards)}
                onEdit={props.onEdit}
        />
        <hr/>
              <CardBody
                editMode={props.editMode}
                cardBody={props.card.body}
                tempBody={cardTempState.tempCards.body}
                onChange={(event) => inputChangedHandler(event, "body")}
        />
      </div>
      </Auxiliary>
  );
};

export default withLoadingDelay(Card, "card-size");