import React from 'react';

import PropTypes from 'prop-types';

import classes from './BlogItem.module.css';

function BlogItem({ blog }) {
  return (
    <div className={classes['blog-grid']} id="#blog">
      <div className={classes['blog-thumbnail']}>
        <a rel="tag">
          <img src={blog.image} alt={blog.title} />
        </a>
      </div>
      <div className={classes['blog-content']}>
        <h3 className={classes['content-title']}>
          {blog.title}
        </h3>
      </div>
    </div>
  );
}

BlogItem.propTypes = {
  blog: PropTypes.object
};

export default BlogItem;
