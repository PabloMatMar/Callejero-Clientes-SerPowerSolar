import React from "react";
import Login from './Login/Login';
import Clients from './ClientsOfEmploye/ClientsOfEmploye';
import Streets from './StreetsVisited/StreetsVisited';
import Calls from './TimeToCall/TimeToCall';
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
// import '../../styles/styles.scss';


const Main = () => {

  return <main className='main'>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/llamar" element={<Clients />} />
      <Route path="/misClientes" element={<Streets />} />
      <Route path="/calles" element={<Calls />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  </main >
};

export default Main;