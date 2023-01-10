import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { BsSearch } from "react-icons/bs";


const Header = () => (
  <header className='navbar'>
    <div className='title'>Liza's Blog</div>
    <nav className='navigation'>
      <ul>
        <li>home</li>
        <li>food</li>
        <li>mind</li>
        <li>selfcare</li>
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
