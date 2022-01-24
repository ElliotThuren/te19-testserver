const express = require('express');
const router = express.Router();
const pool = require('../database');

/*

BASE URL /tasks
GET / - Get all tasks
POST / - Create a new task
GET /:id Get a task by id
PUT /:id - Update a task by id
DELETE /:id - Delete a task by id

*/

/* GET home page. */
router.get('/', async(req, res, next) => {
    await pool.promise()
        .query('SELECT * FROM tasks')
        .then(([rows, fields]) => {
            console.log(rows);
            res.json({
              tasks: {
                data: rows
                }
            })      
        });
        .catch(err => {
            console.log(err);
            res.status(500).json({
                tasks: {
                error: 'Error getting tasks'
                }
            })
        })
});

router.get('/:id', async (req, res, next) => {
    const id = (req.params.id);

    if (isNaN(req.params.id)) {
        res.status(400).json({
            task: {
                error: 'Bad request'
            }
        });
    }

        res.json({
            id: req.params.id
        })

    console.log(req.params.id);
    res.json({
        id: req.params.is
    })
});

module.exports = router;
