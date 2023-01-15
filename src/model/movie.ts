import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    poster: String,
    title: String,
    genre: String,
    rating: Number,
    imdb: String,

});

module.exports = mongoose.model("Movie", movieSchema);
