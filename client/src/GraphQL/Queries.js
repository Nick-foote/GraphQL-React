import { gql } from '@apollo/client';

export const LOAD_ALL_USERS = gql`
    query {
        getAllUsers(limit:100) {
        id
        firstName
        lastName
        email
        password
        }
    }
`;