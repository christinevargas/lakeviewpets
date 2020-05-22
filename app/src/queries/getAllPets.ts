import gql from 'graphql-tag'

export default gql`
query pets($after: String) {
    pets(after: $after) {
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