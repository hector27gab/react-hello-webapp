import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
``;

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const { store, actions } = useContext(Context);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <p>{store.firstData}</p>
        <input onChange={handleChange} />
        <button
          onClick={() => {
            actions.changeData(inputValue);
          }}
        >
          this button change the text
        </button>
      </div>
    </>
  );
};
