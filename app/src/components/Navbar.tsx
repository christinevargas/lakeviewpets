import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather'
import { Image } from 'react-bootstrap'


const Navbar: FC = () => {
    return (
      <div className="navbar-container">
       <Link to="/" style={{ textDecoration: 'none'}}>
        <Image src="/Logo.png" className='logo'></Image>
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