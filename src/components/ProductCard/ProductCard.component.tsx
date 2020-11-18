import React, {FC} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets.
import {productCardStyles} from "./ProductCard.styles";
// Models.
import {ProductItem} from "../../models/item.model";

type Product = {
    product: ProductItem
}

const ProductCardComponent:FC<Product> = ({product}: any) => {
    const classes = productCardStyles()
    console.log("<ProductCardComponent/> - Product")
    console.log(product)
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={product.imageUrl != null ? product.imageUrl : ""}
                    title={product.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2" style={{fontWeight:"bold"}}>
                            {product.title != null ? product.title : "" }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            ${product.price != null ? product.price : "" }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description != null ? product.description : "" }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button size="small" color="primary">
                     Add to Cart
                    </Button> */}
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCardComponent
