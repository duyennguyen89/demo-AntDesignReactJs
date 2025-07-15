import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Category from '../../Pages/Category';
import AppCheckout from '../Checkout';

AppRoutes.propTypes = {};

function AppRoutes(props) {
    return (
        <Routes>
            <Route path='/' element={<Home onAddToCart={props.onAddToCart} />} />
            <Route path='/:categoryId' element={<Category />} />
            <Route path="/checkout" element={<AppCheckout />} />
        </Routes>
    );
}

export default AppRoutes;