import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';

function Posts(props) {

  return (
    <div className="Posts">
      <h1 className='postsHeader'>Latest Posts</h1>
      <div className='gridWrapper masonary masonary--h'>
          {props.posts.map((item) => {
            return (
              <div className='card masonary-brick  masonary-brick--h'>
                <img className='masonary-img' src={item.image} />
                <div className='titleBlog'>
                  <h2 className='masonaryTitle'>{item.title}</h2>
                  <div className='postMasonaryTag'>
                    <p className='postTagMasonary'>{item.tag} /&nbsp;</p>
                    <p className='postDateMasonary'> {item.date}</p>
                  </div>
                </div>
              </div>
          )
          })}        
      </div>
    </div>
  )

};

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
