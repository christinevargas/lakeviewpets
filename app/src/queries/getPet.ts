import gql from "graphql-tag";

export default gql`
  query pet($id: ID!) {
    pet(where: { id: $id }) {
      name
      species
      age
      imageUrl
      description
      adoptionFee
    }
  }
`;