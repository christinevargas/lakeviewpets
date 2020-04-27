import gql from "graphql-tag";

export default gql`
 mutation updatePet($data: PetUpdateInput!, $id: PetWhereUniqueInput!) {
    updatePet(data: $data, where: $id ) {
        name
        species
        age
        imageUrl
        description
        adoptionFee
      }
  }
`;