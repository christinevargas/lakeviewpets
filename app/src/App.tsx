import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'; //unsure if needed
import 'bootstrap/dist/css/bootstrap.min.css';


//Components
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import AllPets from './components/AllPets'
import SinglePet from './components/SinglePet'
import CreatePetForm from './components/CreatePetForm'
import AdoptPetForm from './components/AdoptPetForm';
import Cart from './components/Cart'


// export interface AppProps {
//   readonly prop1: string;
// }


const App: FC = () => { //default props/values should go in as params 
  return (
    <Router>
      <Navbar/>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/pets" component={AllPets} />
          <Route exact path="/pets/:id" component={SinglePet} />
          <Route exact path="/create-pet-form" component={CreatePetForm} />
          <Route exact path="/adoption-form" component={AdoptPetForm} />
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path="/update-pet-form" component={UpdatePetForm} /> */}
    </Router>
  );
}

export default App;
