import logo from './logo.svg';
import './App.css';
import './styles.scss'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Diabetes from './pages/Diabetes';
import Pcos from './pages/Pcos';
import Thyroid from './pages/Thyroid';
import Obesity from './pages/Obesity';
import More from './pages/More';
import React, { useState } from 'react';
import CompleteProfile from './pages/CompleteProfile';
export const userContext=React.createContext()
function App() {
 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(('user'))));
 
  const value = React.useMemo(() => {
    return {
      user,
      setUser,

    }
  }, [user]);

  return (
    <div className="App">
     <userContext.Provider value={value}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/diabetes" element={<Diabetes/>}></Route>
        <Route exact path="/pcos" element={<Pcos/>}></Route>
        <Route exact path="/thyroid" element={<Thyroid/>}></Route>
        <Route exact path="/completeprofile" element={<CompleteProfile/>}></Route>
        <Route exact path="/obesity" element={<Obesity/>}></Route>
        <Route exact path="/more" element={<More/>}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
    </div>
  );
}

export default App;
