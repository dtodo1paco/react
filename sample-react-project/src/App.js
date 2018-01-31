import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Cell from 'components/Grids/Cell.js';
import Grid from 'components/Grids/Grid.js';

import { Home } from 'components/Home.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Home />
      </div>
    );
  }
};

export default App;

