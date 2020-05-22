import React, { FC, useState } from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

toast.configure()

const CreatePetForm: FC = () => {

  const [pet, createPet] = useState({
    name: '',
    species: '',
    age: Number(''),
    imageUrl: '',
    description: '',
    adoptionFee: 50
  })

  const { name, species, age, imageUrl, description, adoptionFee } = pet

  const handleCreatePet = (attributeToUpdate: any) => {
    createPet({...pet, ...attributeToUpdate})
  }
  
  const [createPetMutation] = useMutation(CREATE_PET, {
    onCompleted: () => toast('Success! Pet created!', {type: 'success'}),
  })

    return (
      <div className="create-pet-form-container">
        <div className="create-pet-guidelines-container">
        <Image src={"/FrontFacingBunny.png"} className="create-pet-form-image"></Image>      
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
          <Form.Control type="fname" placeholder="Pet Name" value={name} onChange={ (event: any) => handleCreatePet({ name: event.target.value })}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Species</Form.Label>
          <Form.Control as="select" value={species} onChange={ (event: any) => handleCreatePet({ species: event.target.value })}>
            <option>Select</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Bunny</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Age</Form.Label>
          <Form.Control as="select" value={"In years"} onChange={ (event: any) => handleCreatePet({ age: +event.target.value })}> 
            <option disabled>In years</option>
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
          <Form.Control type="text" placeholder="Image URL" value={imageUrl} onChange={ (event: any) => handleCreatePet({ imageUrl: event.target.value })}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" value={description} onChange={ (event: any) => handleCreatePet({ description: event.target.value })}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea3">
          <Form.Label>Adoption Fee:</Form.Label>
          <Form.Control as="select" onChange={ (event: any) => handleCreatePet({ adoptionFee: event.target.value })}>
          <option>$50</option>
          </Form.Control>
        </Form.Group>
        <Button
          variant="outline-info"
          type="submit"
          onClick={async (event:any) => {
            event.preventDefault();
            if(Object.keys(pet).length){
              const data: PetCreateInput = {
                name,
                species,
                age,
                imageUrl,
                description,
                adoptionFee
              };
              createPetMutation({ variables: { data: data }});
            } else {
              toast('Oops! Looks like there was an error! Pet was not created.', {
                type: 'error'
              })
            }
          }}
        >Add New Pet
        </Button>
        </Form>
      </div>
    )
  }
  
  export default CreatePetForm;