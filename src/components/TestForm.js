import React from "react";
// import ReactDOM from "react";
import { Form, Button } from "react-bootstrap";

/**
 * Form for retrieving information from the user on tests
 */
class TestForm extends React.Component {
  /**
   * sets state to default, and binds functions
   * @param {*} props The props from the parent component
   */
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
  }

  /**
   * updates the state with the proper values
   * @param {*} event
   */
  updateName(event) {
    this.setState({ name: event.target.value });
  }

  /**
   * updates the state with the proper values
   * @param {*} event
   */
  updateHours(event) {
    this.setState({ hours: event.target.value });
  }

  /**
   * updates the state with the proper values
   * @param {*} event
   */
  updateMinutes(event) {
    this.setState({ minutes: event.target.value });
  }

  /**
   * shows the form that the user will fill out
   * @returns the form that will house the user input
   */
  render() {
    return (
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
          onClick={() =>
            this.props.handleSubmit(
              this.state.name,
              this.state.hours,
              this.state.minutes
            )
          }
        >
          Start Test
        </Button>
      </form>
    );
  }
}

export default TestForm;
