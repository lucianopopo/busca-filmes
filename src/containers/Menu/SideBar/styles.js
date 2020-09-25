//#region Imports

import { makeStyles, fade } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
  const drawerWidth = 240;

  const styles = makeStyles((theme) => ({
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      flexShrink: 0,
      overflow: 'hidden',
      width: drawerWidth,
      whiteSpace: 'nowrap',
    },
    drawnerCommons: {
      backgroundColor: '#4c4c47',
      overflow: 'hidden',
      border: 'none',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: 500,
      }),
    },
    drawerClose: {
      width: theme.spacing(7) + 1,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: 500,
      }),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 30,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4c4c47',
      borderRight: `1px solid ${fade('#848fa5', 0.4)}`,
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    text: {
      color: '#FFFFFF',
      transition: 'opacity 0.5s ease-in-out',
    },
    textOpen: {
      opacity: '1',
    },
    textClose: {
      opacity: '0',
    },
    rootIcon: {
      minWidth: 30,
    },
    icon: {
      color: '#FFFFFF',
      transition: 'transform 0.3s ease-in-out',
    },
    listContainer: {
      overflowY: 'auto',
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        width: 7,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.2)',
        borderRadius: 10,
      },
      '&::-webkit-scrollbar-thumb': {
        '&:hover': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,1)',
        },
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.5)',
        borderRadius: 10,
      },
      '-ms-overflow-style': 'none' /* IE and Edge */,
      scrollbarWidth: 'thin' /* Firefox */,
    },
    list: {
      border: 'none',
      paddingBottom: 50,
    },
    iconOpen: {
      width: 0,
      transform: 'scale(1, 1)',
    },
    iconClose: {
      transform: 'scale(1.2, 1.2)',
    },
    subIconOpen: {
      paddingLeft: 15,
      width: 0,
      transform: 'scale(1, 1)',
    },
    subIconClose: {
      transform: 'scale(1.2, 1.2)',
    },
    divider: {
      backgroundColor: 'rgba(255,255,255,.08)',
    },
    header: {
      height: 80,
      fontSize: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 10,
      '& img + span': {
        paddingTop: 10,
      },
    },
    controlIcon: {
      color: ' #c14953',
      transition: 'transform 0.3s ease-in-out',
    },
    controlIconRotateClose: {
      transform: 'rotate(0deg)',
    },
    controlIconRotateOpen: {
      transform: 'rotate(180deg)',
    },
    controlIconBox: {
      top: 25,
      width: 25,
      height: 35,
      display: 'flex',
      borderRadius: 5,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      left: 'calc(100% - 20px)',
      backgroundColor: '#848fa5',
    },
    boxMenu: {
      '&:hover': {
        backgroundColor: fade('#c14953', 0.4),
      },
      '& a': {
        textDecoration: 'none',
      },
    },
    boxSubMenu: {
      '&:hover': {
        backgroundColor: fade('#c14953', 0.4),
      },
      '& a': {
        textDecoration: 'none',
      },
      backgroundColor: '#3162aa',
    },
    itemBox: {
      transition: 'transform 0.3s ease-in-out',
    },
    itemBoxOpen: {
      '& > div > div': {
        // paddingLeft: 16
        transform: 'translate(0px, 0px)',
      },
    },
    itemBoxClose: {
      '& > div > div': {
        //paddingLeft: 36
        transform: 'translate(20px, 0px)',
      },
    },
    logo: {
      transition: 'width  0.5s',
      border: 'none',
      height: 40,
    },
    largeLogo: {
      width: 180,
    },
    shortLogo: {
      width: 40,
      maxWidth: 40,
    },
    listItem: {
      '& .MuiTouchRipple-root .MuiTouchRipple-child': {
        backgroundColor: '#4c4c47',
      },
    },
    arrowCollapse: {
      position: 'absolute',
      left: 'calc(100% - 30px)',
      '& svg': {
        color: '#FFFFFF',
      },
    },
    arrowUncollapse: {
      position: 'absolute',
      left: 'calc(100% - 55px)',
      '& svg': {
        color: '#FFFFFF',
      },
    },
    selected: {
      backgroundColor: '#c14953',
      '& a': {
        textDecoration: 'none',
      },
    },
  }));

  return styles();
};

export default useStyles;
