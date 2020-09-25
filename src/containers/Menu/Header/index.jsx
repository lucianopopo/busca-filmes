//#region Imports

import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//#endregion

const Header = ({ control }) => {
    const styles = useStyles();

    const appBar = clsx(styles.appBar, {
        [styles.appBarShift]: control
    });

    return (
        <AppBar position='fixed' className={appBar}>
            <Toolbar />
        </AppBar>
    );
};

export default Header;
