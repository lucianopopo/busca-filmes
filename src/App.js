//#region Imports

import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';
import Footer from './components/Footer/index';
import Menu from './containers/Menu/index';

//#endregion

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Menu>
            <AppRoutes />
          </Menu>

          <Footer />
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
