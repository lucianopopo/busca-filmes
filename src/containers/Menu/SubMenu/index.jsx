//#region Imports

import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from '../SideBar/styles';
import { Link } from 'react-router-dom';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

//#endregion

const SubMenu = ({ control, item, index }) => {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const menuItemBoxClass = clsx(styles.itemBox, {
        [styles.itemBoxOpen]: control,
        [styles.itemBoxClose]: !control
    });

    const menuItemIconClass = clsx(styles.icon, {
        [styles.iconOpen]: control,
        [styles.iconClose]: !control
    });

    const subMenuItemIconClass = clsx(styles.icon, {
        [styles.subIconOpen]: control,
        [styles.subIconClose]: !control
    });

    const menuItemTextClass = clsx(styles.text, {
        [styles.textOpen]: control,
        [styles.textClose]: !control
    });

    const arrowIconClass = clsx({
        [styles.arrowCollapse]: control,
        [styles.arrowUncollapse]: !control
    });

    return (
        <>
            <Box key={index} className={item.path === window.location.pathname ? styles.selected : styles.boxMenu}>
                <Divider className={styles.divider} />
                <Box className={menuItemBoxClass}>
                    <ListItem button className={styles.listItem}>
                        <ListItemIcon
                            className={menuItemIconClass}
                            classes={{
                                root: styles.rootIcon
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} className={menuItemTextClass} onClick={handleClick} />
                        <ListItemIcon className={arrowIconClass}>
                            {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                        </ListItemIcon>
                    </ListItem>
                </Box>
            </Box>

            {item.subMenu &&
                item.subMenu.map((subItem, subIndex) => (
                    <Collapse key={subIndex} in={open} timeout='auto' unmountOnExit>
                        <Box
                            key={subIndex}
                            className={subItem.path === window.location.pathname ? styles.selected : styles.boxSubMenu}
                        >
                            <Divider className={styles.divider} />
                            <Link to={subItem.path}>
                                <Box className={menuItemBoxClass}>
                                    <ListItem button className={styles.listItem}>
                                        <ListItemIcon
                                            className={subMenuItemIconClass}
                                            classes={{
                                                root: styles.rootIcon
                                            }}
                                        >
                                            {subItem.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={subItem.title} className={menuItemTextClass} />
                                    </ListItem>
                                </Box>
                            </Link>
                        </Box>
                    </Collapse>
                ))}
        </>
    );
};

export default SubMenu;
