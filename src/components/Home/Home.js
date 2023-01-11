import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import Posts from "../Posts/Posts";

function Home(props) {

  return (
    <div className="Home">
      <FeaturedPost post={getFeatured(props.posts)}/>
      <h1 className='postsHeader'>Latest Posts</h1>
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
