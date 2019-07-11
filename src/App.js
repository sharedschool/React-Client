import React from 'react';
import './Theme.css';
import './App.css';
import {MyNavBar} from './helpers/navbar';
import {MyFooter} from './helpers/footer';
import {MyMain} from './page';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
