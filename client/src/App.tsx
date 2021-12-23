import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ResponsiveAppBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveAppBar />
      <p>Hello World</p>

    </div>
  );
}

export default App;
