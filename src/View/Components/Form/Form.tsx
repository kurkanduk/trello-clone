import { useState } from "react";
import "./form-style.scss";

export const Form = (prop: { setShow: Function; sendData: Function }) => {
  const [inputValue, setInputValue] = useState("");
  const closeHandler = () => {
    prop.setShow(false);
  };
  const submitHandler = () => {
    prop.sendData(inputValue);
    prop.setShow(false);
  };
  return (
    <div className="form-background">
      <label className="form-label">
        <p className="form-title">Name:</p>
        <input
          className="form-input"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
      </label>
      <div className="submit-button" onClick={submitHandler}>
        Send
      </div>
      <div className="close-button" onClick={closeHandler}>
        ✖
      </div>
    </div>
  );
};
