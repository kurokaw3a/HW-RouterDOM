import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../Main.module.css'

const MainLayout = () => {
    const navigate = useNavigate()

    const backPage = () => {
        navigate(-1)
    }
    return (
        <div>
            <Header>
                <h1>LOGO</h1>
                <Navigation>
                    <NavLink className={({ isActive, isPending }) => isPending ? styles.pending : isActive ? styles.active : styles.pending} to='/Products'>Products</NavLink>
                    <NavLink className={({ isActive, isPending }) => isPending ? styles.pending : isActive ? styles.active : styles.pending} to='/MyCart'> My Cart</NavLink>
                    <NavLink className={({ isActive, isPending }) => isPending ? styles.pending : isActive ? styles.active : styles.pending} to='/MyOrders'>My Orders</NavLink>
                </Navigation>
            </Header >
            <Outlet />
            <ButtonBack onClick={backPage}>Go back</ButtonBack>
        </div>
    );
};


export default MainLayout;

const Header = styled.header`
    background: #438fc5;
    display: flex;
    color: white;
     justify-content: space-between;
     padding:20px 110px 20px 120px;
    `
const Navigation = styled.nav`
display: flex;
gap: 100px;
     font-size:35px ;
     font-weight: 100;
`
const ButtonBack = styled.button`
 background: #4dae8a;
 border: none;
 border-radius: 25px;
 padding: 15px 40px 15px 40px;
 font-size: 25px;
 color: white;
margin-left: 480px;
margin-top: 20px;
`
