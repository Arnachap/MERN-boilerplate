import React, { Fragment } from 'react';

import PostItem from './PostItem';

const Posts = () => {
  return (
    <Fragment>
      <div className='p-3 mx-auto text-center'>
        <h1>Blog posts</h1>

        <p className='lead'>Latests posts</p>

        <div className='row'>
          <div className='col-12'>
            <PostItem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
