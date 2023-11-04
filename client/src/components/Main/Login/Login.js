import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line
  const [hasBeenLogin, setHasBeenLogin] = useState(false);
  const [user, setUser] = useState({});


  const onSubmit = data => {
    setHasBeenLogin(false);
    setUser({
      employe: data.employe,
      password: /*"bA1" + */ data.password
    })
    const param = JSON.stringify(user);
    async function fetchData() {
      let res;
      console.log(user);
      if (Object.keys(user).length !== 0) {
        res = await axios.post(`http://localhost:5000/?object=${param}`);
        if (res.data !== undefined && res.data === true) {
          setHasBeenLogin(true);
          setUser({});
        };
      };
      console.log(res);
    };
    fetchData();
  };

  return hasBeenLogin ? <section>
    <h2>Ahora ya puedes navegar!</h2>
  </section>
    :
    <section>
      <h2>Identificate para navegar!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="requiredInput" type='text' placeholder='Empleado' {...register("employe", { required: true, message: "error message" })}></input>
        <input className="requiredInput" type='text' placeholder='Contraseña' {...register("password", { required: true, message: "error message" })}></input>
        <input type='submit' />
      </form>
    </section>;
};

export default Login;
