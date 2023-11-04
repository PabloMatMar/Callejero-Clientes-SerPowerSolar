import React from "react";
import Login from './Login/Login';
import ClientsOfEmploye from './ClientsOfEmploye/ClientsOfEmploye';
import StreetsVisited from './StreetsVisited/StreetsVisited';
import TimeToCall from './TimeToCall/TimeToCall';
import IntoAClient from './ClientsOfEmploye/IntoAClient';
import SearchAClient from './ClientsOfEmploye/SearchAClient';
import GetAllClients from './ClientsOfEmploye/GetAllClients';
import NotFound from './NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
// import '../../styles/styles.scss';


const Main = () => {

  return <main className='main'>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/llamar" element={<TimeToCall />} />
      <Route path="/misClientes" element={<ClientsOfEmploye />} />
      <Route path="/calles" element={<StreetsVisited />} />
      <Route path="/introducirUnCliente" element={<IntoAClient />} />
      <Route path="/buscarUnCliente" element={<SearchAClient />} />
      <Route path="/verTodosMisClientes" element={<GetAllClients />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  </main >
};

export default Main;