import gql from "graphql-tag";

export default gql`
  mutation createPet($data: PetCreateInput!) {
    createPet(data: $data) {
        name
        species
        age
        imageUrl
        description
        adoptionFee
      }
  }
`;