import React from "react";
import style from "./style.module.css"
import useWindowSize from "../useWindowSize";

export default function () {
    let {width} = useWindowSize();

    let paddingSize =   Math.min(parseInt(width / 200), 5);
    let classNames = `card p-${paddingSize}`

    return <div className = {classNames} >
        <h2>Product Card</h2> 
        <input type="text" className={style.inp} />
    </div>
}