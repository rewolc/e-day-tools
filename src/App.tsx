import React from 'react';
import Header from './features/header/header';
import './App.scss';
import Main from './pages/main/main';

function App() {
  return (
    <div className="container">
    <Header/>
    <Main/>
    </div>
  );
}

export default App;
