import React from "react";
import CartStat from "./components/cart"
import RouterView from "./routes"

import { Link, NavLink } from "react-router-dom";

const App = () => {
    return <>
        <header>
            <div className="container mt-1" >
                <div className="row justify-content-between">
                    <div className="col">
                        Logo
                    </div>
                    <div className="col">
                        <CartStat />
                    </div>
                </div>
                <hr />
            </div>
        </header>
        <div>
            <div className="container mt-1">
                <div className="row">
                    <aside className="col col-3">
                        <ul className="list-group">
                            {/* <li className="list-group-item" > <Link to="/" >Home</Link></li>
                            <li className="list-group-item" > <Link to="/cart" >Cart</Link></li>
                            <li className="list-group-item" > <Link to="/order">Order</Link></li> */}
                            <li className="list-group-item" > <NavLink to="/" >Home</NavLink></li>
                            <li className="list-group-item" > <NavLink to="/cart" >Cart</NavLink></li>
                            <li className="list-group-item" > <NavLink to="/order">Order</NavLink></li>
                        </ul>
                    </aside>
                    <main className="col col-9">
                        <RouterView />
                    </main>
                </div>
            </div>
        </div >
        <footer className="mt-1" >
            <hr />
            <div className="container">2022</div>
        </footer>
    </>

}

function productsStub() {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            cnt: 1
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            cnt: 1
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            cnt: 1
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            cnt: 1
        }
    ];
}

export default App









//норм версия

// import React, { useState, useEffect } from "react";
// import Cart from "./views/Cart";
// import Home from "./views/Home";
// import Order from "./views/Order";
// import Result from "./views/Result";
// import StoreContext from "./contexts/store"
// import useStore from "./hooks/useStore";
// import E404 from "./views/E404";
// import Product from "./views/Product";
// import { observer } from "mobx-react-lite";

// import { Routes, Route, Link } from "react-router-dom";

// export default function () {

//     let [root] = useStore('root');
//     let {cartStore} = root
//     console.log(cartStore.items)


//     return <>
//         <header>
//             <div className="container mt-1" >
//                 <div className="row justify-content-between">
//                     <div className="col">
//                         Logo
//                     </div>
//                     <div className="col">
//                         In cart:
//                         <br/>
//                         Total:  {cartStore.total}
//                     </div>
//                 </div>
//                 <hr />
//             </div>
//         </header>
//         <div>
//             <div className="container mt-1">
//                 <div className="row">
//                     <aside className="col col-3">
//                         <ul className="list-group">
//                             <li className="list-group-item" > <Link to="/" >Home</Link></li>
//                             <li className="list-group-item" > <Link to="/cart" >Cart</Link></li>
//                             <li className="list-group-item" > <Link to="/order">Order</Link></li>
//                         </ul>
//                     </aside>
//                     <main className="col col-9">
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route path="/product/:id" element={<Product />} />
//                             <Route path="/cart" element={<Cart />} />
//                             <Route path="/order" element={<Order />} />
//                             <Route path="/result" element={<Result />} />
//                             <Route path="*" element={<E404 />} />
//                         </Routes>
//                     </main>
//                 </div>
//             </div>
//         </div >
//         <footer className="mt-1" >
//             <hr/>
//             <div className="container">2022</div>
//         </footer>
//     </>

// }

// function productsStub() {
//     return [
//         {
//             id: 100,
//             title: 'Ipnone 200',
//             price: 12000,
//             rest: 10,
//             cnt: 1
//         },
//         {
//             id: 101,
//             title: 'Samsung AAZ8',
//             price: 22000,
//             rest: 5,
//             cnt: 1
//         },
//         {
//             id: 103,
//             title: 'Nokia 3310',
//             price: 5000,
//             rest: 2,
//             cnt: 1
//         },
//         {
//             id: 105,
//             title: 'Huawei ZZ',
//             price: 15000,
//             rest: 8,
//             cnt: 1
//         }
//     ];
// }