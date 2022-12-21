import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="main-container">
      <div className="banner">
        <h1 className="title">Student Success Center Test Monitoring</h1>
      </div>
      <div className="add-button">
        <Button variant="primary m-2">Add Test</Button>
      </div>
      <Board />
      {/* button for adding a test */}
    </div>
  );
}

export default App;
