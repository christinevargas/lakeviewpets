import React, { FC } from "react"
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { PlusSquare } from "react-feather" 
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_PETS } from "../queries";


interface Pet {
  id: string
  name: string
  species: string
  age: number
  imageUrl: string
  description: string
  adoptionFee: number
}

  const AllPets: FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_PETS);


    //TODO:
    // Create reusable React component for the 3 lines below
      if (loading) return <p>LOADING</p>;
      if (error) return <p>ERROR</p>;
      if (!data) return <p>Not found</p>;

    return (
      <div className="all-pets-page">
        <header className="all-pets-header">
          All Pets Available for Adoption
          <Link to="/create-pet-form">
          <PlusSquare className="plus-square-icon" size={40} color="black"></PlusSquare>
        </Link>
        </header>

        <div className="allPets-"></div>
       
        <div className="all-pets-container">
          {data.pets.map((pet: Pet) => (
          <div key={pet.id} className="all-pets-cards">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pet.imageUrl} className="pet-card-img"/>
              <Card.Body>
                <Card.Title className='pet-name'>{pet.name}</Card.Title>
                <Card.Text>Species: {pet.species}</Card.Text>
                <Card.Text>Age: {pet.age}</Card.Text>
                <Card.Text>{pet.description}</Card.Text>
                <Card.Text>${pet.adoptionFee}</Card.Text>

                <Link to={`/pets/${pet.id}`}>
            <Button variant="outline-info">See More</Button>
            </Link>
              </Card.Body>
            </Card>
          </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default AllPets;