import { createContext } from 'react';
import { CartItem, Product } from './Types.ts';

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | null>(null);
export default CartContext;
