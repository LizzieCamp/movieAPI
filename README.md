# The Watch List Movie API

The Watch List Movie API is a RESTful API built with Node.js, Express, and Mongoose to provide a movie search and watchlist management service.\
 This API is designed to work with The Watch List application, a Netflix-style movie platform that allows users to browse, search, and add movies to their personal watchlists.

The Watch List Movie API utilizes a MongoDB database to store movie data.

## API Endpoints

`http://localhost:4000/api/movies/`\
would return the results for all movies.


`http://localhost:4000/api/movies/title?title=rat`
would return:

```
[
  {
    "_id": "63c92c587ed0d902a3b6f1af",
    "imdbId": "1883092",
    "imdb": "http://www.imdb.com/title/tt1883092",
    "title": "Generation War",
    "rating": 8.5,
    "genre": "Action|Drama|History",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMzIyMjg5M15BMl5BanBnXkFtZTgwNzM1NjI2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "_id": "63c92c587ed0d902a3b6f23d",
    "imdbId": "154420",
    "imdb": "http://www.imdb.com/title/tt154420",
    "title": "The Celebration (1998)",
    "rating": 8.1,
    "genre": "Drama",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYzMTYwNTIyMV5BMl5BanBnXkFtZTcwOTU2MjM2NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "_id": "63c92c587ed0d902a3b6f192",
    "imdbId": "36506",
    "imdb": "http://www.imdb.com/title/tt36506",
    "title": "Day of Wrath (1943)",
    "rating": 8,
    "genre": "Drama",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTJjYzViOTItZjhjNS00NjgyLWExZTAtY2I2NDE0ZGQxNGFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR9,0,182,268_AL_.jpg"
  },
  {
    "_id": "63c92c587ed0d902a3b6f162",
    "imdbId": "1832382",
    "imdb": "http://www.imdb.com/title/tt1832382",
    "title": "A Separation (2011)",
    "rating": 8.4,
    "genre": "Drama|Mystery",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "_id": "63c92c587ed0d902a3b6f212",
    "imdbId": "382932",
    "imdb": "http://www.imdb.com/title/tt382932",
    "title": "Ratatouille (2007)",
    "rating": 8,
    "genre": "Animation|Comedy|Family",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
]
```


`http://localhost:4000/api/movies/genre?genre=action` would return:

```
[
  {
    "_id": "63c92c587ed0d902a3b6f170",
    "imdbId": "2313197",
    "imdb": "http://www.imdb.com/title/tt2313197",
    "title": "Batman: The Dark Knight Returns, Part 1 (2012)",
    "rating": 8,
    "genre": "Animation|Action|Adventure",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "_id": "63c92c587ed0d902a3b6f195",
    "imdbId": "95016",
    "imdb": "http://www.imdb.com/title/tt95016",
    "title": "Die Hard (1988)",
    "rating": 8.2,
    "genre": "Action|Thriller",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY2ZGEwMTYtNjBmZS00OGE4LWEyMmUtNjAwMWUxZjVmZTRiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "_id": "63c92c587ed0d902a3b6f19d",
    "imdbId": "142247",
    "imdb": "http://www.imdb.com/title/tt142247",
    "title": "Dragon Ball Z: The History of Trunks (1993)",
    "rating": 8,
    "genre": "Animation|Action|Adventure",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzZjhmNmYtZWJkYi00YmVlLThhZWQtNDhkMjViNWI4MDdhXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY268_CR3,0,182,268_AL_.jpg"
  }
]
```
