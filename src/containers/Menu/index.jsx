//#region Imports

import Box from '@material-ui/core/Box';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

//#endregion

export const Menu = ({ children }) => {
  const marginX = 36;
  const width = `calc(100% - ${242 * marginX}px)`;

  return (
    <Box display="flex">
      <Header />
      <SideBar />
      <main style={{ margin: `64px ${marginX}px`, height: '100%', width }}>
        {children}
      </main>
    </Box>
  );
};

export default withRouter(Menu);
