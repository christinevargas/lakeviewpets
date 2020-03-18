import React, { FC } from 'react'
import { Form, Button, Col, Image, ListGroup } from 'react-bootstrap'

const AdoptionForm: FC = () => {
    return (

      <div className="adoption-form-container">
        
        <Form className="adoption-form-fields">
        <h1 className="adoption-form-header">
            Pet Adoption Form
        </h1>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="fname" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lname" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>


          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Chicago"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" value="Choose...">
                <option>Choose...</option>
                <option>IL</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
                <Form.Check 
                  type="checkbox"
                  label=" I Rent"
                />
                <Form.Check 
                  type="checkbox"
                  label=" I Own"
                />
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Which pet would</Form.Label>
            <Form.Control as="select">
              <option>Species</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Bunny</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPetsName">
              <Form.Label> you like to take home?</Form.Label>
              <Form.Control type="fname" placeholder="Pet's Name" />
            </Form.Group>
            </Form.Row>
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="I certify that I am 18 years or older." />
            <Form.Check type="checkbox" label="I certify that all household members are in agreeance with this adoption." />
            <Form.Check type="checkbox" label="I agree to pay the $200.00 adoption fee." />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Submit
          </Button>
        </Form>
        <div className="adoption-guidelines-container">
        
        <h1 className="adoption-guidelines-header">Adoption Guidelines</h1>
          <p className="rules"> To adopt a pet from Lakeview Pets, you must:</p>
          <div>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Be at least 18 years of age</ListGroup.Item>
            <ListGroup.Item>2. Have a government-issued photo ID, such as a driver's license or state ID</ListGroup.Item>
             <ListGroup.Item>3. Submit one Adoption Form for each pet being adopted</ListGroup.Item>
             <ListGroup.Item>4. Verify that you are allowed to have a pet of the species and size where you currently reside</ListGroup.Item>
            <ListGroup.Item>5. Be able to take the pet home on the day of adoption</ListGroup.Item>
     
           
          </ListGroup>
    
          </div>
          <Image src="/AdoptionFormImage.png" className="adoption-form-image"></Image>
          <p className="rules">Questions? Email us at info@lakeviewpets.com or call us at (312) 312-3123.</p>
      </div>
          
      </div>
   
     
     
    );
  }
  
  export default AdoptionForm;