const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.json({ message: "welcome to nuestra api:v"});
});

//Routes
app.use(require("./src/routes/api.js"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    console.log('server runnign on port' + PORT);
})