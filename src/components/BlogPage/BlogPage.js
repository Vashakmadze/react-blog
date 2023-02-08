import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './BlogPage.css';
import { useLocation, useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';


function BlogPage(props) {

  const blogId = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    props.posts.forEach(element => {
      if(element.id === blogId.id) {
        setPost(element);
      }
    });
  }, [props])

  return (
    <>
    { post.image !== null && 
      <div className="BlogPage">
        <img className='coverImageBlog' src={post.image} alt="Blog cover media" title="Blog cover media" />
        <div className='postBlog'>
          <h1 className='pageTitle'>{post.title}</h1>
          <div className='input'>
            {ReactHtmlParser(post.html)}
          </div>
        </div>
    </div>
    }
    </>
  );
};

BlogPage.propTypes = {};

BlogPage.defaultProps = {};

export default BlogPage;
