const express = require('express')
const app = express();
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')

 mongoose.connect('mongodb://admin:admin1@ds263295.mlab.com:63295/movie-api-graphql', {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true
}).then(() => console.log('db connectted')).catch((e) => console.log(e))
// Construct a schema, using GraphQL schema language


  app.use('/graphql', graphqlHTTP({
         schema: movieSchema,
         rootValue: resolvers,
         graphiql: true,
}));
       
app.get('/', (req, res) => {res.send('hello')})
app.listen(process.env.PORT || 5000, () => {
         console.log('listening on port 5000')
})
