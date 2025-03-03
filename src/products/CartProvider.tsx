import React, { ReactNode, useContext, useState } from 'react';
import { CartItem, Product } from './Types.ts';
import CartContext, { CartContextType } from './CartContext.tsx';

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product): void => {
 
        let addProduct = cartItems.find(cartItem => (
            cartItem.product.name === product.name
        ));
    
        if (addProduct === undefined) {
            setCartItems(prevCart => [...prevCart, { product, quantity: 1 }]);
        } else {
            setCartItems(prevCart => 
                prevCart.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
                )
            )
        }
        
        product.stock = product.stock-1;
    };

    const removeFromCart = (product: Product): void => {
        let productQuantity = cartItems.find(cartItem => (
            cartItem.product.name === product.name
        ))?.quantity;
    
        if (productQuantity !== undefined) {
            if (productQuantity > 1) {
                setCartItems(prevCart => 
                    prevCart.map(item =>
                    item.product.id === product.id
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                    )
                )
            } else {
                setCartItems(prevCart => prevCart.filter(currProduct => currProduct.product.name !== product.name))
            }

            product.stock = product.stock+1;
        }
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

