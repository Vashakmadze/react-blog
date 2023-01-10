import React from 'react';
import PropTypes from 'prop-types';
import './BlogPage.css';

function BlogPage(props) {
  console.log(props);
  return (
    <div className="BlogPage">
      BlogPage Component
    </div>
  );
};

BlogPage.propTypes = {};

BlogPage.defaultProps = {};

export default BlogPage;
