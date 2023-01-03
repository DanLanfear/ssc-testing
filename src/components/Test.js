import Button from "react-bootstrap/Button";
import Timer from "./Timer";

function Test(props) {
  // shows a test entity
  // has name of tester, time left, button to end test
  return (
    <div className="row test-entity p-4 m-2 border rounded">
      {/* <div className="col test-info">Test ID: {props.test.id}</div> */}
      <div className="col test-info">Tester Name: {props.test.name}</div>
      <div className="col test-info">
        Time Left:&nbsp; <Timer time={props.test.timeLimit} />
      </div>
      <div className="col test-info">
        End Time:{" "}
        {props.test.endTime.toLocaleTimeString("en-US", {
          timeStyle: "short",
        })}
      </div>
      <div className="col test-info">
        <Button className="delete-btn" onClick={props.onClick} variant="danger">
          End Test
        </Button>
      </div>
    </div>
  );
}

export default Test;
