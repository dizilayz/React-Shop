import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import BModal from 'react-bootstrap/Modal'

import MinMax from "./MinMax";

export default function () {

    const [products, setProducts] = useState(productsStub());
    const [empty, setEmpty] = useState(false);
    const [showed, setShowed] = useState(false);
    const [showFaq, setShowFaq] = useState(false);

    let setCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id === id ? { ...pr, cnt: cnt } : pr));
    }

    let deleteItem = (id) => {
        setProducts(products.filter(pr => pr.id !== id));
    }

    let total = products.reduce((sum, pr) => sum += (pr.price * pr.cnt), 0);

    useEffect(() => {
        setEmpty(products.length < 1);
    }, [products]);

    // const total = useMemo(totalPrice, [products]);

    return (
        <div className="container mt-1" >
            <h1>Products list</h1>
            <hr />
            <strong onClick={() => setShowed(true)} >Total: {total}</strong>
            <hr />

            <Modal
                title={`${products.length} in cart. Please, pay for it.`}
                showed={showed}
                onClose={() => setShowed(false)}
            >
                {empty ? "Empty" : <table>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Cnt</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                        {products.map((pr, i) => (

                            <tr key={pr.id} >
                                <td>{i + 1}</td>
                                <td>{pr.title}</td>
                                <td>{pr.price}</td>
                                <td>
                                    <MinMax
                                        max={pr.rest}
                                        current={pr.cnt}
                                        onChange={(cnt) => setCnt(pr.id, cnt)}
                                    />
                                </td>
                                <td>{pr.price * pr.cnt}</td>
                                <td>
                                    <button type="button" onClick={() => deleteItem(pr.id)} >X</button>
                                    <button type="button" onClick={() => setCnt(pr.id, pr.rest)} >MAX</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </Modal>
            <hr />
            <footer>
                <strong onClick={() => setShowFaq(true)} >FAQ</strong>
            </footer>
            <BModal show={showFaq} onHide={() => setShowFaq(false)}>
                <BModal.Header>Attention!!!</BModal.Header>
                <BModal.Body><p>Hello</p></BModal.Body>
            </BModal>
        </div>
    )
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