import gql from "graphql-tag";

export default gql`
  query pet($id: String!) {
    pet(id: $id) {
      name
      species
      age
      imageUrl
      description
      adoptionFee
    }
  }
`;