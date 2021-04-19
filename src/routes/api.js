const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/api/alumnos", async (req, res) =>{
     await db.query('SELECT *FROM tblalumnos', (error, result) =>{
        if(error) throw error;
        res.json(result);
    });
})

module.exports = router;