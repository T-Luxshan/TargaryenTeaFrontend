import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductPage from './Pages/Order/ProductPage';
import CartPage from './Pages/Order/CartPage';
// import CartSummaryPage from './Pages/CartSummaryPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path ='/teaPage' Component={ProductPage} />
        <Route path ='/cart' Component={CartPage} />
        {/* <Route path ='/teaPage/cart' Component={CartSummaryPage} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
