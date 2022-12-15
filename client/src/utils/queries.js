import { gql } from '@apollo/client';

// Query for User information and Gem Info

export const QUERY_ME = gql`
    query Me {
        me {
        _id
        username
        email
        gemCount
        savedGems {
            _id
            name
            description
            address
            link
            gemId
        }
       }
    }
`;