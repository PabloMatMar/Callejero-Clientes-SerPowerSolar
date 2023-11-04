const express = require('express');
const cors = require('cors');
require('./utils/pg_pool');


const app = express();
const port = 5000;

//Importacion rutas
//Ruta de logeo
const loginRoutes = require('./routes/loginRoutes');
//Ruta para pedir todos los clientes del empleado logeado
const clientsOfEmployeRoutes = require('./routes/clientsOfEmployeRoutes')


// MIDDLEWARES
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());

app.use('/', loginRoutes);
app.use('/AllClients', clientsOfEmployeRoutes);




app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})