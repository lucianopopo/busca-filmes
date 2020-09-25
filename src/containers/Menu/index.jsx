//#region Imports

import Box from '@material-ui/core/Box';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

//#endregion

const CONTROL_KEY = 'control';
export const Menu = ({ children }) => {
    const [control, setControl] = useState(localStorage.getItem(CONTROL_KEY) === 'true');

    const handleDrawer = () => {
        localStorage.setItem(CONTROL_KEY, !control);
        setControl(!control);
    };

    const marginX = 36;
    const width = `calc(100% - ${(control ? 240 : 102) + 2 * marginX}px)`;

    return (
        <Box display='flex'>
            <Header control={control} />
            <SideBar control={control} handleDrawer={() => handleDrawer()} />
            <main style={{ margin: `64px ${marginX}px`, height: '100%', width }}>{children}</main>
        </Box>
    );
};

export default withRouter(Menu);
