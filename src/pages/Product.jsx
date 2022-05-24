//*********************************************************
//  Product

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import {Add, Remove} from "@mui/icons-material";
import Products from "../components/Products";

const Container = styled.div`
  color: #3973ac;
  font-weight: 600;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #ffe6ff;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 120vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  color: #0066cc;
  font-weight: 1000;
  font-size: 60px;
  text-shadow:3px 3px 2px lightblue;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color:#0066cc;
`;

const Price = styled.span`
  font-weight: 1000;
  font-size: 40px;
  color: red;
`;

const OldPrice = styled.span`
  font-weight: 1000;
  font-size: 20px;
  font-style: oblique;
  text-decoration: line-through chocolate;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  color: #3973ac;
  font-weight: 1000;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #660066;
  background-color: white;
  cursor: pointer;
  color: #3973ac;
  font-weight: 1000;
  border-radius: 20%;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn11.bigcommerce.com/s-ocfb74260x/images/stencil/1280x1280/products/541/504/SUS-NOV-00585-Ata_Massa__53493.1575173074.jpg?c=2" />
        </ImgContainer>
        <InfoContainer>
          <Title>ඇට මැස්සා</Title>
          <Desc>
            ද ගැඩ්ෆ්ලයි (ඇට මැස්සා) යනු එතල් ලිලියන් වොයිනිච් විසින් රචිත නවකතාව ක් වන අතර,
            එය 1897 (එක්සත් ජනපදය, ජූනි; එක්සත් රාජධානිය, එම වසරෙහිම සැප්තැම්බර්) දී ප්‍රකාශයට
            පත් කෙරිණි. 1840දී, ඔස්ට්‍රියාවෙහි ආධිපත්‍යයට හසුව පසුවූ ඉතාලියෙහි පැවැති, මහත් ගාලගෝට්ටි,
            කැරැලි හා නැග සිටීම් වලින් අනූනවූ යුගය පසුබිම් කරගෙන රචනය කර තුබූ මෙම කතාන්තරය වෙලී
            පැවැතියේ, තරුණ ව්‍යාපාරය ක සාමාජීකයෙකුව සිටි එහි කථා නායක ආතර් බර්ටන් හා, ඔහුගේ එදිරි
            වාදී පාඩ්රේ මොන්ටාමෙලී ගේ ජීවිත වටාය.
          </Desc>
          <Price>Rs. 997.50</Price><br/>
          <OldPrice>Rs. 1150.00</OldPrice>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Products/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
