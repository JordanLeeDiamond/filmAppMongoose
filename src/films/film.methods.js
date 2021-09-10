const Film = require("./film.model");

exports.addMovie = async (newMovie) => {
    try {
            const movie = new Film(newMovie)
            await movie.save()
            console.log(`${newMovie.name} successfully stored.`)
    } catch (error) {
        console.log(error)
    }
};

exports.listMovie = async (listQuery) => {
    try {
            const list = await Film.find(listQuery).exec();
            console.log(list)
    } catch (error) {
        console.log(error)
    }
};

exports.updateMovie = async (query, updateMovie) => {
    try {
        await Film.findOneAndUpdate(query, updateMovie);
        console.log(`${query.name} successfully updated.`)
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (movie) => {
    try {
        await Film.findOneAndDelete(movie);
        console.log(`${movie.name} successfully deleted.`)
    } catch (error) {
        console.log(error)
    }
};