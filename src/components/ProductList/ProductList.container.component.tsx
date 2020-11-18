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

const ProductListContainerComponent = () => {
    return (
        <div>
            
        </div>
    )
}

export default ProductListContainerComponent