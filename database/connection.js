const knex = require('knex')({
    client: "mysql2",
    connection: {
        host: 'localhost',
        user: "root",
        password: "220624And",
        database: "ecosynergy"
    }
});

module.exports = knex;