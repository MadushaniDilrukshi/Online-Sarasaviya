//*********************************************************
//  Footer

import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Facebook,
  Instagram,
  MailOutline,
  MenuBook,
  MenuOpen,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  background-color: #d9ffb3;
  font-weight: 1000;
  color: #3973ac;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #3973ac;
`;

const Desc = styled.p`
  margin: 20px 0;
  text-align:justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 45% 5% 45% 45%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 45%;
  cursor: pointer;
  margin-bottom: 10px;
  border-bottom: 3px solid darkolivegreen;
  border-radius: 10px;
  margin-left: 2.5%;
  padding-left: 2.5%;
  ${mobile({ width: "95%" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Online <br/> සරසවිය<MenuBook/></Logo>
        <Desc>
        online සරසවිය ශ්‍රී ලංකාවේ සියලුම අන්තර්ජාල පොත් ගබඩාවේ පුරෝගාමියා ඉදිරිපත් කිරීමට ලැබීම ගැන ආඩම්බර වේ. බොහෝ ඔන්ලයින් පොත් ගබඩාවල මෙතෙක් ලබා නොදුන් පැරණි සහ දුර්ලභ කෘති එකතුවක්, විචක්ෂණශීලී ග්‍රන්ථපත්‍ර සඳහාද ලබා ගත හැකිය. අපගේ මාර්ගගත ඇණවුම් සේවාව ඉතා ආරක්ෂිත ගෙවීම් ක්‍රම සමඟ සරල වන අතර, පාරිභෝගිකයින්ට හැකිවන පරිදි නව්‍ය, දේශීය ක්‍රමයක් ඇතුළත් වේ. ක්‍රෙඩිට් කාඩ් මගින් ගෙවීමට අකැමති පාරිභෝගිකයින්ට, පොත් මිලදී ගැනීමට ඔවුන් අන්තර්ජාලය හරහා ඇණවුම් කරන පොත් සඳහා බැංකුවකින් භෞතික ගෙවීමක් සමඟ ගෙවිය හැකි ක්‍රමයක් අපි හඳුන්වා දී ඇත.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Get Direction</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>නවකතා කතා</ListItem>
          <ListItem>පරිවර්තන කතා</ListItem>
          <ListItem>රහස් පරීක්ෂණ කතා</ListItem>
          <ListItem>අධ්‍යාපනික කෘති</ListItem>
          <ListItem>ළමා කතා</ListItem>
          <ListItem>ආදර කතා</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 123, Main Road, Colombo 15, Sri Lanka.
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +94 11 123 4567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@sarasaviya.com
        </ContactItem>
        <Payment src="https://www.savinga.com/img/paypal.png" />
      </Right>
    </Container>
  );
};

export default Footer;
