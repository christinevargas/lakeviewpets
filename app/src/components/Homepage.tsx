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
          <Button variant="outline-info" className="homepage-buttons">Learn more</Button>
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
          <Button variant="outline-info" className="homepage-buttons">{category.species}</Button></Figure.Caption>
      </Figure>
      ))}
      </div>
      <Carousel className='carousel-container' interval={6000}>
        <Carousel.Item className="carousel-item">
          <img
          height={700}
          width={1000}
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
            height={700}
            width={1000}
            src="https://www.rabbitrescue.com/butternut.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-font">Hello, my name is Honey the Bunny.</h3>
          <p className="carousel-font">I enjoy cuddles and kale and get the occasional zoomies.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            height={700}
            width={1000}
            src="https://www.thesprucepets.com/thmb/K6l0YKtcUnFXd8YhCP40lpegyCw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-10-21at9.04.12AM-94e28f1cb3dd41f98784d805d2b59842.png"
            alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-font">Hello, my name is Birdie Sanders.</h3>
          <p className="carousel-font">I'm yellow and pretty mellow. Take me home today!</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 className="guarantee-header">When you adopt a pet from Lakeview Pets, we guarantee...</h2>

        <div className="homepage-icons-container">


        <Figure>
          <Figure.Image
            src="/DogHeartIcon.png" className="homepage-icons"
          />
          <Figure.Caption className="icon-captions">
            Your new pet = your new BFF, full of love and joy.
          </Figure.Caption>
        </Figure>
        
        <Figure>
          <Figure.Image
            src="/HealthIcon.png" className="homepage-icons"
          />
          <Figure.Caption className="icon-captions">
            Your new BFF is 110% healthy and up to date with all vaccinations.
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            src="/DogAndHumanIcon.png" className="homepage-icons"
          />
          <Figure.Caption className="icon-captions">
            Your BFF will bring you companionship and a good time.
          </Figure.Caption>
          </Figure>

          <Figure>
          <Figure.Image
            src="/Paws.png" className="homepage-icons"
          />
          <Figure.Caption className="icon-captions">We will be along for the journey and provide you the support you both need.
          </Figure.Caption>
          </Figure>

          <Figure>
          <Figure.Image
            src="/HeartIcon.png" className="homepage-icons"
          />
          <Figure.Caption className="icon-captions">Did we already mention love? SO MUCH LOVE.
          </Figure.Caption>
        </Figure>
        </div>
        <div className="homepage-footer">
          <p>Lakeview Pets ©</p>
          <p>info@lakeviewpets.com | (312) 312-3123</p>
        </div>
      </>
    );
  }
  
  export default Homepage;


