import React from "react";
import "./App.css";
import Board from "./components/Board";
import { Button } from "react-bootstrap";
// import FormModal from "./components/FormModal";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Board modalShow={modalShow} handleClose={() => setModalShow(false)} />
    </div>
  );
}

export default App;
