import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedPost.css';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from "react-router-dom";


function FeaturedPost(props)  {
  const item = props.post;
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
                <h1 className='postTitleText'>{item.title}</h1>
              </div>
              <div className='postTags'>
                <p className='postTag'>{item.tag} /&nbsp;</p>
                <p className='postDate'> {item.date}</p>
              </div>
              <div className='postLimited'>
                {ReactHtmlParser(item.html)}
              </div>

              <div className='readMore'><NavLink to={`/react-blog/${item.title}`} state={item}>Read More</NavLink></div>
            </div>
          </div>
      }
    </div>
  );
};

FeaturedPost.propTypes = {};

FeaturedPost.defaultProps = {};

export default FeaturedPost;
