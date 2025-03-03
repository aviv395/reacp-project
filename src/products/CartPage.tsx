import { JSX } from "react";
import { ShowProductsInCart } from "./ShoppingCart.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CartPage = (): JSX.Element => {
    const navigate = useNavigate();

    const hendlerShopButton = (): void => {
        navigate("/home");
    }

    return (
        <div>
            <button 
                type="button" 
                onClick={hendlerShopButton}
                className="btn btn-primary btn-lg btn-block">
                    Back to shop
                </button>
            <ShowProductsInCart />
        </div>
    )
}