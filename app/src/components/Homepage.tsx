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
      <Navbar/>
      <AllPets/>
      </>
    );
  }
  
  export default Homepage;