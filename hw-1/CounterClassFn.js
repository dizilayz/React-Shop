import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';



function Count({ min = 0, max }) {
    const [current, setCurrent] = useState(min);

    function validateInp(num) {
        let val = Math.max(min, Math.min(max,num));
        setCurrent(val);
    }

    const inc = () => validateInp(current + 1);

    const dec = () => validateInp(current - 1);

    function changeInp(e) {
        let num = parseInt(e.target.value);
        validateInp(isNaN(num) ? min : num);
    }

    useEffect(() => {
        console.log('done!');
    }, [min,max]);

    return (
        <div>
            <button type="button" onClick={inc}>+ 1</button>
            <input onChange={changeInp} value={current} />
            <button type="button" onClick={dec} >- 1</button>
        </div>
    )
}

Count.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired
}

export default Count;