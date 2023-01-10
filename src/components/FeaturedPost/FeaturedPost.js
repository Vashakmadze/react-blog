import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedPost.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { NavLink } from "react-router-dom";


function FeaturedPost(props)  {
  return (
    <div className="FeaturedPost">
      {
        props.post &&       
          <div className='postContainer'>
            <div className='coverImage'>
              <img src={props.post.image} alt="Cover Media" title='Cover Media'/>
            </div>
            <div className='postContent'>
              <div className='postTitle'>
                <h1 className='postTitleText'>{props.post.title}</h1>
              </div>
              <div className='postTags'>
                <p className='postTag'>{props.post.tag} /&nbsp;</p>
                <p className='postDate'> {props.post.date}</p>
              </div>
              <div className='postLimited'>
                {ReactHtmlParser(props.post.html)}
              </div>

              <div className='readMore'><NavLink to={`/${props.post.title}`}>Read More</NavLink></div>
            </div>
          </div>
      }
    </div>
  );
};

FeaturedPost.propTypes = {};

FeaturedPost.defaultProps = {};

export default FeaturedPost;
