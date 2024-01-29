import  Order  from "./order";
import Cart from "./cart";
import Products from "./products";

import * as cart from "../api/cart";
import * as products from "../api/products";

class RootStore {
    constructor() {
        this.storage = window.localStorage

        this.api = {cart, products};

        this.products = new Products(this);
        this.order = new Order(this);
        this.cartStore = new Cart(this);
    }
}

export default new RootStore();