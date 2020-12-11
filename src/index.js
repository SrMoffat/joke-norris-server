require('dotenv').config();
const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const { schema } = require("./schema");

const prisma = new PrismaClient();

const server = new ApolloServer({
  schema,
  context: async ({ connection }) => {
    if(connection){
      // Check prisma connection meta data
      return connection.context;
    } else {
      const contextObj = {
        prisma,
      };
      return contextObj;
    }
  }
});

server
  .listen({ port: process.env.PORT || 4000 }) // Add port to env
  .then(({ url }) =>
    console.log(`Joke Norris running is running on ${url}`)
);
