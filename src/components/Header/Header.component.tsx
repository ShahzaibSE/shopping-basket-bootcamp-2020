import React, {useState, useEffect, FC} from 'react';
import clsx from "clsx";
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {ShoppingCartRounded} from "@material-ui/icons";
import Badge from '@material-ui/core/Badge';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ShoppingBasket} from "@material-ui/icons";
// Assets.
import { headerStyles, swipeableDrawerStyles, listStyles } from "./Header.styles";
import ShoppingBasketLogo from "../../static/shopping-basket-logo.png";
// Components.
import ProductListComponent from "./../ProductList/ProductList.component";
// API.
import {getProducts} from "./../api/index.api";
// Selector.
import {productListSelector, fetchProducts} from "../slices/product.slice";
import { useSelector } from 'react-redux';

type Anchor = 'top' | 'left' | 'bottom' | 'right';


const Header: FC<any> = () => {
    const classes = headerStyles();
    const swipeableDrawerClasses = swipeableDrawerStyles();
    const listClasses = listStyles()
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [categoryState, setCategoryState] = useState('male')

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const load_category = ()=>{
      if(categoryState === "female") {
        return(
          <ProductListComponent category={categoryState} />
        )
      }else if(categoryState === "kids") {
        return(
          <ProductListComponent category={categoryState} />
        )
      }else {
        return(
          <ProductListComponent category={categoryState} />
        )
      }
    }

    const list = (anchor: Anchor) => (
        <div
          className={listClasses.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem>
              <img className={swipeableDrawerClasses.drawer_logo_container} 
                    src={ShoppingBasketLogo} alt="Shopping Basket Logo" />
            </ListItem>
          </List>
          <List>
              <ListItem button onClick={()=>{setCategoryState('male')}}>
                <ListItemIcon className={swipeableDrawerClasses.list_item}><ShoppingBasket/></ListItemIcon>
                <ListItemText primary="Male Fashion" className={swipeableDrawerClasses.list_item} />
              </ListItem>
          </List>
          <Divider/>
          <List>
              <ListItem button onClick={()=>{setCategoryState('female')}}>
                <ListItemIcon className={swipeableDrawerClasses.list_item}><ShoppingBasket/></ListItemIcon>
                <ListItemText primary="Female Fashion" className={swipeableDrawerClasses.list_item}/>
              </ListItem>
          </List>
          <Divider/>
          <List>
              <ListItem button onClick={()=>{setCategoryState('kids')}}>
                <ListItemIcon className={swipeableDrawerClasses.list_item}><ShoppingBasket/></ListItemIcon>
                <ListItemText primary="Kids Fashion" className={swipeableDrawerClasses.list_item}/>
              </ListItem>
          </List>
        </div>
      );

    return (
      <Grid container>
         <Grid item sm={12} md={12} lg={12}>
          <div>
              <div className={classes.root}>
                  <AppBar position="static">
                      <Toolbar>
                          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                          onClick={toggleDrawer('left',true)}>
                              <MenuIcon />
                          </IconButton>
                          <Typography variant="h6" className={classes.title}>
                              <strong style={{fontWeight:"bolder"}}>ｃｏｓｍｏｓ Ｓｔｏｒｅ</strong>
                          </Typography>
                          <IconButton>
                              <Badge color="secondary" overlap="circle" badgeContent="2">
                                  <ShoppingCartRounded style={{color:"white", fontSize:30}}/>
                              </Badge>
                          </IconButton>
                      </Toolbar>
                  </AppBar>
              </div>
              <div>
                  {/* {(['left'] as Anchor[]).map((anchor) => (
                      <React.Fragment key={anchor}> */}
                      <SwipeableDrawer classes={{paper: swipeableDrawerClasses.drawer_paper}}
                          anchor={'left'}
                          open={state['left']}
                          onClose={toggleDrawer('left', false)}
                          onOpen={toggleDrawer('left', true)}>
                          {list('left')}
                      </SwipeableDrawer>
                      {/* </React.Fragment> */}
              </div>
          </div>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            {load_category()}
          </Grid>
        </Grid>
    )
}

export default Header;
