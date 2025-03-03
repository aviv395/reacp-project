import React, { JSX } from "react";
import { Product } from "./Types.ts";
import { useCart } from "./CartProvider.tsx";

interface ShowProductProps {
    product: Product
}

const ShowProductInCart = ({ product }: ShowProductProps): JSX.Element => {
    const { cartItems, removeFromCart } = useCart();

    let productQuantity = cartItems.find(cartItem => (
        cartItem.product.name === product.name
    ))?.quantity

    return (
        <div className="card text-center mx-auto mt-3" style={{ width: '30%', height: '20%' }}>
            <img 
                src={product.imageUrl} 
                className="card-img-top d-block mx-auto" 
                alt={product.name} 
                style={{ width: '20%', height: '20%', objectFit: 'contain' }}
            />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="text-muted card-text">{product.description}</h6>
                <h6 className="text-info card-text">{product.price}$</h6>
                <h6 className="text-muted card-text">Quantity: {productQuantity}</h6>
                <button 
                    type="button" 
                    className="btn btn-outline-danger" 
                    onClick={() => removeFromCart(product)}>
                        Remove
                </button>
            </div>
        </div>
    );
};

export const ShowProductsInCart = (): JSX.Element  => {
    const { cartItems } = useCart();

    let totalPrice = cartItems.reduce((total, cartItem) => 
        total + (cartItem.product.price * cartItem.quantity), 0
    )

    return (
        <div>
            {cartItems.length === 0 ? (
            <p className="text-center">The cart is empyt</p>
        ) : (
            cartItems.map(cartItem => (
                <ShowProductInCart key={cartItem.product.id} product={cartItem.product} />
            ))
        )}
        <h5 className="text-center mt-3">Total price: {totalPrice}$</h5>
        </div>
    )
}


