import gql from "graphql-tag";

export default gql`
 mutation updateUser($data: UserUpdateInput!, $id: UserWhereUniqueInput!) {
    updatePet(data: $data, where: $id ) {
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