import { gql } from '@apollo/client';

// Login 
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// Add User 
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
      }
    }
`;

// Saved Gem
export const SAVE_GEM = gql`
    mutation SaveGem($name: String!, $description: String!, $address: String!, $link: String!, $gemId: String!) {
        SaveGem(name: $name, description: $description, address: $address, link: $link, gemId: $gemId) {
        _id
        gemCount
        savedGems {
            name
            description
            address
            link
            gemId
        }
      }
    }
`; 

// Remove Gem - *optional*
export const REMOVE_GEM = gql`
    mutation SaveGem($gemId: ID!) {
        removeGem(gemId: $gemId) {
        gemCount
        savedGems {
            name
            description
            address
            link
            gemId
        }
      }
    }  
`; //DOES THIS LOOK OKAY? - optional section