import "./App.css";
import LandingPage from "../src/pages/LandingPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StoryPage from "../src/pages/Story";
import TeaPage from "./pages/Tea";
import TradePage from "./pages/Trade";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "../src/pages/Order/Product";
import { AdminDashboard } from "./pages/AdminDashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav className="navbar">
                    <h1 className="brand">Bean Scene</h1>
                    <div className="nav-links">
                        <Link to="/login" className="auth-button">Login</Link>
                        <Link to="/register" className="auth-button signup">Sign Up</Link>
                    </div>
                </nav> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/tea" element={<TeaPage />} />
          <Route path="/trade" element={<TradePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/each/:id" element={<Product />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
