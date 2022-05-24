//*********************************************************
//  Products

import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const A = styled.a`
  text-decoration: none;
`;

const Products = () => {
    return (
        <Container>

            {popularProducts.map((item) => (
                <A href="../pages/Product">
                    <Product item={item} key={item.id}/>
                </A>
            ))}

        </Container>
    );
};

export default Products;
