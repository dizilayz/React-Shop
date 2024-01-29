import React from "react";

import useStore from "../hooks/useStore";
import ProductCard from "../components/products/cardalt"
import { observer } from 'mobx-react-lite'

export default observer(Home);

function Home() {
    let [root] = useStore('root');
    let { productsArr } = root.products;

    return <div>
        <h1>Catalog</h1>
        <hr />
        <div className="row" >
            {productsArr.map((pr, i) => (
                <div className="col col-4 mb-3" key={pr.id} >
                    {/* <ProductCard
                    product={pr}
                    inCart={inCart(pr.id)}
                    pending={inProcess(pr.id)}
                    onAdd={add}
                    onRemove={remove}
                    /> */}
                    <ProductCard id={pr.id} />
                </div>
            ))}
        </div>

    </div>
}