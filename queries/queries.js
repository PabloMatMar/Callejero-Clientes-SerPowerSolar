const queries = {
    getUserData:`
    SELECT *
    FROM users
    WHERE email = $1;
    `
};
module.exports = queries;