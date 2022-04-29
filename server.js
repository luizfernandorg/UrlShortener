require("dotenv").config();
const express = require("express");
const myDB = require('./connection');
const path = require('path')
const cors = require('cors')

const app = express();
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

myDB(async (UrlModel) => {
   
    const routes = require('./routes.js');
    routes(app, UrlModel);
    
}).catch(e => {
   console.error(e);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listen on port " + PORT);
})
