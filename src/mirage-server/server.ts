import { ProductItem } from './../models/item.model.d';
import { request } from "http";
import {createServer, Model} from "miragejs";
// Controllers.
import {getAllItems} from "./countrollers/Items.controller";
// Dummy Data.
import {items} from "./shopping_basket_db";
// Custom Model.

export default function(){
    createServer({
        models:{
            reminder: Model
        },
        seeds(server:any){
            server.create("reminder", { text: "Walk the dog" })
            server.create("reminder", { text: "Take out the trash" })
            server.create("reminder", { text: "Work out" })
        },
        routes() {
            this.get("/basket/items", (schema:any) => {
              console.log("Getting all reminders")
              console.log(schema.db.reminders)
              return schema.db.reminders
            })
        },
    })
}