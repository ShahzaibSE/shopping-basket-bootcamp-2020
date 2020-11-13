import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
// Components.
import Header from "../Header/Header.component";
// Assets.
import "./GridComponent.css";
// API
import {getProducts} from "../api/index.api";
// Reducer
import {get_products} from "../slices/product.slice";
// Selector.
import {productListSelector, fetchProducts} from "../slices/product.slice";

const GridComponent = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(productListSelector)
    useEffect(()=>{
        // let items = fetch("/basket/items").then(result => result)
        //     .then(data => data.json())
        // .catch( err => {
        //     throw(new Error(err))
        // }).finally(()=>{
        //     console.log("Successfully fetched sample data")
        // })
        // items.then(data => {
        //     console.log("GridComponent - Items")
        //     console.log(data)
        //     // dispatch(getProducts(data))
        // })
        getProducts().then(result => {
            const {data} = result
            console.log("Products - <GridComponent/>")
            console.log(data)
        })
        dispatch(fetchProducts)
        console.log("Products - GridComponent")
        console.log(products)
    },[dispatch])

    return (
        <div className="grid_container">
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <Header/>
                </Grid>
                <Grid item sm={12} md={12} lg={12}>
                    {products.map((product:any) => (
                        <div>
                            <h1>{product.title}</h1>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}

export default GridComponent
