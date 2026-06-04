import React from 'react';
import "./App.scss";
import Header from './components/Header/Header';
import Home from './Section/Home/Home';
import About from './Section/About/About';
import Skill from './Section/Skill/Skill';
import Projects from './Section/Projects/Projects';
import Journey from './Section/Journey/Journey';
import Contact from './Section/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
