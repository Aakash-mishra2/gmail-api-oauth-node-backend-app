require('dotenv').config();
var cors = require('cors');
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: true
}));

const PORT = process.env.SERVER_PORT; 
app.get('/', (req, res)=>{
    res.send('Hello developer! This is Server Side');
});

const routes = require('./routes/routes');

app.use('/api', routes);

app.use(function(req, res, next){
    next(createError(404));
})

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`)
})