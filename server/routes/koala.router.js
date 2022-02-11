const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koalas" ORDER BY "id";';

    pool.query(queryText).then(result => {
        // send back results in an object
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting books', error);
        
        res.sendStatus(500);
    })
});

// POST


// PUT


// DELETE

module.exports = router;