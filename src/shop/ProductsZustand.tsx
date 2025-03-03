import { create } from "zustand"
import { Product } from "../products/Types"
import React, { JSX } from "react"
import { ShowProduct } from "../products/ProductsData.tsx"

type Products = {
    productsList: Product[]
    addProduct: (product: Product) => void
    ShowProducts: () => JSX.Element
    removeProduct: (product: Product) => void
}

export const useProducts = create<Products>() ((set) => ({
    productsList: [],
    addProduct: (product) => set((state) => ({
        productsList: [...state.productsList, product]
    })),
    ShowProducts: () => {return (
        <div className="container">
            <div className="row mt-3">
                {useProducts.getState().productsList.map((product, index) => (
                    <div className="col-12 col-sm-3 mb-3" key={index}>
                        <ShowProduct product={product} />
                    </div>
                ))}
            </div>
        </div>
    )},
    removeProduct: (product) => set((state) => ({
        productsList: state.productsList.filter(currProduct => currProduct.name !== product.name)
    }))
}))