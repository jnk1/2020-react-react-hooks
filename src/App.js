import React, { createContext, useState } from 'react';
import './App.css';
import CounterReducer from './components/CounterReducer';
import CounterReducer2 from './components/CounterReducer2';

export const UserContext = createContext();
export const LanguageContext = createContext();

function App() {
  return (
    <div className="App">
      <CounterReducer />
      <CounterReducer2 />
    </div>
  );
}

export default App;
