import { gql } from '@apollo/client';

// Query for User information and Gem Info

export const QUERY_USER = gql`
    query user($username: String!) {
        query user(username: $username)
        _id
        username
        email
        GemCount
        savedGems {
            _id
            name 
            description
            address
            link
            gemId
        }
    }
`;