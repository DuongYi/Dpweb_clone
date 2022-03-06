import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LINK_ADS } from 'src/constants';

import classes from './BlogItem.module.css';

function BlogItem({ blog }) {
  const openTabHandler = () => {
    window.open(LINK_ADS, '_blank');
  };

  return (
    <div className={classes['blog-grid']} id="#blog">
      <Link to={`/Blog/${blog.id}`} onClick={openTabHandler}>
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
