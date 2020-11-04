import {createServer} from "miragejs";
// Controllers.
import {getAllItems} from "./countrollers/Items.controller";
// Dummy Data.
import {items} from "./shopping_basket_db";

const mock_shopping_basket_server = function(){
    createServer({
        routes(){
            this.namespace = "basket"
            this.get("/items",getAllItems)
        }
    }).db.loadData(items)
}

export default mock_shopping_basket_server;