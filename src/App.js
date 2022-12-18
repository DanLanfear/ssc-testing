import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-container">
      <header role="banner"></header>
      <h1 className="title">Student Success Center Test Monitoring</h1>
      <Board />
      {/* button for adding a test */}
    </div>
  );
}

export default App;
