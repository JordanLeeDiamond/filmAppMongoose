const { collection } = require("./film.model");
const Film = require("./film.model");

exports.addMovie = async (newFilm) => {
    try {
            const movie = new Film(newFilm)
            await movie.save()
    } catch (error) {
        console.log(error)
    }
}

exports.listMovie = async (collection) => {
    try {
            const list = await collection.find({}).toArray();
            console.log(list);
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (collection, updateObj) => {
    try {
            await collection.updateOne(
                { name: updateObj.filter },
                { $set: { like: updateObj.like } }
            );
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (collection, deletObj) => {
    try {
        await deleteMovie({
            name: process.argv[3],
        });
    } catch (error) {
        console.log(error)
    }
}