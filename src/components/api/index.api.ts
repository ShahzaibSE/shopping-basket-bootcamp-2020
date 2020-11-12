import axios from "axios";

export const getProducts = function (category: string) {
    let products = axios.get("/basket/items").then(result => {
        console.log("Result")
        return result
    }).catch(err => {
        throw new Error(err)
    })
}