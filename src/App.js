import * as React from 'react';
import HomePage from './components/pages/HomePage';
import LabIteraTion from './components/pages/LabIteraTion';
import SignupaGe from './components/pages/SignupaGe'
import {Routes, Route} from 'react-router-dom';
import ProfilePage from './components/pages/ProfilePage'


import './App.css';

function App() {

  return (
    <div className="App">
   <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/about" element={<LabIteraTion/>}/>
<Route path="/signup-form" element={<SignupaGe/>}/>
<Route path="/profile" element={<ProfilePage/>}/>
</Routes>
    </div>
  );
}

export default App;
