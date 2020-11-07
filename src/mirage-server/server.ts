import { ProductItem } from './../models/item.model.d';
import { request } from "http";
import {createServer, Model} from "miragejs";
// Dummy Data.
import {items} from "./shopping_basket_db";
// Custom Model.

const make_mock_server = function(){
    createServer({
        models:{
            item:Model,
            cart:Model
        },
        seeds(server:any){
           for(let i=0;i<items.length;i++){
            server.create("item",items[i])
           } 
        },
        routes() {
            this.get("/basket/items", (schema:any) => {
              return schema.db.items
            })
            // Routes for cart.
            this.get("/basket/cart", (schema:any)=>{
                return schema.db.carts
            })
            this.post("/basket/cart", (schema:any, request:any) => {
                let number_of_items_in_cart = schema.db.carts.length
                let newID = number_of_items_in_cart
                let cart_item = JSON.parse(request.RequestBody)
                cart_item.id = newID++
                return schema.db.carts.create(cart_item)
            })
        },
    })
}

export default make_mock_server