import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useStore from "../../hooks/useStore"
import { observer } from 'mobx-react-lite'

Card.propTypes = {
    id: PropTypes.number.isRequired
}

function Card({ id }) {
    let [root] = useStore('root');
    let { cartStore, products } = root
    let product = products.item(id);

    let inCart = cartStore.inCart(id);
    let inProcess = cartStore.inProcess(id);

    let add = () => cartStore.add(id);
    let remove = () => cartStore.remove(id);

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <div> {product.price} </div>

                <Link to={`/product/${product.id}`} > More info</Link>
                <br />
                {inCart ?
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={remove}
                        disabled={inProcess}
                    >Remove from cart
                    </button>
                    :
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={add}
                        disabled={inProcess}
                    >Add to cart
                    </button>}
            </div>
        </div>)
}

export default observer(Card);