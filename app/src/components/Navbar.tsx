import React, { FC } from 'react'
import { Link } from 'react-router-dom';

//Feather Icons
import * as Icon from 'react-feather'


const Navbar: FC = () => {
    return (
      <div className="navbar">
       <Link to="/" style={{ textDecoration: 'none'}}>
        <Icon.Home color="black" size={30}/>
      </Link>
      <Link to="/pets" style={{ textDecoration: 'none', color:"black", fontSize: 22, fontFamily: "Bellota"}}>
        All Pets
      </Link>
      <Link to="/create-pet-form" style={{ textDecoration: 'none' }}>
        <Icon.PlusSquare color="black" size={30}/>
      </Link>
      </div>
    );
  }
  
  export default Navbar;