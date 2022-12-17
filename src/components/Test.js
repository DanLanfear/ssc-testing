import React from "react";

function Test(props) {
  // shows a test entity
  // has name of tester, time left, button to end test
  return (
    <div>
      {props.name} {props.time}
      <button></button>
    </div>
  );
}

export default Test;
