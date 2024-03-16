import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [,] = useState(0);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
