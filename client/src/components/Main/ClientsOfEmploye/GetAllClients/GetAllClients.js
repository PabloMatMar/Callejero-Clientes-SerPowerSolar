import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { employeContext } from "./../../../../context/employeContext";

const GetAllClients = () => {
  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState(true);
  const { nameEmploye } = useContext(employeContext);

  useEffect(() => {
    if (status) {
      let res;
      async function fetchData() {
        res = await axios.get(`http://localhost:5000/AllClients?name=${nameEmploye}`);
        if (res.status === 200)
          setClients(res.data);
        setStatus(res.status);
      };
      fetchData();
    };
  }, [status, nameEmploye])

  return <section>
{clients.length === 0 ? <h2> No tienes clientes o hubo un error. </h2> : <>Mapear la lista de clientes con llamada a componente card</>}
  </section>;
};

export default GetAllClients;
