import React from "react";
import E404 from "./E404"

import useStore from "../hooks/useStore";
import { Link, useParams } from "react-router-dom";

import { observer } from 'mobx-react-lite'
// import StoreContext from "./contexts/store"

export default observer(Product);

function Product() {
    let { id } = useParams();

    let [root] = useStore('root');

    let { cartStore } = root;
    let { remove, add } = cartStore;

    let { products } = root;
    let product = products.item(id);

    if (!/^[1-9]+\d*$/.test(id) || product === undefined) {
        return <E404 />
    }


    return <>
        <h1>{product.title}</h1>
        <hr />
        <div>
            <strong>Price: {product.price}</strong>
        </div>
        <hr />
        {cartStore.inCart(product.id) ?
            <button className="btn btn-warning" onClick={() => remove(product.id)}>Remove from cart</button>
            :
            <button className="btn btn-success" onClick={() => add(product.id)}>Add to cart</button>}
        <hr />
        <Link to="/">Back to catalog</Link>
    </>
}