import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import forumPage from './forumPage/forumPage';
// import userCard from './userCard/userCard';

export default function Routes() {
    return <Router>
        <Switch>
            <Route path='/forumPage' exact component={forumPage} />

            {/* <Route path='/userCard' component={userCard} /> */}

        </Switch>
    </Router>
};