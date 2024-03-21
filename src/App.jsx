import './App.css';
import { useState } from 'react';
import Login from './components/login/Login';
import SingUp from './components/sign-up/SingUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  const [,] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SingUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
