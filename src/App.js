import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path='/teaPage' Component={ProductPage} /> */}
        <Route path ='/teaPage' Component={ProductPage} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
