require('dotenv').config();
const { ADMIN_KEY } = process.env;
const bcrypt = require('bcrypt');
const pool = require('../utils/pg_pool');
const queries = require('../queries/queries');

const validatedUser = async (employe, password) => {
    let client, isPasswordCorrect;
    let result = 0;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getUserData, [employe]);
        if (data.rowCount == 1)
            isPasswordCorrect = await bcrypt.compare(password, data.rows[0].password);
        if (isPasswordCorrect)
            result = 1;
        password = "";
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    };
    return result;
};

const getClients = async (nameEmploye) => {
    let client;
    let result = [];
    try {
        client = await pool.connect();
        result = await client.query(queries.getAllClients, [nameEmploye]);
        result = result.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    };
    return result;
}
module.exports = {
    validatedUser,
    getClients
}