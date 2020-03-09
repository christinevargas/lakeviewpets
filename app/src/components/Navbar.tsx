import React, { FC } from 'react'
import { Link } from 'react-router-dom';


const Navbar: FC = () => {
    return (
      <div className="navbar">
       <Link to="/" style={{ textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/pets" style={{ textDecoration: 'none' }}>
        All Pets
      </Link>
      <Link to="/new-robot-form" style={{ textDecoration: 'none' }}>
        Add New Pet
      </Link>
      </div>
    );
  }
  
  export default Navbar;