import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Header from "../Header/Header";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import Posts from "../Posts/Posts";

function Home(props) {

  return (
    <div className="Home">
      <Header />
      <FeaturedPost post={getFeatured(props.posts)}/>
      <Posts posts={props.posts}/>
    </div>
  )

};

function getFeatured(arrayOfObjects) {
  for(let object of arrayOfObjects) {
    if(object.featured === true) {
      return object;
    }
  }
  return arrayOfObjects[0];
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
