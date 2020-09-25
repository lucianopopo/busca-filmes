//#region Imports

import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import IMAGE from '../../../utils/constants/image';
import MENU_ITENS from '../../../utils/constants/menu';

import useStyles from './styles';
import { Link } from 'react-router-dom';
import SubMenu from './../SubMenu/index';

//#endregion

const SideBar = ({ control, handleDrawer }) => {
  const styles = useStyles();

  const drawnerClass = clsx(styles.drawer, {
    [styles.drawerOpen]: control,
    [styles.drawerClose]: !control,
  });

  const paperDrawnerClass = clsx(styles.drawnerCommons, {
    [styles.drawerOpen]: control,
    [styles.drawerClose]: !control,
  });

  const logoClass = clsx(styles.logo, {
    [styles.shortLogo]: control,
    [styles.shortLogo]: !control,
  });

  const chevronRightClass = clsx(styles.controlIcon, {
    [styles.controlIconRotateOpen]: control,
    [styles.controlIconRotateClose]: !control,
  });

  const menuItemBoxClass = clsx(styles.itemBox, {
    [styles.itemBoxOpen]: control,
    [styles.itemBoxClose]: !control,
  });

  const menuItemIconClass = clsx(styles.icon, {
    [styles.iconOpen]: control,
    [styles.iconClose]: !control,
  });

  const menuItemTextClass = clsx(styles.text, {
    [styles.textOpen]: control,
    [styles.textClose]: !control,
  });

  return (
    <Drawer
      variant="permanent"
      className={drawnerClass}
      classes={{
        paper: paperDrawnerClass,
      }}
    >
      <Box className={styles.toolbar}>
        <img className={logoClass} src={IMAGE.SHORT_LOGO} alt={'LOGO'} />
      </Box>
      <Divider className={styles.divider} />
      <Box className={styles.listContainer}>
        <List className={styles.list}>
          <Box className={styles.header}>
            <Box className={styles.controlIconBox}>
              <IconButton onClick={handleDrawer}>
                <ChevronRightIcon className={chevronRightClass} />
              </IconButton>
            </Box>
            <img
              className={logoClass}
              src={IMAGE.MENU_LOGO}
              alt="logo-menu.svg"
            />
            <span primary="Busca Vídeos" className={menuItemTextClass}>
              Busca Vídeos
            </span>
          </Box>
          {MENU_ITENS.map((item, index) =>
            item.subMenu ? (
              <SubMenu
                key={index}
                control={control}
                item={item}
                index={index}
              />
            ) : (
              <Box
                key={index}
                className={
                  item.path === window.location.pathname
                    ? styles.selected
                    : styles.boxMenu
                }
              >
                <Divider className={styles.divider} />
                <Link to={item.path}>
                  <Box className={menuItemBoxClass}>
                    <ListItem button className={styles.listItem}>
                      <ListItemIcon
                        className={menuItemIconClass}
                        classes={{
                          root: styles.rootIcon,
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        className={menuItemTextClass}
                      />
                    </ListItem>
                  </Box>
                </Link>
              </Box>
            )
          )}
          <Divider className={styles.divider} />
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
