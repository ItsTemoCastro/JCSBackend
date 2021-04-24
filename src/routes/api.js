const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/api/alumnos", async (req, res) =>{
     await db.query('SELECT *FROM tblalumnos', (error, result) =>{
        if(error) throw error;
        res.json(result);
    });
})

router.post('/api/auth', (request, response) => {
	const username = request.body.username;
	const password = request.body.password;
	//const {username, password} = request.body;
	if (username && password) {
		db.query('SELECT * FROM users WHERE user = ? AND pass = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				
				response.send({ session: true});
			} else {
				response.send({ message: "Contraseña/Usuario equivocado" });
			}			
		});
	} else {
		response.send({ message: "Inserte un Usuario o Contraseña" });
	}
});

module.exports = router;