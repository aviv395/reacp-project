import React, { JSX, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { products, ShowProduct } from './ProductsData.tsx'
import notFoundImage from '../img/notFound.png'
import { useNavigate } from "react-router-dom";

function Navbar(): JSX.Element {
    const navigate = useNavigate();
    
    const hendlerExitButton = (): void => {
        navigate("/");
    }

    const hendlerCartButton = (): void => {
        navigate("/cart");
    }

    return (
        <div className="d-flex bd-highlight" style={{backgroundColor: 'Wheat'}}>
            <div className="p-2 w-100 bd-highlight ml-5" style={{ textAlign: 'center'}}>
                <h1 style={{ fontSize: '6rem', fontWeight: 'bold' }}>SHOPPING WEB</h1>
            </div>

            <div className="p-2 flex-shrink-1 bd-highlight d-flex align-items-center">
                <button className="btn btn-link" style={{width: '60px', height: '60px'}} 
                        onClick={hendlerExitButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                </button>
            </div>

            <div className="p-2 flex-shrink-1 bd-highlight d-flex align-items-center">
                <button className="btn btn-link" style={{width: '60px', height: '60px'}} 
                        onClick={hendlerCartButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                </button>
            </div>
        </div>
    );
}

function ShowFilterProducts(): JSX.Element {
    const [search, setSearch] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <nav className="navbar navbar">
                    <form className="form-inline">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={search}
                            onChange={handleSearchChange}
                            style={{ width: '450px', height: '45px', fontSize: '1.2rem', color: 'DarkBlue' }} 
                        />
                    </form>
                </nav>
            </div>

            <div className="row mt-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ShowProduct product={product} />
                    ))
                ) : (
                    <div className="mx-auto">
                        <p className="text-center mt-4">No products found</p>
                        <img src={notFoundImage}></img>
                    </div>
                )}
            </div>
        </div>
    );
}

const CreateShop = (): JSX.Element => {
    const navigate = useNavigate();
    const hendlerCreateShopNutton = (): void => {
        navigate("/createShop");
    }

    return (
        <button 
            type="button" 
            onClick={hendlerCreateShopNutton}
            className="btn btn-outline-info ml-4">
                + create shop
        </button>
    )
}

export function ProductsPage(): JSX.Element {
    return (
        <div>
            <Navbar/>
            <ShowFilterProducts/>
            <CreateShop/>
        </div>
    )
}




