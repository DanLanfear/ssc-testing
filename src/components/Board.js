import React from "react";
import Test from "./Test";
import FormModal from "./FormModal";

class Board extends React.Component {
  // constructor
  // sets state
  constructor(props) {
    super(props);
    this.state = {
      MAX_TESTS: 20,
      tests: Array(this.MAX_TESTS),
      requestURL: "https://ssc-testing-oweokusdsq-uc.a.run.app",
      // requestURL: "http://localhost:5000",
    };

    this.addTest = this.addTest.bind(this);

    for (let i = 0; i < this.state.MAX_TESTS; i++)
      this.state.tests[i] = {
        id: i,
        active: false,
      };
  }

  getTests() {
    fetch(this.state.requestURL + "/tests")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          const tests = this.state.tests.slice();
          for (let i = 0; i < this.state.MAX_TESTS; i++)
            tests[i] = {
              active: false,
            };
          for (let i = 0; i < result.length; i++) {
            tests[result[i].id] = {
              id: result[i].id,
              name: result[i].name,
              startTime: result[i].start,
              endTime: result[i].end,
              active: true,
            };
          }

          this.setState({
            tests: tests,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getTests();
  }

  /**
   * Disables a test in the boards state
   * @param {int} i index of the test in the array
   */
  handleClick(i) {
    //delete request of the id test that is clicked
    fetch(this.state.requestURL + "/tests/" + i, {
      method: "DELETE",
    }).then(() => {
      console.log("delete happened");
      this.getTests();
    });
    //fetch the tests again to update
  }

  /**
   * Renders one test component on the screen if it is not null
   * @param {int} i the index of the test in the array
   * @returns a test component
   */
  renderTest(i) {
    if (this.state.tests[i].active)
      return (
        <Test test={this.state.tests[i]} onClick={() => this.handleClick(i)} />
      );
  }

  addTest(index, name, endTime) {
    // create json body for the request
    let startTime = new Date();
    let reqBody = JSON.stringify({
      id: index.toString(),
      name: name,
      start: startTime,
      end: endTime,
    });

    // use fetch method to fulfill post request
    fetch(this.state.requestURL + "/tests/" + index, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: reqBody,
    }).then(() => {
      this.getTests();
    });
  }

  handleSubmit = (name, timeLimit) => {
    // find the earliest index that is available
    let firstIndex = -1;
    for (let i = 0; i < this.state.MAX_TESTS; i++) {
      if (!this.state.tests[i].active) {
        firstIndex = i;
        break;
      }
    }
    if (firstIndex === -1) {
      console.log("All the tests are full");
      return;
    }
    this.addTest(firstIndex, name, timeLimit);
    this.props.handleClose();
  };

  /**
   * Render function
   * @returns a container div that has child tests if they are active
   */
  render() {
    return (
      <div className="container">
        <FormModal
          show={this.props.modalShow}
          onHide={this.props.handleClose}
          handleSubmit={this.handleSubmit}
        />
        {this.renderTest(0)}
        {this.renderTest(1)}
        {this.renderTest(2)}
        {this.renderTest(3)}
        {this.renderTest(4)}
        {this.renderTest(5)}
        {this.renderTest(6)}
        {this.renderTest(7)}
        {this.renderTest(8)}
        {this.renderTest(9)}
        {this.renderTest(10)}
        {this.renderTest(11)}
        {this.renderTest(12)}
        {this.renderTest(13)}
        {this.renderTest(14)}
        {this.renderTest(15)}
        {this.renderTest(16)}
        {this.renderTest(17)}
        {this.renderTest(18)}
        {this.renderTest(19)}
      </div>
    );
  }
}

export default Board;
