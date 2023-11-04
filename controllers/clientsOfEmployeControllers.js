const Users = require('../models/users_sql');

const getAllClients = async (req, res) => {
    try {
        console.log(req.query.name);
        const clients = await Users.getClients(req.query.name);
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ msj: err.message });
    };
};

module.exports = {
    getAllClients
}