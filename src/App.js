import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FormModal from "./components/FormModal";
import React from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="main-container">
      <div className="banner">
        <h1 className="title">Student Success Center Test Monitoring</h1>
      </div>
      <div className="add-button">
        <Button variant="primary m-2" onClick={() => setModalShow(true)}>
          Add Test
        </Button>
      </div>
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
      <Board />
    </div>
  );
}

export default App;
