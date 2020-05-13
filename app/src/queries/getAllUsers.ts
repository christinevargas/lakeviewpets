import gql from 'graphql-tag'

export default gql`
query users($after: String) {
    users(after: $after) {
      id, 
      firstName, 
      lastName,
      email,
      password,
      address, 
      address2,
      city,
      state,
      zipcode,
      rentOrOwn,
      over18, 
      isAdmin
      }
    }
`;