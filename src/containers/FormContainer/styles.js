//#region Imports

import { makeStyles } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
  const styles = makeStyles(() => ({
    paperContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      borderRadius: 5,
      padding: 20,
      minWidth: 1200,
    },
  }));
  return styles();
};

export default useStyles;
