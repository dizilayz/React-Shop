import React from "react";
import useStore from "../hooks/useStore";
// import MinMax from "../MinMax/index";
import MinMax from "../components/MinMax";
import CartRow from "../components/cartrow";

import { Link } from "react-router-dom";

import { observer } from 'mobx-react-lite'
// import StoreContext from "./contexts/store"

export default observer(Cart);

function Cart() {
    let [root] = useStore('root');
    let { itemsDetailed: products, total, remove, change} = root.cartStore

    return <div>
        <h1>Cart</h1>
        <hr />
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Cnt</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                </tr>
                {products.map((pr, i) => (

                    <CartRow
                    key={pr.id}
                    product={pr}
                    num={i + 1}
                    onChange={change}
                    onRemove={remove}
                    />
                    // <tr key={pr.id} >
                    //     <td>{i + 1}</td>
                    //     <td>{pr.title}</td>
                    //     <td>{pr.price}</td>
                    //     <td>
                    //         <MinMax
                    //             max={pr.rest}
                    //             current={pr.cnt}
                    //             onChange={(cnt) => change(pr.id, cnt)}
                    //         />
                    //     </td>
                    //     <td>{pr.price * pr.cnt}</td>
                    //     <td>
                    //         <button type="button" onClick={() => remove(pr.id)}>X</button>
                    //         <button type="button" onClick={() => change(pr.id, pr.rest)} >MAX</button>
                    //     </td>
                    // </tr>
                ))}
            </tbody>
        </table>
        <hr />
        <strong>Total: {total}</strong>
        <hr />
        <Link className="btn btn-primary" to={'/order'}>Send</Link>
    </div>
}