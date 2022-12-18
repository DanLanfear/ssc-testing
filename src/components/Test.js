import React from "react";
import Button from "react-bootstrap/Button";

function Test(props) {
  // shows a test entity
  // has name of tester, time left, button to end test
  return (
    <div className="row test-entity">
      <div className="col">Test ID: {props.test.id}</div>
      <div className="col">Tester Name: {props.test.name}</div>
      <div className="col">Time Limit (Minutes): {props.test.timeLimit}</div>
      <div className="col">
        <Button variant="danger">delete</Button>
      </div>
    </div>
  );
}

export default Test;
