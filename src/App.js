import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Login from './Pages/Login';
import Register from './Pages/Register';
import './Pages/App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar">
                    <h1 className="brand">Bean Scene</h1>
                    <div className="nav-links">
                        <Link to="/login" className="auth-button">Login</Link>
                        <Link to="/register" className="auth-button signup">Sign Up</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
