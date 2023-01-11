import React from 'react';
import PropTypes from 'prop-types';
import './BlogPage.css';
import { useLocation } from 'react-router-dom'


function BlogPage() {
  const location = useLocation()
  const data = location.state;
  console.log(data);
  return (
    <>
    <div className="BlogPage">
      BlogPage Component
    </div>
    </>
  );
};

BlogPage.propTypes = {};

BlogPage.defaultProps = {};

export default BlogPage;
