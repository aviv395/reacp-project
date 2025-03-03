import React, { JSX, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './Types.ts';

import laptopImage from "../img/laptop.png";
import tableImage from '../img/table.png';
import phoneImage from '../img/phone.png';
import drawerImage from '../img/drawer.png';
import outOfStockImage from '../img/outOfStock.png';
import addTpCartImage from '../img/addToCart.png';
import { useCart } from './CartProvider.tsx';

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop 256GB",
    price: 999.99,
    category: "Electronics",
    imageUrl: laptopImage,
    stock: 10
  },
  {
    id: 2,
    name: "Table",
    description: "small table",
    price: 100.0,
    category: "Furniture",
    imageUrl: tableImage,
    stock: 0
  },
  {
    id: 3,
    name: "Phone",
    description: "iphone 13",
    price: 575.5,
    category: "Electronics",
    imageUrl: phoneImage,
    stock: 90
  },
  {
    id: 4,
    name: "Drawers",
    description: "3 drawers",
    price: 80.99,
    category: "Furniture",
    imageUrl: drawerImage,
    stock: 1
  }
]

interface ShowProductProps {
  product: Product
}


export const ShowProduct = ({product}: ShowProductProps): JSX.Element => {
  const { addToCart } = useCart();
  const [showProductModal, setShowProductModal] = useState(false);
  
  
  return (
        <div key={product.id} className="col-12 col-sm-3 mb-3">
          <button className="btn btn-light" style={{ width: '255px', height: '287.6px' }} onClick={() => setShowProductModal(true)}>
            <div className="card text-center" style={{ width: '100%', height: '100%' }}>
              <img 
                  src={product.imageUrl} 
                  className="card-img-top d-block mx-auto" 
                  alt={product.name} 
                  style={{ width: '150px', height: '150px', objectFit: 'contain' }}
              />
              
              <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="text-muted card-text">{product.description}</h6>
                  <h6 className="text-info card-text">{product.price}$</h6>
              </div>
            </div>
          </button>

          {showProductModal && (
             <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                          <button type="button" className="close" onClick={() => setShowProductModal(false)}>
                                <span>&times;</span>
                          </button>

                          <div className="card text-center" style={{ width: '100%', height: '100%', border: 'none' }}>
                            <img 
                                src={product.imageUrl} 
                                className="card-img-top d-block mx-auto" 
                                alt={product.name} 
                                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                            />
                
                              <div className="card-body">
                                  <h5 className="card-title">{product.name}</h5>
                                  <h6 className="text-muted card-text">{product.description}</h6>
                                  <h6 className="text-info card-text">{product.price}$</h6>

                                  {product.stock === 0 ? (
                                    <img className="mx-auto mt-3" src={outOfStockImage} style={{width: '120px', height: '15px'}}/>
                                  ) : (
                                    <div className="d-flex justify-content-center">
                                    <button  
                                      onClick={() => {addToCart(product)}} 
                                      style={{background: 'transparent', border: '10px'}}>
                                      <img src={addTpCartImage} style={{width: '120px', height: '60px'}}/>
                                    </button>
                                  </div>
                                  )}
                              </div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
          )}
        </div>
    )
}

