import logo from './logo.svg';
import './App.css';
import Headerperso from './components/navbar/headerperso'
import Footerperso from './components/footer/footerperso'
import React from 'react'
/* import { ColorPickerMenu } from 'color-picker-menu' */

/* const Component = () => {
  return <ColorPickerMenu />
} */
  function App() {
    return (
      <div className="App">
        <Headerperso />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Footerperso />
      </div>
    );
  }

export default App
