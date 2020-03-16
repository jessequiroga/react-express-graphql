import React from 'react';
import './App.css';
import Header from './core/layouts/header/Header';

class App extends React.Component {
  render() {
    return (
        <div>
            <Header />
            <h1>Hello</h1>
        </div>
    );
  }
}

export default App;
