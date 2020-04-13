import React, { FC, useState } from 'react'
import { Form, Button, Image, ListGroup } from 'react-bootstrap'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_PET } from '../mutations'


type PetCreateInput = {
  name: String
  species: String
  age: Number
  imageUrl: String
  description: String
  adoptionFee: Number
}

const CreatePetForm: FC = () => {

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('')
  const [age, setAge] = useState(Number(''));
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [adoptionFee, setAdoptionFee] = useState(50)
  
  const [createPetMutation] = useMutation(CREATE_PET, {
    onCompleted: () => console.log('Pet added!'),
  })


    return (
      <div className="create-pet-form-container">
        <div className="create-pet-guidelines-container">
        <Image src="/FrontFacingBunny.png" className="create-pet-form-image"></Image>      
          <h1 className="create-pet-guidelines-header">New Pet Guidelines</h1>
            <div>
            <ListGroup variant="flush">
              <ListGroup.Item>1. One form must be submitted per each new pet.</ListGroup.Item>
              <ListGroup.Item>2. All fields are required. Form cannot be submitted unless all fields are completed.</ListGroup.Item>
              <ListGroup.Item>3. Please enter accurate information. If unsure, please ask management before submitting.</ListGroup.Item>
              <ListGroup.Item>4. After submitting, verify that the newly added pet has been created.</ListGroup.Item>
              <ListGroup.Item>5. Share the newly added pet on all of Lakeview Pets' social media accounts!</ListGroup.Item>
            </ListGroup>  
            </div>
        </div>
        <Form className="create-pet-form-fields">
        <h1 className="create-pet-form-header">
            Add A New Pet
        </h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Pet Name
          </Form.Label>
          <Form.Control type="fname" placeholder="Pet Name" value={name} onChange={(event:any) => setName(event.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Species</Form.Label>
          <Form.Control as="select" value={species} onChange={(event:any) => setSpecies(event.target.value)}>
            <option>Select</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Bunny</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Age</Form.Label>
          <Form.Control as="select" onChange={(event:any) => setAge(Number(event.target.value))}> 
            <option>In years</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image URL" value={imageUrl} onChange={(event:any) => setImageUrl(event.target.value)}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" value={description} onChange={(event:any) => setDescription(event.target.value)}/>
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea3">
          <Form.Label>Adoption Fee: $</Form.Label>
          <Form.Control as="select" onChange={(event:any) => setAdoptionFee(50)}>
          <option>50</option>
          </Form.Control>
        </Form.Group>
        <Button
          variant="outline-info"
          type="submit"
          onClick={(event:any): void => {
            event.preventDefault();
            if(name !== "" && species !== "" && imageUrl !== "" && description !== ""){
              const data: PetCreateInput = {
                name: name,
                species: species,
                age: age,
                imageUrl: imageUrl,
                description: description,
                adoptionFee: adoptionFee
              };
              createPetMutation({ variables: { data: data }});
            } else {
              console.log('Oops! Looks like there was an error. Pet was not created.')
            }
          }}
        >Add New Pet
        </Button>
        </Form>
      </div>
    )
  }
  
  export default CreatePetForm;
