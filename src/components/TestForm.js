import React from "react";

function TestForm(props) {
  // shows a test entity
  // has name of tester, time left, button to end test
  return (
    <form onSubmit={null}>
      <label>
        Name of Tester:
        <input type="text" value={null} />
      </label>
      <label>
        Time Limit:
        <input type="number" value={null} /> Hours
        <input type="number" value={null} /> Minutes
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TestForm;
