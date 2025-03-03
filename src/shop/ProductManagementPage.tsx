import React, { useState } from "react";
import { JSX } from "react";
import { useProducts } from "./ProductsZustand.tsx";

export const ProductManagementPage = (): JSX.Element => {
    const [showProductModal, setShowProductModal] = useState(false);
    const { addProduct, ShowProducts } = useProducts();
    const [id, setId] = useState<number | "">("");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number | "">("");
    const [category, setCategory] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [stock, setStock] = useState<number | "">("");

    return (
        <div>
            <div className="d-flex bd-highlight mb-5" style={{backgroundColor: '#ebc7eb'}}>
                <div className="p-2 w-100 bd-highlight ml-5" style={{ textAlign: 'center'}}>
                    <h1 style={{ fontSize: '6rem', fontWeight: 'bold' }}>YOUR SHOP</h1>
                </div>
            </div>

            <ShowProducts />

            <div className="d-flex justify-content-center">
                <button 
                    type="button"
                    onClick={() => setShowProductModal(true)} 
                    className="btn btn-outline-dark mb-5" 
                    style={{width: '200px', height:'50px'}}
                    >
                        + Add products
                </button>
            </div>

            {showProductModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                          <button type="button" className="close" onClick={() => setShowProductModal(false)}>
                                <span>&times;</span>
                          </button>
                          <h1>NEW PRODUCT</h1>
                        </div>

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Id"
                            value={id} 
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) { setId(value === "" ? "" : Number(value)); }
                            }}
                            required
                        />

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Name"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Description"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Price"
                            value={price} 
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) { setPrice(value === "" ? "" : Number(value)); }
                            }}
                            required
                        />

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Category"
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="imageUrl"
                            value={imageUrl} 
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />

                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Stock"
                            value={stock} 
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) { setStock(value === "" ? "" : Number(value)); }
                            }}
                            required
                        /> 

                        {(id !== "" && price !== "" && stock !== "" && name !== "" && description !== "" && category !== "" && imageUrl !== "") && (
                            <div className="d-flex justify-content-center">
                            <button 
                                type="button" 
                                className="btn btn-secondary mt-3 mb-3" 
                                style={{ width: '200px', height: '50px' }}
                                onClick={() => addProduct({id, name, description, price, category, imageUrl, stock})}
                                >
                                    ADD PRODUCT
                            </button>
                        </div>
                        ) }

                    </div>
                </div>
            </div>
            )}
        </div>
    )
}