import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from "../Header/Header";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import Posts from "../Posts/Posts";

const Home = () => (
  <div className="Home">
      <Header />
      <FeaturedPost />
      <Posts />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
