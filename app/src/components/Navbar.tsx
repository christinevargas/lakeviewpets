import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap'


// function renderTooltip(){
//   return <Tooltip id={1}>View All Pets</Tooltip>
// }

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
  
      <Link to="/adoption-form" style={{ textDecoration: 'none' }}>
        <Image src="/AdoptPetFormIcon.png" className="adoption-form-icon"/>
      </Link>

      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <Image src="/CartIcon.png" className="cart-icon"/>
      </Link>
      </div>
      </div>
    );
  }
  
  export default Navbar;


