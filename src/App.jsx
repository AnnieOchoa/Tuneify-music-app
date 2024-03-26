import './App.css';
import Login from './components/login/Login';
import SingUp from './components/sign-up/SingUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import LogOut from './components/LogOut';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SingUp />} />
          <Route path="/" element={<Home />} />
          <Route path='/logout' element={<LogOut/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
