import { useParams } from 'react-router-dom';
import styled from 'styled-components';




const Details = () => {

    const params = useParams()
    return (
        <Detail>
            <h1 style={{ fontSize: "20px" }}>Products Details pages</h1>
            <h1 style={{ fontSize: "20px" }}>Product Name {params.productId}</h1>
        </Detail>
    );
};

export default Details;

const Detail = styled.div`
     background: white;
 margin: 20px 450px 0px 450px;
 padding: 0px 500px 250px 0px;
`