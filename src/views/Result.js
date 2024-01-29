import React, { useContext } from "react";

import { observer } from 'mobx-react-lite'
import useStore from "../hooks/useStore";




export default observer(Result)
function Result({ }) {
    let [root] = useStore('root');
    let { name } = root.order
    let { total } = root.cartStore 

    return <div>
        <h1>{name}, your order is done</h1>
        <hr />
        <strong>Total: {total}</strong>
    </div>
}







// import React, { useContext } from "react";

// import { observer } from 'mobx-react-lite'
// import useStore from "./hooks/useStore";


// export default observer(Result)
// function Result({ orderData }) {
//     let [cart] = useStore('cart');
//     return <div>
//         <h1>{orderData.name}, your order is done</h1>
//         <hr />
//         <strong>Total: {cart.total}</strong>
//     </div>
// }