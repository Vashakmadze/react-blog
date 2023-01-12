import React from 'react';
import PropTypes from 'prop-types';
import './BlogPage.css';
import { useLocation } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';


function BlogPage() {
  const location = useLocation()
  const data = location.state;

  return (
    <>
      <div className="BlogPage">
        <img className='coverImageBlog' src={data.image} alt="Blog cover media" title="Blog cover media" />
        <div className='postBlog'>
          <h1 className='pageTitle'>{data.title}</h1>
          <div className='input'>
            {ReactHtmlParser(data.html)}
          </div>
        </div>
      </div>
    </>
  );
};

BlogPage.propTypes = {};

BlogPage.defaultProps = {};

export default BlogPage;
