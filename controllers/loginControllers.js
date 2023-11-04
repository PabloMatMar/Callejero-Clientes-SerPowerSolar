require('dotenv').config();
const { SECRET } = process.env;
const Users = require('../models/users_sql');
const jwt = require('jsonwebtoken');


const validatedUser = async (req, res) => {
    try {
        let login = false;
        const data = JSON.parse(req.query.object);
        const credential = await Users.validatedUser(data.employe.toLowerCase(), data.password);
        data.password = "";
        if (credential == 1) {
            const payload = {
                check: true,
                user: data.employe.toLowerCase(),
            };
            const token = jwt.sign(payload, SECRET, {
                expiresIn: "1500000ms"
            });
            login = true;
            res.cookie('token', token).status(200).json(login);
        } else
            res.status(401).json(login);
    } catch (err) {
        res.status(500).json({ msj: err.message })
    };
};

module.exports = {
    validatedUser
}