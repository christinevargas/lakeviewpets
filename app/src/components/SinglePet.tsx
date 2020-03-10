import React, { FC } from 'react'


let pet = {
  id: 1,
  name: "Benny",
  species: "dog",
  age: 1,
  description: "Menace, but cute.",
  imgUrl: "https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
}

const SinglePet: FC = () => {
    return (
      <div className="single-pet-container">
        <h2>Name: {pet.name}</h2>
        <h3>Species: {pet.species}</h3>
        <h3>Age: {pet.age}</h3>
        <img className="single-pet-image" src={pet.imgUrl} alt="image" />
        <div>
          <p>{pet.description}</p>
        </div>
      </div>
    );
  }
  
  export default SinglePet;
  