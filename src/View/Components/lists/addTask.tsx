import { useState } from "react";
import { useParams } from "react-router";
import "./addTask.scss";
import addTask from "../../DbRequests/AddTaskToDb";

const AddTask = (tableId: any) => {
  let boardId = useParams();
  const [isClicked, setClick] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>("");
  let clickHandler = () => {
    if (!isClicked) {
      setClick(true);
    }
  };

  let submitHandler = () => {
    if (inputVal !== "") {
      addTask(boardId, tableId, inputVal);
      setClick(false);
      setInputVal("");
    }
  };
  return (
    <>
      {isClicked ? (
        <div className="addingTask" onClick={clickHandler}>
          <h1 className="titleAdd">What you want to add?</h1>
          <input
            className="inputAdd"
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          ></input>
          <div className="buttonsContainer">
            <button className="addingTaskButton" onClick={submitHandler}>
              Submit
            </button>
            <button
              className="closeAddingTaskButton"
              onClick={() => {
                setClick(false);
              }}
            >
              ✖
            </button>
          </div>
        </div>
      ) : (
        <div className="addTask" onClick={clickHandler}>
          + add new task!
        </div>
      )}
    </>
  );
};
export default AddTask;
