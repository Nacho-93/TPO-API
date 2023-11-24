connect = require('connect')
var MongoClient = require('mongodb').MongoClient;

(async () => {
    try {
        const db = await connect("mongodb: //localhost/AzertyDB");
        console.log("db connected !")
    } catch (e) {
        console.log(e)
    }
})