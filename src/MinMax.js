import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';



function MinMax({ min = 0, max, current, onChange}) {

    function applyCurrent(num,) {
        let val = Math.max(min, Math.min(max, num));
        onChange(val);
    }

    const inc = () => applyCurrent(current + 1);

    const dec = () => applyCurrent(current - 1);

    function changeInp(e) {
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    return (
        <div>
            <button type="button" onClick={dec} >- 1</button>
            <input onChange={changeInp} value={current} />
            <button type="button" onClick={inc}>+ 1</button>
        </div>
    )
}

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MinMax;