import axios from "axios";

export const getProducts = function () {
    let products = axios.get("/basket/items")
    return products
}