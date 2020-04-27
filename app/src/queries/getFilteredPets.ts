import gql from "graphql-tag";

export default gql`
query pets($species: String) {
    pets(where: { species: $species}) {
      id, 
      name, 
      species,
      age,
      imageUrl,
      description,
      adoptionFee
      }
    }
`;