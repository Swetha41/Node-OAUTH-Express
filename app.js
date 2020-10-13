const express = require('express');
const ejs = require('ejs');
const authRoutes = require('./routes/auth-routes');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);

//home route
app.get("/", (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log(`server started at port 3000`)
})