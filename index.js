const express = require('express');

const app = express();
const cors = require("cors");

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  
app.use(express.json());
app.get("/", (req, res) =>{
    res.json({ message: "welcome to nuestra api:v"});
});


//Routes
app.use(require("./src/routes/api.js"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    console.log('server runnign on port' + PORT);
})