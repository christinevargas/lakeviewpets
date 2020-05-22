import gql from "graphql-tag";

export default gql`
  query user($id: ID!) {
    user(where: { id: $id }) {
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