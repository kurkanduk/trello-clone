import React, { useEffect, useState } from "react";
import "./addForm.scss";
import addBoard from "../../DbRequests/AddBoard";
import { checkValidity } from "./boardNameValidation";

let AddForm = (setShow: any) => {
  let [name, setName] = useState<string>("");
  let [isValid, setIsValid] = useState<boolean>(true);
  let handleName = (e: any) => {
    setName(e.target.value);
    if (e.target.value != "") {
      setIsValid(true);
    }
  };
  let sendBoard = () => {
    if (checkValidity(name)) {
      addBoard({ name: name });
      setShow.setShow(false);
    } else {
      setIsValid(false);
    }
  };
  let close = () => {
    setShow.setShow(false);
  };

  return (
    <div className="form-bg">
      <label className="inp">
        <span className="name">Name:</span>
        <input
          onChange={handleName}
          className={`${isValid ? "input" : "inputInvalid"}`}
          type="text"
          placeholder=""
        />
      </label>
      <button className="send" onClick={sendBoard}>
        Send
      </button>
      <button className="send" onClick={close}>
        Close
      </button>
    </div>
  );
};
export default AddForm;
