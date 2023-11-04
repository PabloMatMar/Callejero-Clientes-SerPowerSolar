const pool = require('../utils/pg_pool');
const bcrypt = require('bcrypt');

const createUser = async () => {
    let client, data;
    try {
        client = await pool.connect();
        const saltRounds = 10;
        let name = "empleado"; /*Introducir un nombre de usuario, como Alejandro o Pablo */
        let password = await bcrypt.hash(/*"Introducir Password (respetar la coma)",*/"Prueba1.0", saltRounds);
        data = await client.query(`
        INSERT INTO employes(employe, password)
        VALUES ($1,$2);
        `, [name.toLowerCase(), password]);
        if (data.rowCount == 1)
            console.log(`Usuario: ${name} creado!`)
        else
            console.log("El usuario no ha podido ser creado")
    }
    catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release()
    };
};
createUser()