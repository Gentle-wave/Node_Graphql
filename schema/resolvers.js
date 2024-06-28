const {UserList, MovieList} = require ("./fakeData.js")
const _ = require("lodash");
const {v4: uuidv4} = require('uuid');


const resolvers = {
    Query: {
        users: async () => {
            return UserList;
        },
        user: async (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id:Number(id)});
            return user;    
            },

        movies: async () => {
                return MovieList;
            },
        movie : async (parent, args) => {
                const name = args.name;
                const movie = _.find(MovieList, {name});
                return movie;
            },
    },
    User: {
        favoriteMovies: () => {
          return _.filter(
            MovieList,
            (movie) =>
              movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
          );
        },
      },
}

module.exports = {resolvers}