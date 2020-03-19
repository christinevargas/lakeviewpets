import React, { FC } from "react"
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { PlusSquare } from "react-feather"
  


let pets = [
  { id: 1, name: "Benny", species: "Dog", age: 1, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Menace, but cute."},
  { id: 2, name: "Emma", species: "Dog", age: 15, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Sassy, but loving."},
  { id: 3, name: "Spike", species: "Dog", age: 7, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Energetic, loves walks."},
  { id: 4, name: "Rufus", species: "Dog", age: 5, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Doesn't mind napping all day."},
  { id: 5, name: "Maisie", species: "Dog", age: 8, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Well trained, very smart."},
  { id:6, name: "Spot", species: "Dog", age: 3, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Hyper, loves to jump."},
  { id:7, name: "Bella", species: "Dog", age: 6, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Enjoys long walks on the beach"},
  { id: 8, name: "Pupperoni", species: "Dog", age: 2, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Loves to eat."},
  { id: 9, name: "Lassie", species: "Dog", age: 10, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Older and low energy."},
  { id: 10, name: "Clifford", species: "Dog", age: 10, imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png", description: "Big Red Dog."},
]
  
  const AllPets: FC = () => {
  return (
      <div className="all-pets-page">
        <header className="all-pets-header">
          All Pets Available for Adoption
          <Link to="/create-pet-form">
          <PlusSquare className="plus-square-icon" size={40} color="black"></PlusSquare>
        </Link>
        </header>
       
        <div className="all-pets-container">
          {pets.map(pet => (
          <div key={pet.id} className="all-pets-cards">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pet.imgUrl} />
              <Card.Body>
                <Card.Title className='pet-name'>{pet.name}</Card.Title>
                <Card.Text>Species: {pet.species}</Card.Text>
                <Card.Text>Age: {pet.age}</Card.Text>
                <Card.Text>{pet.description}</Card.Text>

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