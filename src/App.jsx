import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Homepage } from './components/homepage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Aboutpage } from './components/aboutpage';
import LoginPage from './components/login';
import Signup from './components/signup';
import { Books } from './components/books';
import InvalidPage from './components/invalidpage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="*" element={<InvalidPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
