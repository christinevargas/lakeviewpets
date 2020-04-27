import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
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
import AboutUs from './components/AboutUs'
import AllDogs from './components/AllDogs'


const App: FC = () => { //default props/values should go in as params 
  return (
    <Router>
      <Navbar/>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/pets" component={AllPets} />
          <Route exact path="/pets/:id" component={SinglePet} />
          <Route exact path="/adoption-form" component={AdoptionForm} />
          <Route exact path="/create-pet-form" component={CreatePetForm} />
          <Route exact path="/edit-pet-form/:id" component={EditPetForm} />
          <Route exact path="/about-us-faq" component={AboutUs} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/dogs" component={AllDogs}/>
          <Route exact path="/cats"/>
          <Route exact path="/birds"/>
          <Route exact path="/bunnies"/>
      
          
    </Router>
  );
} 

export default App;
