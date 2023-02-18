import { useEffect, useState } from "react";
import { db } from "../../../firebase/initFirebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import addBoard from "../AddForm/addBoard";
import { getAuth } from "firebase/auth";

import "../Boards/boards.scss";
import "./home.scss";

import { Board } from "../Boards/boards";
import { Form } from "../Form/Form";
import { AddBoard } from "../Boards/AddBoard/addBoard";

export const HomePage = () => {
  const auth = getAuth();
  const user:any = auth.currentUser;

  const [boards, setBoards] = useState<any>([]);
  const [isPressed, setPressed] = useState<boolean>(false);
  useEffect(() => {
    const q = query(collection(db, "users", user.uid ,"boards"));
    onSnapshot(q, (querySnapshot) => {
      setBoards(
        querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  let showForm = () => {
    if (isPressed) {
      setPressed(false);
    } else {
      setPressed(true);
    }
  };
  return (
    <div className="home-bg">
      <div className="boards-container">
        {boards.map((e: any) => {
          return <Board {...e}></Board>;
        })}
        <AddBoard setPressed={setPressed}></AddBoard>
        {isPressed ? (
          <Form setShow={setPressed} sendData={addBoard}></Form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
