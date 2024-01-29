import React, { useState, useEffect } from "react";
import Cart from "./views/Cart";
import Home from "./views/Home";
import Order from "./views/Order";
import Result from "./views/Result";
import E404 from "./views/E404";
import Product from "./views/Product";

import { Routes, Route, useRoutes } from "react-router-dom";

export default function () {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<E404 />} />
    </Routes>
}


// export default function() {
//     return useRoutes([
//         {path: '/', element: <Home/>},
//         {path: '/product/:id', element:<Product />},
//     ])
// }