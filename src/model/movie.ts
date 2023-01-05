import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    poster: String,
    title: String,
    year: Number,
    certificate: String,
    time: Number,
    genre: String,
    rating: Number,
    summary: String,
    director: String,
    star1: String,
    star2: String,
    star3: String,
    star4: String,
});

module.exports = mongoose.model("Movie", movieSchema);
