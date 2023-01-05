import { Router } from "express";
import mongoose from "mongoose";

export const router = Router();
const Movie = require("../model/movie");

router.get("/ping", (req, res) => {
  res.status(200);
  res.send("pong");
});

router.get("/movies", async (req, res) => {
  try {
    const data = await Movie.find({});
    res.status(200);
    res.json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
});

router.get("/movies/title", async (req, res) => {
  const title = req.query.title;
  try {
    const data = await Movie.find({
      title: { $regex: title, $options: "i" },
    });
    if (data.length) {
      res.status(200);
      res.json(data);
    } else {
      res.status(200);
      res.send("title not found");
    }
  } catch (error: any) {
    res.status(500);
  }
});

router.get("/movies/genre", async (req, res) => {
  const genre = req.query.genre;
  try {
    const data = await Movie.find({
      genre: { $regex: genre, $options: "i" },
    });
    if (data.length) {
      res.status(200);
      res.json(data);
    } else {
      res.status(200);
      res.send("title not found");
    }
  } catch (error) {
    res.status(500);
  }
});
