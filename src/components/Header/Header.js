import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { BsSearch } from "react-icons/bs";
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
      <BsSearch />
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
