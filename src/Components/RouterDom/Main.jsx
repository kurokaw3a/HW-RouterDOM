import styled from 'styled-components';
import Product from './pages/Product/Product';
import MyCart from './pages/MyCart';
import MyOrders from './pages/MyOrders';
import Details from './pages/Product/Details';
import styles from './Main.module.css'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()

    const backPage = () => {
        navigate(-1)
    }

    return (
        <>
            <Header>
                <h1>LOGO</h1>
                <Navigation>
                    <NavLink className={({ isActive, isPending }) => isPending ? styles.pending : isActive ? styles.active : styles.pending} to='/Products'>Products</NavLink>
                    <NavLink className={({ isActive, isPending }) => isPending ? styles.pending : isActive ? styles.active : styles.pending} to='/MyCart'> My Cart</NavLink>
                    <NavLink className={({ isActive, isPending }) => isPending ? styles.pending : isActive ? styles.active : styles.pending} to='/MyOrders'>My Orders</NavLink>
                </Navigation>
            </Header >
            <section>
                <Routes>
                    <Route path='/Products' element={<Product />} />
                    <Route path='Products/:productId' element={<Details />} />
                    <Route path='/MyOrders' element={<MyOrders />} />
                    <Route path='/MyCart' element={<MyCart />} />
                </Routes>
                <ButtonBack onClick={backPage}>Go back</ButtonBack>
            </section>
        </>
    );
};

export default Main;

const Header = styled.header`
    background: #438fc5;
    display: flex;
    color: white;
     justify-content: space-between;
     padding: 20px 110px 40px 120px;
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