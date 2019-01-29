const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const users = [
    {
        id: 45,
        favoriteBook: 'Harry Potter and the Chamber of Secrets',
        name: 'J.K. Rowling',
        company: 10,
        other:"bbb"
    },
    {
        id: 47,
        favoriteBook: 'Jurassic Park',
        name: 'Michael Crichton',
        company: 20,
        other: "aaa"
    },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type User {
    id: ID
    favoriteBook: String
    name: String
    company: Int
    other: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    users: [User]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        users: () => users,
    },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => {
        // get the user token from the headers
        const token = req.headers.authorization || '';

        console.log("token", token);

        // try to retrieve a user with the token
        const user = {};

        // add the user to the context
        return { user };
    } });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});