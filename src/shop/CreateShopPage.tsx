import React, { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateShopPage = (): JSX.Element => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [shopName, setShopName] = useState<string>('');
    const [shopDescription, setShopDescription] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');
    const [cardValidity, setCardValidity] = useState<string>('');
    const [cardCvc, setCardCvc] = useState<string>('');

    const navigate = useNavigate();
    const handlerCreateShopButton = (): void => {
        navigate("/productManagement");
    }
    
    return (
        <div>
            <div className="d-flex bd-highlight mb-5" style={{backgroundColor: 'Lavender'}}>
                <div className="p-2 w-100 bd-highlight ml-5" style={{ textAlign: 'center'}}>
                    <h1 style={{ fontSize: '6rem', fontWeight: 'bold' }}>CREATE NEW SHOP</h1>
                </div>    
            </div>

            <div className="row justify-content-center">
                <div className="card border-light" style={{width: '950px'}}>
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="First name"
                                    value={firstName} 
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Last name"
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Shop name"
                                    value={shopName} 
                                    onChange={(e) => setShopName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Shop Description"
                                    value={shopDescription} 
                                    onChange={(e) => setShopDescription(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="form-row mb-3">
                            <div className="col">
                                <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="State"
                                        value={state} 
                                        onChange={(e) => setState(e.target.value)}
                                        required 
                                />
                            </div>
                            <div className="col">
                                <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Address"
                                        value={address} 
                                        onChange={(e) => setAddress(e.target.value)}
                                        required 
                                />
                            </div>
                            <div className="col">
                                <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Phone number"
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)}
                                        required 
                                />
                            </div>
                        </div>

                        <div className="form-row mb-3">
                            <div className="col">
                                <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Card number"
                                        value={cardNumber} 
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        required 
                                />
                            </div>
                            <div className="col">
                                <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Card validity"
                                        value={cardValidity} 
                                        onChange={(e) => setCardValidity(e.target.value)}
                                        required 
                                />
                            </div>
                            <div className="col">
                                <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="CVC"
                                        value={cardCvc} 
                                        onChange={(e) => setCardCvc(e.target.value)}
                                        required 
                                />
                            </div>
                        </div>
                    </form>

                    <button 
                        type="button" 
                        onClick={handlerCreateShopButton}
                        style={{width: '250px'}}
                        className="btn btn-primary mt-3 mb-2 col align-self-center"
                        disabled={!firstName || !lastName || !shopName || !shopDescription || 
                            !state || !address || !phone || !cardNumber || !cardValidity || !cardCvc}
                        >
                            Create shop
                    </button>
                </div>
            </div>
        </div>        
    )
}