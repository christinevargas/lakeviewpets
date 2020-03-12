import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather'
import { Image } from 'react-bootstrap'


const Navbar: FC = () => {
    return (
      <div className="navbar-container">
        <div className="navbar-container-left">
       <Link to="/" style={{ textDecoration: 'none'}}>
        <Image src="/LogoWithName.png" className='logo'></Image>
      </Link>
      </div>
      <div className="navbar-container-right">
      <Link to="/pets" style={{ textDecoration: 'none'}}>
        <Image src='/AllPetsLogo.png' className='all-pets-icon'></Image>
      </Link>
      <Link to="/create-pet-form" style={{ textDecoration: 'none' }}>
        <Icon.PlusSquare color="black" size={30} className="add-pet-icon"/>
      </Link>
      </div>
      </div>
    );
  }
  
  export default Navbar;