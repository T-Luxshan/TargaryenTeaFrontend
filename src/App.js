
import './App.css';
import LandingPage from "../src/pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryPage from "../src/pages/Story";
import TeaPage from "./pages/Tea";
import TradePage from "./pages/Trade";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<LandingPage/>}/>
        <Route path="/story" element ={<StoryPage/>}/>
        <Route path="/tea" element ={<TeaPage/>}/>
        <Route path="/trade" element ={<TradePage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
