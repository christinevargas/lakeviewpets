import gql from "graphql-tag";
// import { RouteComponentProps } from 'react-router-dom';

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