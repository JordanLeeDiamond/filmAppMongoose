require("./db/connection");
const mongoose = require("mongoose");
const {addMovie, listMovies, updateMovie, deleteMovie} = require("./films/film.methods");
const command = process.argv[2];

const app = async () => {
    if (command === "add") {
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5]
        });
    } else if (command === "list") {
        await connection(listMovies);
    } else if (command === "update") {
        const updateObj = {
            filter: process.argv[3],
            like: process.argv[5]
        }; 
        await connection(updateMovie, updateObj);
    } else if (command === "delete") {
        await connection(deleteMovie, { filter: process.argv[3] });
    } else {
        console.log("Enter Valid Command")
    }
    mongoose.disconnect()
};

app();