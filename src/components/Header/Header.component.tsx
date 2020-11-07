import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Assets.
import { headerStyles } from "./Header.styles";


const Header = () => {
    const classes = headerStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <strong style={{fontWeight:"bolder"}}>ｃｏｓｍｏｓ Ｓｔｏｒｅ</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
