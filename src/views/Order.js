import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap'
import orderStore from "../store/order"
import useStore from "../hooks/useStore";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { observer } from "mobx-react-lite";

export default observer(Order)

function Order() {
    // let {fields, update} = orderStore
    let [root] = useStore('root');
    let { fields, update} = root.order
    let { clean} = root.cartStore;





    const navigate = useNavigate();

    // let isValid = fields.every(f => f.valid);
    let [showModal, setShowModal] = useState(false);
    let [confirmed, setConfirmed] = useState(false);
    let openModal = () => setShowModal(true);
    let closeModal = () => setShowModal(false);
    let sendForm = () => {
        setConfirmed(true);
        closeModal();
    }

    let onExited = () => {
        if (confirmed) {
            // clean()
            navigate('/result');
        }
    }

    return <div>
        <h1>Input data</h1>
        <hr />
        <form>
            {fields.map(field => (
                <div className="form-group" key={field.name} >
                    <label>{field.label}</label>
                    <input
                        type="text"
                        className={`form-control ${field.value.length && !field.valid ? 'border border-danger' : ''}`}
                        value={field.value}
                        name={field.name}
                        onChange={(e) => update(field.name, e.target.value.trim())}
                    />
                </div>
            ))}
        </form>
        <hr />
        <Link className="btn btn-warning" to={'/'}>Back To Cart</Link>
        <button type="button" className="btn btn-primary" onClick={openModal} disabled={!root.order.valid}>Send</button>
        <Modal show={showModal} onHide={closeModal} onExited={onExited} >
            <Modal.Header closeButton>
                <Modal.Title>Check data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal} >Close</Button>
                <Button variant="primary" onClick={sendForm} >Send order</Button>
            </Modal.Footer>
        </Modal>
    </div >
}

















// import React, { useState } from "react";
// import { Modal, Button } from 'react-bootstrap'
// export default function ({ onPrev, onNext, fields, onChange }) {
//     let isValid = fields.every(f => f.valid);
//     let [showModal, setShowModal] = useState(false);
//     let openModal = () => setShowModal(true);
//     let closeModal = () => setShowModal(false);
//     let sendForm = () => {
//         onNext();
//     }
//     return <div>
//         <h1>Input data</h1>
//         <hr />
//         <form>
//             {fields.map(field => (
//                 <div className="form-group" key={field.name} >
//                     <label>{field.label}</label>
//                     <input
//                         type="text"
//                         className={`form-control ${field.value.length && !field.valid ? 'border border-danger' : ''}`}
//                         value={field.value}
//                         name={field.name}
//                         onChange={(e) => onChange(field.name, e.target.value.trim())}
//                     />
//                 </div>
//             ))}
//         </form>
//         <hr />
//         <button type="button" className="btn btn-warning" onClick={onPrev}>Back To Cart</button>
//         <button type="button" className="btn btn-primary" onClick={openModal} disabled={!isValid}>Send</button>
//         <Modal show={showModal} onHide={closeModal}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Check data</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//                 <p>Modal body text goes here.</p>
//             </Modal.Body>

//             <Modal.Footer>
//                 <Button variant="secondary" onClick={closeModal} >Close</Button>
//                 <Button variant="primary" onClick={sendForm} >Send order</Button>
//             </Modal.Footer>
//         </Modal>
//     </div >
// }