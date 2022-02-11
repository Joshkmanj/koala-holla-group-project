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
router.post('/', (req,res)=>{
    console.log('req.body', req.body);
    let koala = req.body;
    
    let koalaReadyToTransfer = koala.ready_to_transfer;

    let queryText = `INSERT INTO "koalas" ("name","gender","age","ready_to_transfer","notes")
        VALUES ($1,$2,$3,$4,$5);`;
    pool.query(queryText, [koala.name, koala.gender, koala.age, koalaReadyToTransfer,koala.notes])
    .then(result=>{
        res.sendStatus(201);
    }).catch(error=>{
        res.sendStatus(500)
    })
})

// PUT


// DELETE

module.exports = router;