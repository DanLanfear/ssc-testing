import React from "react";
import ReactDOM from "react";
import { Form, Button } from "react-bootstrap";

class TestForm extends React.Component {
  // const nameInput = useRef(null);
  // const hoursInput = useRef(null);
  // const minutesInput = useRef(null);

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hours: 0,
      minutes: 0,
    };
    this.updateName = this.updateName.bind(this);
    this.updateHours = this.updateHours.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.submitTest = this.submitTest.bind(this);

    // this.nameInput = React.createRef();
    // this.hoursInput = React.createRef();
    // this.minutesInput = React.createRef();
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }
  updateHours(event) {
    this.setState({ hours: event.target.value });
  }

  updateMinutes(event) {
    this.setState({ minutes: event.target.value });
  }

  submitTest(event) {
    event.preventDefault();
    this.props.name = this.state.name;
    this.props.hours = this.state.hours;
    this.props.minutes = this.state.hours;
    // this.props.test = {
    //   name: this.state.name,
    //   hours: this.state.hours,
    //   mnutes: this.state.minutes,
    // };
    console.log(this.state.name);
    console.log(this.state.hours);
    console.log(this.state.minutes);
  }

  // getFormValues() {
  //   let nameValue = ReactDOM.findDOMNode(this.refs.nameInput);
  //   // let hoursValue = ReactDOM.findDOMNode(this.refs.hoursInput);
  //   // let minutesValue = ReactDOM.findDOMNode(this.refs.minutesInput);
  //   console.log(nameValue);
  //   // return { nameValue, hoursValue, minutesValue };
  // }

  // shows a test entity
  // has name of tester, time left, button to end test
  render() {
    return (
      // <Form>
      //   <Form.Group className="mb-3" controlId="formBasicName">
      //     <Form.Label>Tester Name</Form.Label>
      //     <Form.Control
      //       type="text"
      //       placeholder="John Smith"
      //       ref={this.nameInput}
      //     />
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicHours">
      //     <Form.Label>Hours</Form.Label>
      //     <Form.Control type="number" placeholder="1" ref={this.hoursInput} />
      //   </Form.Group>

      //   <Form.Group className="mb-3" controlId="formBasicMinutes">
      //     <Form.Label>Minutes</Form.Label>
      //     <Form.Control
      //       type="number"
      //       placeholder="60"
      //       ref={this.minutesInput}
      //     />
      //   </Form.Group>
      //   <Button variant="primary" onClick={this.getFormValues}>
      //     Submit
      //   </Button>
      // </Form>
      <form>
        <label>
          Name of Tester: <br />
          <input
            type="text"
            placeholder="John Smith"
            onChange={this.updateName}
          />
        </label>
        <label>
          Hours <br />
          <input type="number" placeholder="0" onChange={this.updateHours} />
        </label>
        <label>
          Minutes <br />
          <input type="number" placeholder="15" onChange={this.updateMinutes} />
        </label>
        <Button
          onClick={this.props.handleSubmit(
            this.state.name,
            this.state.hours,
            this.state.minutes
          )}
        >
          Start Test
        </Button>
      </form>
    );
  }
}

export default TestForm;
