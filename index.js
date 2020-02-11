// implement your API here
const express = require("express");
const Users = require("./data/db.js");
const server = express();


server.use(express.json());

server.get("/",(req,response)=>{
    response.json({hello: "Andrea"})
});

const port = 5000;
server.listen(port, () => console.log(`/n** API on port ${port}/n`));