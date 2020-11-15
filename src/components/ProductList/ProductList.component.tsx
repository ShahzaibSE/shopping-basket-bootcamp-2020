import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// Material Imports.
import Grid from "@material-ui/core/Grid";
// Assets.
import "./ProductList.css";
// Component.
import ProductCardComponent from "../ProductCard/ProductCard.component";
// Selector from slice.
import {productListSelector, fetchProducts} from "../slices/product.slice";

const ProductListComponent = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(productListSelector)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    console.log("<ProductListComponent> - Products")
    console.log(products)

    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={12} lg={12}>
                    <h2>Product List</h2>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductListComponent;
