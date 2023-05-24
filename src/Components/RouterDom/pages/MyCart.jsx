import React from 'react';
import styled from 'styled-components';

const MyCart = () => {
    return (
        <Cart>

            <h1 style={{fontSize:"30px"}}>
                My cart
            </h1>
        </Cart>
    );
};

export default MyCart;

const Cart = styled.div`
 background: white;
 margin: 20px 500px 0px 500px;
 padding: 0px 500px 250px 0px;

`