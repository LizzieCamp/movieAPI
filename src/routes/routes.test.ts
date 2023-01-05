import request from "supertest";
import { app } from "../app";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

describe("GET endpoints", () => {
  const database = process.env.DATABASE_CONNECTION;

  beforeAll(() => {
    database
      ? mongoose.connect(database)
      : console.log("missing database connection");
  });

  afterAll((done) => {
    mongoose.disconnect(done);
  });

  it("should return 200 when executing GET movies", async () => {
    const expectedResponse = {
      _id: "63b54a60f7f7d128e5f2f08b",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
      title: "The Shawshank Redemption",
      year: 1994,
      certificate: "A",
      time: 142,
      genre: "Drama",
      rating: 9.3,
      summary:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      director: "Frank Darabont",
      star1: "Tim Robbins",
      star2: "Morgan Freeman",
      star3: "Bob Gunton",
      star4: "William Sadler",
    };

    const response = await request(app).get("/api/movies");

    expect(response.statusCode).toEqual(200);
    expect(response.body[0]).toEqual(expectedResponse);
  });

  it("should return 200 when searching movies for a specific genre", async () => {
    const expectedResponse = {
      _id: "63b54a60f7f7d128e5f2f08c",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg",
      title: "The Godfather",
      year: 1972,
      certificate: "A",
      time: 175,
      genre: "Crime Drama",
      rating: 9.2,
      summary:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      director: "Francis Ford Coppola",
      star1: "Marlon Brando",
      star2: "Al Pacino",
      star3: "James Caan",
      star4: "Diane Keaton",
    };

    const response = await request(app).get("/api/movies/genre?genre=crime");

    expect(response.statusCode).toEqual(200);
    expect(response.body[0]).toEqual(expectedResponse);
  });

  it("should return 200 when searching movies for a specific title", async () => {
    const expectedResponse = {
      _id: "63b54a60f7f7d128e5f2f090",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      certificate: "U",
      time: 201,
      genre: "Action, Adventure, Drama",
      rating: 8.9,
      summary:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      director: "Peter Jackson",
      star1: "Elijah Wood",
      star2: "Viggo Mortensen",
      star3: "Ian McKellen",
      star4: "Orlando Bloom",
    };

    const response = await request(app).get("/api/movies/title?title=lord");
    expect(response.statusCode).toEqual(200);
    expect(response.body[0]).toEqual(expectedResponse);
  });

  it("should return 200 and an error message if the title isnt found", async () => {
    const expectedResponse = "title not found";

    const response = await request(app).get("/api/movies/title?title=wow");
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual(expectedResponse);
  });

  it("should return 200 and an error message if the genre isnt found", async () => {
    const expectedResponse = "title not found";

    const response = await request(app).get("/api/movies/genre?genre=wow");
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual(expectedResponse);
  });
});
