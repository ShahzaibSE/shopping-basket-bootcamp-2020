import React, {useEffect, useState, FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
// Material Imports.
import Grid from "@material-ui/core/Grid";
import {AnimationWrapper} from "react-hover-animation"
// Assets.
import "./ProductList.css";
// Component.
import ProductCardComponent from "../ProductCard/ProductCard.component";
// Selector from slice.
import {productListSelector, fetchProducts} from "../slices/product.slice";

type ProductListType = {
    category: string
}

const ProductListComponent: FC<ProductListType> = ({category}:any) => {
    const dispatch = useDispatch()
    const {products} = useSelector(productListSelector)

    useEffect(()=>{
        dispatch(fetchProducts('male'))
    },[dispatch])

    let get_filtered_products = (category: string, arr: Array<any>) => {
        let productList = arr.filter((product)=>(product.category === category))
        return productList
    }

    let filtered_products = get_filtered_products(category, products)

    return (
        <div>
            <Grid container justify="center" alignItems="center" alignContent="center">
                {filtered_products.length > 0 ? 
                    filtered_products.map((product:any)=>(
                        <Grid item sm={12} md={4} lg={4}>
                            <AnimationWrapper config={{
                                                    transform:{initial:'scale(1)',onHover:'scale(1.1)'},
                                                    opacity: {initial:'1',onHover:'1'}
                                                }}>  
                                <ProductCardComponent key={product.id} product={product} />
                            </AnimationWrapper>
                        </Grid>
                    )) : ''}
            </Grid>
        </div>
    )
}

export default ProductListComponent;
