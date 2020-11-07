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
              console.log("Getting all Items")
              console.log(schema.db.items)
              return schema.db.items
            })
        },
    })
}

export default make_mock_server