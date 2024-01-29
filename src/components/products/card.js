import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

Card.propTypes = {
    product: PropTypes.object.isRequired,
    inCart: PropTypes.bool.isRequired,
    pending: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export function Card({ product, onRemove, inCart, onAdd, pending }) {
    let remove = () => onRemove(product.id);
    let add = () => onAdd(product.id);


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
                        disabled={pending}
                    >Remove from cart
                    </button>
                    :
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={add}
                        disabled={pending}
                    >Add to cart
                    </button>}
            </div>
        </div>)
}

export default Card;