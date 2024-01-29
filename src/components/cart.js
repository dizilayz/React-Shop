import React, { useContext } from "react";

import { observer } from 'mobx-react-lite'
import useStore from "../hooks/useStore";




export default observer(function () {
    let [root] = useStore('root');
    let { cartStore } = root;
    return <>
        <div> <strong>In cart: {cartStore.items.length}</strong></div>
        <div> <strong>Total: {cartStore.total}</strong></div>
    </>


})

