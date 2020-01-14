import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Posts from '../blog/Posts';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/blog' component={Posts} />
      </Switch>
    </section>
  );
};

export default Routes;
