import React, { useEffect, useContext } from "react";
import { BsPencil, BsCheck, BsX } from "react-icons/bs";
import PropTypes from "prop-types";
import { CardContext } from "../../../context/CardContext";
import "./index.css";

const CardHeader = (props) => {
  const { cardCheckedHandler, editModeEnabled } = useContext(CardContext);

  useEffect(() => {
    props.onCancel();
  }, [props.view]);// eslint-disable-line react-hooks/exhaustive-deps

  let pencil = null;
  if (!props.view) {
    pencil = (
      <BsPencil className="right" onClick={() => editModeEnabled(props.id)} />
    );
  }

  return (
    <div className="card-header">
      {!props.editMode ? (
        <div>
          <p className="header-text">{props.cardHead}</p>
          <input
            className="right"
            id="check"
            type="checkbox"
            onChange={() => cardCheckedHandler(props.id)}
            checked={props.checked}
          />
          {pencil}
        </div>
      ) : (
        <div>
          <input
            type="text"
            className="updated-header"
            value={props.tempHead}
            onChange={props.onChange}
          />
          <BsX className="red" onClick={props.onCancel} />
          <BsCheck className="green" onClick={props.onSave} />
        </div>
      )}
    </div>
  );
};

CardHeader.propTypes = {
  view: PropTypes.bool,
  cardHead: PropTypes.string,
  editMode: PropTypes.bool,
  id: PropTypes.string,
  checked: PropTypes.bool,
  tempHead: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};

export default CardHeader;
