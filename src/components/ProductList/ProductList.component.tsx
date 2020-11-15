import React, {useEffect, useState} from 'react';
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
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        dispatch(fetchProducts())
        console.log("<ProductListComponent> - Products")
        console.log(products)
    },[])

    return (
        <div>
            <Grid container justify="center" alignItems="center" alignContent="center">
                {products.length > 0 ? 
                    products.map((product:any)=>(
                        <Grid item sm={12} md={4} lg={4}>
                            <ProductCardComponent product={product} />
                        </Grid>
                    )) : ''}
            </Grid>
        </div>
    )
}

export default ProductListComponent;
