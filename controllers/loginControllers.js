require('dotenv').config();
const { SECRET } = process.env;
const Users = require('../models/users_sql');
const jwt = require('jsonwebtoken');


const validatedUser = async (req, res) => {
    try {
        let login = false;
        const credential = await Users.validatedUser(req.body.email.toLowerCase(), req.body.password);
        req.body.password = "";
        if (credential == 1) {
            const payload = {
                check: true,
                user: req.body.email.toLowerCase(),
            };
            const token = jwt.sign(payload, SECRET, {
                expiresIn: "1500000ms"
            });
            login = true;
        };
        res.cookie('token', token).status(200).json(login);
    } catch (err) {
        res.status(401).json({ msj: err.message })
    };
};

module.exports = {
    validatedUser
}