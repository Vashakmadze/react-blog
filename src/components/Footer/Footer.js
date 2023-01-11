import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { BsInstagram, BsFacebook } from "react-icons/bs";


const Footer = () => (
  <div className="Footer">
    <div className='socials'>
      <BsFacebook />
      <BsInstagram />
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
