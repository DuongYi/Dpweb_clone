import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './BlogItem.module.css';

function BlogItem({ blog }) {
  return (
    <div className={classes['blog-grid']} id="#blog">
      <Link to={`/Blog/${blog.id}`}>
        <div className={classes['blog-thumbnail']}>
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className={classes['blog-content']}>
          <h3 className={classes['content-title']}>
            {blog.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

BlogItem.propTypes = {
  blog: PropTypes.object
};

export default BlogItem;
