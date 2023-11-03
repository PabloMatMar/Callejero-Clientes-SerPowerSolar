const pool = require('../utils/pg_pool');
const bcrypt = require('bcrypt');

const deleteUser = async () => {
    let client, isPasswordCorrect, data;
    try {
        client = await pool.connect();
        const name = "Usuario de Prueba"; /*Introducir el nombre de usuario a eliminar*/
        const password = "Prueba1.0" /*Introducir la clave del usuario*/
        const userDatas = await client.query(`
        SELECT *
        FROM employes
        WHERE employe = $1;
        `, [name]);
        if (userDatas.rowCount == 1)
            isPasswordCorrect = await bcrypt.compare(password, userDatas.rows[0].password);
        if (isPasswordCorrect) {
            data = await client.query(`
            DELETE
            FROM employes
            WHERE employe = $1;
            `, [name]);
            if (data.rowCount == 1)
                console.log(`Usuario: ${name} eliminado!`)
            else
                console.log("El usuario no se ha podido eliminado")
        };
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    };
};
deleteUser();