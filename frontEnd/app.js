require('dotenv').config();
const cors = require('cors');
const express = require("express");
const app = express();
const ejs = require('ejs');
app.use(express.static('public'));
app.use(cors({
    origin: true
}))

// layout templating of home page
app.set('views','./frontEnd/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let code = '';
    res.render("login",{
        your_client_id : process.env.CLIENT_ID
    });
})

app.listen(process.env.CLIENT_PORT, () => {
    console.log(`FrontEnd running on port ${process.env.CLIENT_PORT}`)
})