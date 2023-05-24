import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../Main.module.css'

const products = [
  {
    name: "Product Name 1",
    id: '1',
  },
  {
    name: "Product Name 2",
    id: '2',
  },
]
const Product = () => {

  return (
    <>
      <Outlet /> 
      <Products>
        {products.map((el) => {
          return <>
            <CurrentPr >
              {el.name}
              <Link to={el.id} className={styles.details}>Details</Link>
            </CurrentPr>
          </>
        })}
      </Products >



    </>
  );
};

export default Product;

const Products = styled.div`
   margin: 50px 500px 0px 500px;
`
const CurrentPr = styled.p`
margin-top: 20px;
 background: white; 
 font-size:35px;
 padding: 30px 40px 30px 40px;
 font-family: sans-serif;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`