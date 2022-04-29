// Do not change this file
require('dotenv').config();

// TODO change to mongoose
const mongoose = require("mongoose");

async function main(callback) {
    const URI = process.env.MONGO_URI; // Declare MONGO_URI in your .env file
    //const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoose.connect(URI).finally(() => {
        console.log("Finally reached");
    }).then((e) => {
        console.log("Then: everything is okay");
    }).catch((error) => {
        console.log("Error: " + error);
    });
    
    urlSchema = new mongoose.Schema ({
    short_url: {
      type: Number,
      required: true
    },
    original_url: {
      type: String,
      required: true
    }
    });

    UrlModel = mongoose.model('urlshorteners', urlSchema);
    
    // Make the appropriate DB calls
    await callback(UrlModel);
}

module.exports = main;