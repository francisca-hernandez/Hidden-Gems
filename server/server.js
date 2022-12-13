const express = require('express');

// ONCE GRAPHQL IS INTEGRATED UNCOMMENT THESE COMMENTS

//import apolloserver
// const { ApolloServer } = require('apollo-server-express');

// //import typeDefs and resolvers
// const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const db = require('./config/connection');

//boilerplate middleware
const app = express();
const PORT = process.env.PORT || 3001;

// ONCE GRAPHQL IS INTEGRATED UNCOMMENT THESE COMMENTS

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// ONCE GRAPHQL IS INTEGRATED UNCOMMENT THESE COMMENTS

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();

//   server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`🌍 Now listening on localhost:${PORT}`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     });
//   });
// };

// startApolloServer(typeDefs, resolvers);
app.listen(PORT, () => console.log(`🌍 Connected on http://localhost:${PORT}`));