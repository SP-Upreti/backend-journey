const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
const PORT =  4000;

app.use(express.json());


app.post("/login", (req, res) => {

    const username = req.body.username;
    const user = { name: username };
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.JWT_SECRET_KEY);

    res.json({accessToken, refreshToken})
});


app.post("/token", (req, res) => {
    const refreshToken = req.body.token;
    if(!refreshToken) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken });
    });
});


app.delete("/logout", (req, res) => {
    //in real world application, you should delete the refresh token from database or memory

    res.sendStatus(204);

}
);



app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '15s' });
}