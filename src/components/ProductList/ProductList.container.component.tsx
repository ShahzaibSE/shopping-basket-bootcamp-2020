import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
// Material Imports.
import Grid from "@material-ui/core/Grid";
// Assets.
import "./ProductList.css";
// Component.
import ProductListComponent from "./ProductList.component";
// Selector from slice.
import {productListSelector, fetchProducts} from "../slices/product.slice";

const ProductListContainerComponent = () => {
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
            
        </div>
    )
}

export default ProductListContainerComponent