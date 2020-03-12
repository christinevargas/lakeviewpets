import React, { FC } from "react"
import { Figure, Jumbotron, Button, Container, Carousel } from 'react-bootstrap'



// export interface AppProps {
//     readonly prop1: string;
//   }

const categories = [
  {id: 1, species: "Dogs", imgUrl: '/DogLogo.png' },
  {id: 2, species: "Cats", imgUrl: '/CatLogo.png'},
  {id: 3, species: "Birds", imgUrl: '/BirdLogo.png'},
  {id: 4, species: "Bunnies", imgUrl: '/BunnyLogo.png' },
]
  
  
  const Homepage: FC = () => {
    return (
      <>
      <Jumbotron className="jumbotron-container">
        <Container>
        <h1 className="jumbotron-font">Hello, Chicago!</h1>
        <p className="jumbotron-font">
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
          className="category-img"
          />
        <Figure.Caption className="category-captions">
          <Button variant="outline-info">{category.species}</Button></Figure.Caption>
      </Figure>
      ))}
      </div>
      <Carousel className='carousel-container' interval={6000}>
        <Carousel.Item className="carousel-item">
          <img
          src="https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg"
          alt="First slide"
         />
        <Carousel.Caption>
          <h3 className="carousel-font">Hello, my name is Whiskers.</h3>
          <p className="carousel-font">I'm 8 weeks old and looking for my forever home!</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="https://www.trianglerabbits.org/adopt/rescues_files/stacks-image-feae2b0.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-font">Hello, my name is Honey the Bunny.</h3>
          <p className="carousel-font">I enjoy cuddles and kale and get the occasional zoomies.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="https://www.thesprucepets.com/thmb/K6l0YKtcUnFXd8YhCP40lpegyCw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-10-21at9.04.12AM-94e28f1cb3dd41f98784d805d2b59842.png"
            alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-font">Hello, my name is Birdie Sanders.</h3>
          <p className="carousel-font">I'm yellow and pretty mellow. Take me home today!</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default Homepage;