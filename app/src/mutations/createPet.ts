import gql from "graphql-tag";

export default gql`
  mutation createPet($input: CreatePetInput) {
    createPet(input: $input) {
        id
        name
        species
        age
        imageUrl
        description
        adoptionFee
      }
  }
`;