import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { BsInstagram, BsFacebook } from "react-icons/bs";


const Footer = () => (
  <div className="Footer">
    <div className='socials'>
      <a href='https://www.facebook.com/lizaachkaaaa'><BsFacebook /></a>
      <a href='https://www.instagram.com/metonidzeliza/'><BsInstagram /></a>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
