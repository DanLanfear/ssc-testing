import React from "react";
import { Form } from "react-bootstrap";

function TestForm(props) {
  // shows a test entity
  // has name of tester, time left, button to end test
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Tester Name</Form.Label>
        <Form.Control type="text" placeholder="John Smith" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicHours">
        <Form.Label>Hours</Form.Label>
        <Form.Control type="number" placeholder="1" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMinutes">
        <Form.Label>Minutes</Form.Label>
        <Form.Control type="number" placeholder="60" />
      </Form.Group>
    </Form>
    // <form onSubmit={props.onSubmit}>
    //   <label>
    //     Name of Tester:
    //     <input type="text" value={null} />
    //   </label>
    //   <label>
    //     Time Limit:
    //     <input type="number" value={null} /> Hours
    //     <input type="number" value={null} /> Minutes
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
  );
}

export default TestForm;
