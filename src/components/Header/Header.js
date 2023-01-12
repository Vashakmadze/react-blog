import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { FiLogIn } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header className='navbar'>
    <div className='title'>Liza's Blog</div>
    <nav className='navigation'>
      <ul>
        <li><NavLink to={`/react-blog/home`}>home</NavLink></li>
        <li><NavLink to={`/react-blog/food`}>food</NavLink></li>
        <li><NavLink to={`/react-blog/mind`}>mind</NavLink></li>
        <li><NavLink to={`/react-blog/selfcare`}>selfcare</NavLink></li>
      </ul>
    </nav>
    <div className='search'>
      <NavLink to={`/react-blog/login`}><FiLogIn /></NavLink>
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
