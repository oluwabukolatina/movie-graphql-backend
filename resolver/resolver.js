const Movie = require('../model/Movie');
const resolvers = {
         movies: () => {
                  return Movie.find({})
         },
         movieByName: (args) => {return Movie.findOne({name: args.name }) },
         
         addMovie: (args) => { let movie = new Movie({ name: args.name, genre: args.genre, year: args.year }); movie.save();return movie}
}
module.exports = resolvers 