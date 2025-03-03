import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductsPage } from './products/ProductsPage.tsx';
import { Login } from './login/LoginPage.tsx';
import { SignUp } from './login/SignUpPage.tsx';
import { CartPage } from './products/CartPage.tsx';
import { CreateShopPage } from './shop/CreateShopPage.tsx';
import { ProductManagementPage } from './shop/ProductManagementPage.tsx';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/createShop" element={<CreateShopPage />}></Route>
          <Route path="/productManagement" element={<ProductManagementPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
