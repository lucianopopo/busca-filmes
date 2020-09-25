//#region Imports

import { makeStyles } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
  const drawerWidth = '240px';

  const styles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#848fa5',
      width: 'calc(100% - 50px)',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: 500,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth})`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: 500,
      }),
    },
  }));

  return styles();
};

export default useStyles;
