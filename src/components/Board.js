import React from "react";
import Test from "./Test";

class Board extends React.Component {
  // constructor
  // sets state
  constructor(props) {
    super(props);
    this.state = {
      MAX_TESTS: 20,
      tests: Array(this.MAX_TESTS),
    };

    //Fill with dummy variables for now
    for (let i = 0; i < this.state.MAX_TESTS; i++)
      this.state.tests[i] = {
        id: i,
        name: "student " + (i + 1).toString(),
        timeLimit: "60",
      };
  }

  // handleClick

  /**
   * Renders one test component on the screen if it is not null
   * @param {int} i the index of the test information in the tests array
   * @returns a test component
   */
  renderTest(i) {
    if (this.state.tests[i].name != null)
      return <Test test={this.state.tests[i]} />;
  }

  /**
   *
   * @returns a container div that has child tests if they are active
   */
  render() {
    return (
      <div className="container">
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
