import React, { FC } from "react"
import { Figure, Jumbotron, Button, Container } from 'react-bootstrap'

//Components
import AllPets from './AllPets'

// export interface AppProps {
//     readonly prop1: string;
//   }

const categories = [
  {id: 1, species: "Dogs", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZ7EO7OG3tTwKJEUB5VdLiXTNexLdnckqNP218SGzk99-zBjp-"},
  {id: 2, species: "Cats", imgUrl: "https://toppng.com/uploads/preview/free-download-cat-png-vector-icon-cat-transparent-background-cat-icon-transparent-background-11563035549ypnlilorb5.png"},
  {id: 3, species: "Birds", imgUrl: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/bird.png"},
  {id: 4, species: "Bunnies", imgUrl: "https://static.thenounproject.com/png/208196-200.png"},
]
  
  
  const Homepage: FC = () => {
    return (
      <>

      <Jumbotron>
        <Container>
        <h1>Hello, Chicago!</h1>
        <p>
          We're Lakeview Pets and we're new in town. Let us introduce you to your new best friend. Find us (and your future BFF) at the intersection of Broadway & Wellington in Lakeview East.
        </p>
        <p>
          <Button variant="outline-info">Learn more</Button>
        </p>
        </Container>
      </Jumbotron>
      <div className="category-figures">
      {categories.map(category=> (
        <Figure key={category.id}>
        <Figure.Image
          alt="Cannot Load"
          src={category.imgUrl}
          roundedCircle
          className="category-img"
          />
        <Figure.Caption className="category-captions">{category.species}</Figure.Caption>
      </Figure>
      ))}
      </div>
      {/* <AllPets/> */}
      </>
    );
  }
  
  export default Homepage;
