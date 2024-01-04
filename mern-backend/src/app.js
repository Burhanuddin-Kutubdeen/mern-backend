const { log } = require("console");
const express = require ("express");
const path = require("path");
const app = express();
require("./db/conn.js");
const Register = require("./models/registration.js");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
// console.log(path.join(__dirname,"../public"));
app.use(express.json());
app.use(express.static(static_path))

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/register",(req,res)=>{
    res.render("registration");
})
//create a new user in out db
app.post("/register",async(req,res)=>{
    try {
        console.log(req.body.firstName);
        res.send(req.body.firstName);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });