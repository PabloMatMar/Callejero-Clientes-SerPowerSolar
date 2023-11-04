const queries = {
    getUserData:`
    SELECT *
    FROM employes
    WHERE employe = $1;
    `,
    getAllClients: `
    SELECT *
    FROM clients
    WHERE employe = $1`
};
module.exports = queries;