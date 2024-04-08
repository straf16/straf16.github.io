import React from 'react';
import "./App.scss";
import Header from './components/Header/Header';
import Home from './Section/Home/Home';
import Skill from './Section/Skill/Skill';
import Journey from './Section/Journey/Journey';
import Contact from './Section/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skill />
      <Journey />
      <Contact />
    </div>
  );
}

export default App;
