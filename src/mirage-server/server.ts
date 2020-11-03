import {createServer} from "miragejs";

export default function(){
    createServer({
        routes(){
            this.namespace = "basket"
            this.get("/items",()=>(
                [
                    {
                        id:1,
                        name: "Item 1"
                    },
                    {
                        id:2,
                        name: "Item 2"
                    }
                ]
            ))
        }
    })
}