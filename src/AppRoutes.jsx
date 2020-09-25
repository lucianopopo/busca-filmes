//#region Imports

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './routes';

//#endregion

const AppRoutes = () => (
    <Switch>
        {ROUTES.map((element) => (
            <Route key={element.path} path={element.path} exact={element.exact} component={element.component} />
        ))}
    </Switch>
);

export default AppRoutes;
