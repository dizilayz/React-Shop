// import './tests/store-cart'

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import StoreContext from "./contexts/store"
import rootStore from "./store/rootStore";
import productsStore from "./store/products";
import orderStore from "./store/order";

import { BrowserRouter } from "react-router-dom";

let store = {
    root: rootStore
}

store.root.cartStore.load();
store.root.products.load().then(() => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>
        ,
        document.querySelector('.app')
    )

});




import 'bootstrap/dist/css/bootstrap.min.css';



// import React, { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import Result from "./Result";
// import StoreContext from "./contexts/store"

// import cartStore from "./store/cart"
// let orderData = {
//     name: "Test"
// }
// let store = {
//     cart: {
//         total: 1000
//     }
// }

// ReactDOM.render(
//     <StoreContext.Provider value={store}>
//         <Result orderData={orderData} />
//     </StoreContext.Provider>
//     ,
//     document.querySelector('.app')
// )