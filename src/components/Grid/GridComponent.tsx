import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
// Components.
import Header from "../Header/Header.component";
// Assets.
import "./GridComponent.css"
// Reducer
import getProducts from "./../reducers/product.reducer";

const GridComponent = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        let items = fetch("/basket/items").then(result => result)
            .then(data => data.json())
        .catch( err => {
            throw(new Error(err))
        }).finally(()=>{
            console.log("Successfully fetched sample data")
        })
        items.then(data => {
            console.log("GridComponent - Items")
            console.log(data)
        })
        // Post a cart.

    },[])

    // console.log("GridComponent - default value")
    // console.log(dispatch(getProducts()))

    return (
        <div className="grid_container">
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <Header/>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridComponent
