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
            }
        }
    }
`;

// Saved Gem
export const SAVE_GEM = gql`
    mutation saveGem($name: String!, $description: String!, $address: String!, $link: String!, $gemId: String!) {
        saveGem(name: String!, description: String!, address: String!, link: String!, gemId: String!) {
            _id
            username
            email
            gemCount
            Gem {
              gemId
            } 
        }
    } 
`; // ** JH does this look right? 

// Remove Gem - *optional*
// export const REMOVE_GEM = gql`
//     mutation removeGem($gemId: ID!) {
//         removeGem(id: $id) {
//             _id
//             username
//             email
//             gemCount
//             Gem {
//               gemId
//             }
//         }
//     }
// `; DOES THIS LOOK OKAY? - optional section