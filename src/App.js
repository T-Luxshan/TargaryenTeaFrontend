import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Order/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/page" Component={Product} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
