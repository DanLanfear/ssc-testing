import React from "react";

function Test(props) {
  // shows a test entity
  // has name of tester, time left, button to end test
  return (
    <div className="test-entity">
      {props.test.id} {props.test.name} {props.test.timeLimit}
      <button>delete</button>
    </div>
  );
}

export default Test;
