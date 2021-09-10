const mongoose = require("mongoose");
require("dotenv").config();

const connection = async (crudFunc, objData) => {
        try {
                await mongoose.connect(process.env.MONGO_URI);
                console.log("Successfully Connected");
                const db = connection.db("movies");
                const collection = db.collection("movie");
                await crudFunc(collection, objData);
        } catch (error) {
                console.log(error)
        }
}

connection();