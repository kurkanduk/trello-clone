import React from "react";
import { board } from "./board";
import "./boards.scss";
import DeleteBoardButton from "../DeleteBoard/deleteBoardButton";
import { Link } from "react-router-dom";
export const Board = (data: board) => {
  return (
    <div className="board-bg" key={data.id}>
      <div>
        <Link to={"/home/" + data.id}>
          <h1 className="board-title">{data.data.name}</h1>
        </Link>
      </div>
      <DeleteBoardButton id={data.id}></DeleteBoardButton>
    </div>
  );
};
