import gql from "graphql-tag";

export default gql`
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {
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