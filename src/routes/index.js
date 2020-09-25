//#region Imports

import ROUTES_NAME from '../utils/constants/routes-name';

//#endregion

const ROUTES = [
  {
    path: '/',
    exact: true,
    component: require('../pages/Home').default,
  },
  {
    path: ROUTES_NAME.HOME,
    exact: true,
    component: require('../pages/Home').default,
  },
  {
    path: ROUTES_NAME.FILMES,
    exact: true,
    component: require('../pages/Filmes').default,
  },
  {
    path: ROUTES_NAME.SERIES,
    exact: true,
    component: require('../pages/Series').default,
  },
  {
    path: ROUTES_NAME.PESSOAS,
    exact: true,
    component: require('../pages/Pessoas').default,
  },
  //ERROR
  {
    path: '*',
    exact: true,
    component: require('../pages/Error').default,
  },
];

export default ROUTES;
