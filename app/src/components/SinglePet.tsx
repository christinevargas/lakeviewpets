import React, { FC } from 'react'
import { Card } from 'react-bootstrap'


let pet = {
  id: 1,
  name: "Benny",
  species: "Dog",
  age: 1,
  description: "Menace, but cute!",
  imgUrl: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12130118/Golden-Retriever-Standing1.jpg",
  price: 7643519
}

const SinglePet: FC = () => {
    return (
      <div className="single-pet-container">
        
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pet.imgUrl} className="single-pet-image"/>
          <Card.Body>
          <Card.Title className='pet-name'>{pet.name}</Card.Title>
          <Card.Text>Species: {pet.species}</Card.Text>
          <Card.Text>Age: {pet.age}</Card.Text>
          <Card.Text>Description: {pet.description}</Card.Text>
          <Card.Text>Price: ${pet.price}</Card.Text>
          </Card.Body>
      </Card>
      </div>
    );
  }
  
  export default SinglePet;
  

