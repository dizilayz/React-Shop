import React, { useState } from "react";
import ReactDOM from "react-dom";

import CounterClassFn from "./CounterClassFn";

export default function () {
    let [maxTest, setMaxTest] = useState(10);
    let setMaxTest5 = () => setMaxTest(5);

    return (
        <div>
            <h3>Fn 1,10 </h3>
            <CounterClassFn max={maxTest} min={1} />
            <hr />
            <button type="button" onClick={setMaxTest5} > set 5 </button>
        </div>
    )
}