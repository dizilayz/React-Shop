import React, { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

export default function({title, showed, onClose, children}) {
    console.log(children);
    let classes = ['alert', 'alert-success'];
    let ref = useRef();
    useClickOutside(ref, function() {
        if(showed) {
            onClose();
        }
    })

    if(!showed) {
        classes.push('d-none');
    }

    let content = !children ? null : <>
        {children}
        <hr/>
    </>

    return <div ref={ref} className={classes.join(' ')} >
        <h2>{title}</h2>
        <hr/>
        {content}
        <button className="btn btn-success" onClick={onClose} >OK</button>
    </div>
}










































// import React, { useRef } from "react";
// import useClickOutside from "./hooks/useClickOutside";

// export default function ({ showed, title, onClose }) {

//     let classes = ["alert", "alert-success"]

//     if (!showed) {
//         classes.push('d-none')
//     }

//     let ref = useRef();
//     useClickOutside(ref, function() {
//         if(showed) {
//             onClose();
//         }
//     });

//     return <div ref={ref} className={classes.join(' ')}>
//         <h2>{title}</h2>
//         <hr />
//         <button className="btn btn-success" onClick={onClose}>Ok</button>
//     </div>
// }