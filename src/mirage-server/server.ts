import {createServer} from "miragejs";
// Controllers.
import {getAllItems} from "./countrollers/Items.controller";

const mock_shopping_basket_server = function(){
    createServer({
        routes(){
            this.namespace = "basket"
            this.get("/items",getAllItems)
        }
    })
}

export default mock_shopping_basket_server;