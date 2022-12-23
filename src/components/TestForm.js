import React from "react";
import ReactDOM from "react";
import { Form, Button } from "react-bootstrap";

class TestForm extends React.Component {
  // const nameInput = useRef(null);
  // const hoursInput = useRef(null);
  // const minutesInput = useRef(null);

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.hoursInput = React.createRef();
    this.minutesInput = React.createRef();
  }

  getFormValues() {
    let nameValue = ReactDOM.findDOMNode(this.refs.nameInput);
    // let hoursValue = ReactDOM.findDOMNode(this.refs.hoursInput);
    // let minutesValue = ReactDOM.findDOMNode(this.refs.minutesInput);
    console.log(nameValue);
    // return { nameValue, hoursValue, minutesValue };
  }

  // shows a test entity
  // has name of tester, time left, button to end test
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Tester Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Smith"
            ref={this.nameInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHours">
          <Form.Label>Hours</Form.Label>
          <Form.Control type="number" placeholder="1" ref={this.hoursInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMinutes">
          <Form.Label>Minutes</Form.Label>
          <Form.Control
            type="number"
            placeholder="60"
            ref={this.minutesInput}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.getFormValues}>
          Submit
        </Button>
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
}

export default TestForm;
