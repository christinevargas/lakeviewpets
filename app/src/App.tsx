import React, { FC } from 'react';
import AllPets from "./components/AllPets"
import './App.css';

// export interface AppProps {
//   readonly prop1: string;
// }


const App: FC = () => { //default props/values should go in as params 
  return (
    <>
    <AllPets/>
    </>
  );
}

export default App;
