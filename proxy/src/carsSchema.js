const { gql } = require('apollo-server');
import {makeExecutableSchema} from 'graphql-tools';

const cars = [
    {
        size: 'big',
        make: 'Ford',
        model: 'F250'
    },
    {
        size: 'small',
        make: 'Mini Cooper',
        model: 'Mini'
    },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Car {
    size: String
    make: String
    model: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    cars: [Car]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        cars: () => cars,
    },
};

export default makeExecutableSchema({typeDefs, resolvers});