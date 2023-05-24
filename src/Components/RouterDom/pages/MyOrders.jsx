import React from 'react';
import styled from 'styled-components';

const MyOrders = () => {
    return (
        <Orders>
            <h1 style={{ fontSize: "30px" }}>
                My Orders
            </h1>
        </Orders>
    );
};

export default MyOrders;

const Orders = styled.div`
 background: white;
 margin: 20px 500px 0px 500px;
 padding: 0px 500px 250px 0px;

`