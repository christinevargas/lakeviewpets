import React, { FC } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { useQuery } from "@apollo/react-hooks"
import { Image, Button } from 'react-bootstrap'
import { Edit } from 'react-feather' 
import { GET_PET } from '../queries'

const SinglePet: FC<RouteComponentProps> = (props) => {

  let propsId = Object.values(props.match.params)
  let petId = propsId.toString()

  const { data, loading, error } = useQuery(GET_PET,
    {
    variables: { id: petId}
    }
  );

  //TODO:
  // Create reusable React component for the 3 lines below
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (!data) return <p>Not Found</p>

  const { name, species, age, imageUrl, description } = data.pet

  return (
    <div className="outermost-div">

    <div className="sibling-pic-containter">
      <Image className="pic" src={imageUrl}></Image>
    </div>

    <div className="sibling-info-container">
      <div className="title">
      <h1 className="pet-name">{name}</h1>
      <Link to={{
          pathname: `/edit-pet-form/${petId}`,
          state: data.pet
       }}>
          <Edit className="edit-icon" size={35} color="black"></Edit>
        </Link>

      </div>
      <h5 className="pet-description">{description}</h5>
      <h6 className="details">Age: {age} year(s)</h6>
      <h6 className="details">{species}</h6>


      <div className="fee-container">
        <h4 className="adoption-fee">Adoption Fee: $50.00</h4>
      </div>

      <div className="button-container">
        <Button type="submit" variant="outline-info" className="adopt-pet-button">Add Pet To Crate</Button>
        <h4 className="available">Available!</h4>
      </div>

    </div>
    </div>
  );
  }
  
  export default SinglePet;
  

