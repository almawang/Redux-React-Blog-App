import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Show from './containers/show';
import New from './containers/new';
import Index from './containers/indexpage';
import SignUp from './containers/signup';
import SignIn from './containers/signin';
import RequireAuth from './containers/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="signup" component={SignUp} />
    <Route path="signin" component={SignIn} />
  </Route>
);
