import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon";

const fn = () => {
  console.log('fn')
}

ReactDOM.render(
  <div>
    <Icon name="youtube" onClick={fn} />
  </div>,
  document.getElementById("root")
);
