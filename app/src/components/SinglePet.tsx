import React, { FC } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { useQuery } from "@apollo/react-hooks"
import { Image, Button } from 'react-bootstrap'
import { Edit } from 'react-feather' 
import { GET_PET } from '../queries'
// import { Pet } from '../../../my-yoga-server/'


// import { typeDefs as Pet } from '../../../my-yoga-server/src';

// const Query = `
//   type Query {
//     author(id: Int!): Post
//     book(id: Int!): Post
//   }
// `;

interface PetProps extends RouteComponentProps {
    id?: any;
  }

const SinglePet: FC<PetProps> = ({ id }) => {
  const { data, loading, error } = useQuery(GET_PET, {
    variables: { id }
  });

      if (loading) return <p>LOADING</p>;
      if (error) return <p>ERROR</p>;
      if (!data) return <p>Not found</p>;

    return (
      <div className="single-pet-container">
        <div className="single-pet-intro-container">
          <h1 className="single-pet-name">{data.name}</h1>
          <Link to="/edit-pet-form">
          <Edit className="edit-icon" size={40} color="black"></Edit>
        </Link>
          
          <Image src={data.imageUrl} className="single-pet-image"></Image>
        </div>
        <div className="single-pet-data-container">
          <h3 className="single-pet-header">Get to know me...</h3>
          <p>Species: {data.species}</p>
          <p>Age: {data.age}</p>
          <p>Description: {data.description}</p>
          <p>Adoption Fee: $50.00</p>
        </div>
        <div className="single-pet-buttons-container">
          <Button variant="outline-info" className="single-pet-button">Add Pet to Crate</Button>
          <Button variant="outline-info" className="single-pet-button">Go To Adoption Form</Button>
        </div>
      </div>
    );
  }
  
  export default SinglePet;
  

