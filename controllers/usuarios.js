const connection = require('../models/database');

const usuariosGet = (req, res) => {
    const query = 'SELECT * FROM usuarios';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

module.exports = { usuariosGet };