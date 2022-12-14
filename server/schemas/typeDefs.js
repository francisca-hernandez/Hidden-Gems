// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        gemCount: Int
        savedGems: [Gem]
    }

    type Gem {
        _id: ID
        name: String
        description: String
        address: String
        link: String
        gemId: String
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveGem(name: String!, description: String!, address: String!, link: String!, gemId: String!): User
        removeGem(gemId: ID!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;