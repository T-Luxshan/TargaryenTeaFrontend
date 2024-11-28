
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import RejectPage from "./pages/RejectPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SuccessPage/>} />
          <Route path="/reject" element={<RejectPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
