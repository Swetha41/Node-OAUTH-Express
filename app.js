const express = require('express');
const ejs = require('ejs');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

//routes
app.get("/", (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log(`server started at port 3000`)
})