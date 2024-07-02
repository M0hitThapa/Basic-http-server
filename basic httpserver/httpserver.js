

const express = require("express");

const app = express();

app.get('/',(req,res) => {
    return res.send('Hello From Home Page');
});

app.get("/about", (req,res) => {
    return res.send("Hello From About Page" + 'hey' + req.query.name + 'you are' + req.query.age);
});

app.listen(4000, () => console.log("server Started"));

