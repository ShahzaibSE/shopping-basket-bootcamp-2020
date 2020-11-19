import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
// Components.
import Header from "../Header/Header.component";
import ProductListComponent from "../ProductList/ProductList.component";
// Assets.
import "./GridComponent.css";

const GridComponent = () => {

    return (
        <div className="grid_container">
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <Header/>
                </Grid>
                {/* <Grid item sm={12} md={12} lg={12}>
                    <ProductListComponent/>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default GridComponent
