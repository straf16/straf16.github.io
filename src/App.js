import React from 'react';
import Header from './components/Header/Header';
import Home from './Section/Home/Home';
import Skill from './Section/Skill/Skill';
import Journey from './Section/Journey/Journey';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skill />
      <Journey />
    </div>
  );
}

export default App;
