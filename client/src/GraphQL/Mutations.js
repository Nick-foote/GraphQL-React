import { gql } from '@apollo/client';

// mutation functionName(arguemtn and type that the mutation will receive)
// Inner functionName(argumentName: $argumentType) - uses the variables above
//      $argumentName    $ = variable
//  Inner functionName() {what do we want returned}

export const CREATE_USER = gql`
    mutation createUser(
            $firstName: String!
            $lastName: String!
            $email: String!
            $password: String!
        ) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            id
            firstName
            lastName
            email
        }
    }
`
