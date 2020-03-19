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
import EditPetForm from './components/EditPetForm'
import AdoptionForm from './components/AdoptionForm'
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
          <Route exact path="/adoption-form" component={AdoptionForm} />
          <Route exact path="/create-pet-form" component={CreatePetForm} />
          <Route exact path="/edit-pet-form" component={EditPetForm} />
          <Route exact path="/cart" component={Cart} />
          
    </Router>
  );
}

export default App;
