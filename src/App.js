import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Hader';

function App() {
  return (
    <div className="App">
      <Header title='Weather React App'></Header>
      <Main></Main>
    </div>
  );
}

export default App;
