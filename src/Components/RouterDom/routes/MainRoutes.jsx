import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Product from '../pages/Product/Product';
import Details from '../pages/Product/Details';
import MyOrders from '../pages/MyOrders';
import MyCart from '../pages/MyCart';
import MainLayout from '../pages/MainLayout';
import Error from '../UI/Error';

const MainRoutes = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<MainLayout />} >

                    <Route path='/Products' element={<Product />} />
                    <Route path='Products/:productId' element={<Details />} />
                    <Route path='/MyOrders' element={<MyOrders />} />
                    <Route path='/MyCart' element={<MyCart />} />
                </Route>
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    );
};

export default MainRoutes;
