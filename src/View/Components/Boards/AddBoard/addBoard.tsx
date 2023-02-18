import React from "react";
import { Board } from "../boards";
import "./addBoard.scss";

export const AddBoard = (props: { setPressed: Function }) => {
  const clickHandler = () => {
    props.setPressed(true);
  };
  return (
    <div className="add-board-bg" onClick={clickHandler}>
      <h1 className="add-board-title">+</h1>
    </div>
  );
};
