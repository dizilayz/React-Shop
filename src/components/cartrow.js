import React from "react";
import MinMax from "./MinMax";

function cartRow({num, product, onChange, onRemove}) {
    let remove = () => onRemove(product.id);
    let change = (cnt) => onChange(product.id, cnt);
    let setMaX = () => onChange(product.id, product.rest)

    return <tr  >
        <td>{num}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
            <MinMax
                max={product.rest}
                current={product.cnt}
                onChange={change}
            />
        </td>
        <td>{product.price * product.cnt}</td>
        <td>
            <button type="button" onClick={remove}>X</button>
            <button type="button" onClick={setMaX} >MAX</button>
        </td>
    </tr>


}

export default React.memo(cartRow);