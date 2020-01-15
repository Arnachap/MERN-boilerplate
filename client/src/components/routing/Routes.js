import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Posts from '../blog/Posts';
import Login from '../auth/Login';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/blog' component={Posts} />

        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
  );
};

export default Routes;
