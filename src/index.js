const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server");




const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
    Query: {
      info: () => `Joke Norris 👻`
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = new ApolloServer({ schema });
server
  .listen()
  .then(({ url }) =>
    console.log(`Joke Norris running is running on ${url}`)
);
