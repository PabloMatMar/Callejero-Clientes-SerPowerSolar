import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { employeContext } from './context/employeContext';

function App() {
  const [nameEmploye, setNameEmploye] = useState("");
  const nameOfEmploye = {
    nameEmploye,
    setNameEmploye
  }

  return (
    <>
      <BrowserRouter>
        <employeContext.Provider value={nameOfEmploye}>
          <Header />
          <Main />
          <Footer />
        </employeContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
