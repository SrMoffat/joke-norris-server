const { gql, makeExecutableSchema } = require("apollo-server");
const { readFileSync } = require("fs");
const { join } = require("path");

const resolvers = require("../resolvers");

const objectTypes = readFileSync(join(__dirname, "..", "..", "graphql", "schema.graphql"), "utf8");
const queries = readFileSync(join(__dirname, "..", "..", "graphql", "queries.graphql"), "utf8");
const mutations = readFileSync(join(__dirname, "..", "..", "graphql", "mutations.graphql"), "utf-8");

const typeDefs = gql`
    ${objectTypes}
    ${queries}
    ${mutations}
`;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
module.exports = {
    schema
}
