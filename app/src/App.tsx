import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import { AboutUs, AdoptionForm, AllPets, Cart, CreatePetForm, EditPetForm, FilteredPets, Homepage, Navbar, SinglePet, SignUp } from './components'


const App: FC = () => {
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
          <Route exact path="/filtered/:species" component={FilteredPets}/>
          <Route exact path="/signup" component={SignUp}/>
    </Router>
  );
} 

export default App;


