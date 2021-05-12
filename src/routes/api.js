const express = require("express");
const db = require("../database");

const router = express.Router();

router.get("/api/alumnos/:NoControl", async (req, res) =>{
	const NoControl = req.params.NoControl;
    await db.query('SELECT * FROM tblalumnos Where NoControl = ?',NoControl, (error, result) =>{
        if(error) throw error;
        res.json(result);
    });
})

router.post('/api/auth', (request, response) => {
	const username = request.body.username;
	const password = request.body.password;
	//const {username, password} = request.body;
	if (username && password) {
		db.query('SELECT * FROM usuarios WHERE userName = ? AND userPass = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				
				//response.send({ session: true, message: "sesion exitosa"});
				response.send({ session: true, datos: JSON.parse(JSON.stringify(results)), message: "sesion exitosa"});
			} else {
				response.send({ session: false , message: "Contraseña/Usuario equivocado" });
			}			
		});
	} else {
		response.send({ session: false , message: "Inserte un Usuario o Contraseña" });
	}
});

module.exports = router;