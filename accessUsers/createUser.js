const pool = require('../utils/pg_pool');
require('dotenv').config();
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    let client;
    try {
        client = await pool.connect();
        const saltRounds = 10;
        let name = "Usuario de Prueba"; /*Introducir un nombre de usuario, como Alejandro o Pablo */
        let password = await bcrypt.hash(/*"Introducir Password (respetar la coma)",*/"Prueba1.0", saltRounds);
        await client.query(`
        INSERT INTO employes(employe, password)
        VALUES ($1,$2);
        `, [name, password]);
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    };
};
createUser()