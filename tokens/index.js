const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/secret_info", authenticateToken, (req, res)=>{
    const body = req.user;
    console.log(body);
    return res.json({message:"this is secret info", user:body});
    
})

app.post("/login", (req, res) => {

    const username = req.body.username;
    const user = { name: username };
    const accessToken =jwt.sign(user, process.env.JWT_SECRET_KEY)

    res.json({accessToken})
});


function authenticateToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStatus(401).json({message:"invalid token"});
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) return res.sendStatus(403).json({message:"forbidden"});
        req.user = user;
        next();
    });
}


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
})