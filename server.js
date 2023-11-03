const express = require('express');
const cors = require('cors');
require('./utils/pg_pool');


const app = express();
const port = 5000;

//Importacion rutas

const loginRoutes = require('./routes/loginRoutes')


// MIDDLEWARES
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());

app.use('/', loginRoutes);




app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})