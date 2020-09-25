//#region Imports

import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import React from 'react';
import ROUTES_NAME from './routes-name';

//#endregion

const MENU_ITENS = [
  {
    path: ROUTES_NAME.HOME,
    icon: <HomeIcon />,
    title: 'Página Inicial',
  },
  {
    path: ROUTES_NAME.FILMES,
    icon: <TheatersIcon />,
    title: 'Filmes',
  },
  {
    path: ROUTES_NAME.SERIES,
    icon: <LiveTvIcon />,
    title: 'Séries',
  },
  {
    path: ROUTES_NAME.PESSOAS,
    icon: <PeopleIcon />,
    title: 'Pessoas',
  },
];

export default MENU_ITENS;
