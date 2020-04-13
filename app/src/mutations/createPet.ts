import gql from "graphql-tag";

export default gql`
  mutation createPet($data: PetCreateInput!) {
    createPet(data: $data) {
        # id
        name
        species
        age
        imageUrl
        description
        adoptionFee
      }
  }
`;