import React, { createContext, useState } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'yamada', age: 32 });
  const [language, setLanguage] = useState('日本語');

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
