const { ApolloServer } = require("apollo-server");

const { schema } = require("./schema");


const server = new ApolloServer({ schema });
server
  .listen()
  .then(({ url }) =>
    console.log(`Joke Norris running is running on ${url}`)
);
