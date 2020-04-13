import React, { FC } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { useQuery } from "@apollo/react-hooks"
import { Image, Button } from 'react-bootstrap'
import { Edit } from 'react-feather' 
import { GET_PET } from '../queries'

const SinglePet: FC<RouteComponentProps> = (props) => {

  let propsId = Object.values(props.match.params)
  let petId = propsId.toString()

  // console.log(petId)
  // console.log(props)

  const { data, loading, error } = useQuery(GET_PET,
    {
    variables: { id: petId}
    }
  );

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

    return (

      <div className="single-pet-container">
        <div className="single-pet-intro-container">
          <h1 className="single-pet-name">{data.pet.name}</h1>
          <Link to="/edit-pet-form">
          <Edit className="edit-icon" size={40} color="black"></Edit>
        </Link>
          
          <Image src={data.pet.imageUrl} className="single-pet-image"></Image>
        </div>
        <div className="single-pet-data-container">
          <h3 className="single-pet-header">Get to know me...</h3>
          <p>Species: {data.pet.species}</p>
          <p>Age: {data.pet.age}</p>
          <p>Description: {data.pet.description}</p>
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
  

