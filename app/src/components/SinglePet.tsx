import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Image, Button } from 'react-bootstrap'
import { Edit } from 'react-feather' 



let pet = {
  id: 1,
  name: "Benny",
  species: "Dog",
  age: 1,
  description: "Menace, but cute!",
  imgUrl: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12130118/Golden-Retriever-Standing1.jpg"
}

const SinglePet: FC = () => {
    return (
      <div className="single-pet-container">
        
        <div className="single-pet-intro-container">
          <h1 className="single-pet-name">{pet.name}</h1>
          <Link to="/edit-pet-form">
          <Edit className="edit-icon" size={40} color="black"></Edit>
        </Link>
          
          <Image src={pet.imgUrl} className="single-pet-image"></Image>
        </div>
        <div className="single-pet-data-container">
          <h3 className="single-pet-header">Get to know me...</h3>
          <p>Species: {pet.species}</p>
          <p>Age: {pet.age}</p>
          <p>Description: {pet.description}</p>
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
  

