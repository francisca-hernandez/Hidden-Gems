import { gql } from '@apollo/client';

// Login 
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            
        }
    }
`;

// Add User 

// Saved Gem

// Remove Gem - *optional*