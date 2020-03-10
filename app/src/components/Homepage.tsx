import React, { FC } from "react"

//Components
import AllPets from './AllPets'
import Navbar from './Navbar'

// export interface AppProps {
//     readonly prop1: string;
//   }
  
  
  const Homepage: FC = () => {
    return (
      <>
      <h1 className="homepage-header">
      Welcome to the Associate Pet Shop!
      </h1>
      <AllPets/>
      </>
    );
  }
  
  export default Homepage;