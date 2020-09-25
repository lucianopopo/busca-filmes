//#region Imports

import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IMAGE from '../../../utils/constants/image';
import MENU_ITENS from '../../../utils/constants/menu';

import useStyles from './styles';
import { Link } from 'react-router-dom';
import SubMenu from './../SubMenu/index';

//#endregion

const SideBar = () => {
  const styles = useStyles();

  const drawnerClass = clsx(styles.drawer, {
    [styles.drawerOpen]: 'true',
  });

  const paperDrawnerClass = clsx(styles.drawnerCommons, {
    [styles.drawerOpen]: 'true',
  });

  const logoClass = clsx(styles.logo, {
    [styles.shortLogo]: 'true',
  });

  const menuItemBoxClass = clsx(styles.itemBox, {
    [styles.itemBoxOpen]: 'true',
  });

  const menuItemIconClass = clsx(styles.icon, {
    [styles.iconOpen]: 'true',
  });

  const menuItemTextClass = clsx(styles.text, {
    [styles.textOpen]: 'true',
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
            <span primary="Busca Vídeos" className={menuItemTextClass}>
              Busca Vídeos
            </span>
          </Box>
          {MENU_ITENS.map((item, index) =>
            item.subMenu ? (
              <SubMenu key={index} item={item} index={index} />
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
