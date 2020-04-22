import React, { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Form, Button, Image, ListGroup } from 'react-bootstrap'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UPDATE_PET } from '../../src/mutations';

type PetUpdateInput = {
  name: String
  species: String
  age: Number
  imageUrl: String
  description: String
  adoptionFee: Number
}

toast.configure()

const EditPetForm: FC<RouteComponentProps> = (props) => {

const pet: any = props.location.state;

const [validated, setValidated] = useState(false);
const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const [petToUpdate, updatePet] = useState({
    name: pet.name,
    species: pet.species,
    age: pet.age,
    imageUrl: pet.imageUrl,
    description: pet.description,
    adoptionFee: pet.adoptionFee
  })

  const [updatePetMutation] = useMutation(UPDATE_PET, {
    onCompleted: () => toast('Success! Pet updated!', {type: 'success'})
  })

  //TODO:
  // Create reusable React component for the 3 lines below
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error...</p>
  // if (!data) return <p>Not Found</p>


  const { name, species, age, imageUrl, description, adoptionFee } = petToUpdate

  const handleUpdatePet = (attributeToUpdate: any): void => {
    updatePet({ ...petToUpdate, ...attributeToUpdate });
  };

    return (
      <div className="edit-pet-form-container">
      <div className="edit-pet-guidelines-container">
      <Image src={imageUrl} className="edit-pet-form-image"></Image>      
        <h1 className="edit-pet-guidelines-header">Edit A Pet Guidelines</h1>
          <div>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Only edit the necessary fields.</ListGroup.Item>
            <ListGroup.Item>2. All fields are required. Form cannot be submitted unless all fields are completed.</ListGroup.Item>
            <ListGroup.Item>3. Please enter accurate information. If unsure, please ask management before submitting.</ListGroup.Item>
            <ListGroup.Item>4. After submitting, verify that the new changes have saved.</ListGroup.Item>
            <ListGroup.Item>5. Continue sharing the pet on all of Lakeview Pets' social media accounts!</ListGroup.Item>
          </ListGroup>  
          </div>
      </div>
      <Form className="edit-pet-form-fields" noValidate validated={validated} onSubmit={handleSubmit}>
      <h1 className="edit-pet-form-header">
          Edit A Pet
      </h1>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Pet Name</Form.Label>
        <Form.Control required type="fname" value={name} onChange={ (event: any) => handleUpdatePet({name: event.target.value })}/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Species</Form.Label>
        <Form.Control required as="select" value={species} onChange={ (event: any) => handleUpdatePet({species: event.target.value })}>
          <option>Select</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Bunny</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Age</Form.Label>
        <Form.Control required as="select" value={age} onChange={ (event: any) => handleUpdatePet({age: +event.target.value })}>
          <option>In years</option>
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
          <option>19</option>
          <option>20</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image URL</Form.Label>
        <Form.Control required type="text" value={imageUrl} onChange={ (event: any) => handleUpdatePet({imageUrl: event.target.value })}/>
        <Form.Control.Feedback type="invalid">
              Please provide an image url.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea2">
        <Form.Label>Description</Form.Label>
        <Form.Control required as="textarea" rows="3" value={description} onChange={ (event: any) => handleUpdatePet({description: event.target.value })}/>
        <Form.Control.Feedback type="invalid">
              Please provide a description.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea3">
          <Form.Label>Adoption Fee:</Form.Label>
          <Form.Control as="select" value={adoptionFee} onChange={ (event: any) => handleUpdatePet({adoptionFee: event.target.value })}>
          <option>$50</option>
          </Form.Control>
        </Form.Group>
      <Button
        variant="outline-info"
        type="submit"
        onClick={(event:any): void => {
          event.preventDefault();
          if(petToUpdate){
            const data: PetUpdateInput = {
              name: petToUpdate.name,
              species: petToUpdate.species,
              age: petToUpdate.age,
              imageUrl: petToUpdate.imageUrl,
              description: petToUpdate.description,
              adoptionFee: petToUpdate.adoptionFee
            };
            updatePetMutation({ variables: { data: data, id: props.match.params }});
          } else {
            toast('Oops! Looks like there was an error! Pet was not updated.', {
              type: 'error'
            })
          }
        }}
        >Save Changes</Button>
    </Form>
  </div>
    );
  }
  
  export default EditPetForm;
