import React, { FC, useState } from 'react'
import { Form, Button, Image, ListGroup } from 'react-bootstrap'

import { useMutation } from '@apollo/react-hooks'

const CreatePetForm: FC = () => {

  // const handleKeyUp = (evt) => {
  //   if (evt.keyCode === 13) {
  //     console.log(evt.target.value);
  //     evt.target.value = '';
  //   }
  // };
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('')
  const [age, setAge] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');




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
          <Form.Label>Pet Name</Form.Label>
          <Form.Control type="fname" placeholder="Pet Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Species</Form.Label>
          <Form.Control as="select">
            <option>Select</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Bunny</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Age</Form.Label>
          <Form.Control as="select">
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
          <Form.Control type="text" placeholder="Image URL" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        {/* <div className="create-pet-radios-container">
        <Form.Group as={Row}>
          <Form.Label column lg={6}>
            Available for adoption?
          </Form.Label>
          <Col lg={10} >
            <Form.Check
              type="radio"
              label="Yes"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="No"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
          </Col>
        </Form.Group>
        </div> */}
        <Button variant="outline-info">Add New Pet</Button>
      </Form>
    </div>
    );
  }
  
  export default CreatePetForm;
  