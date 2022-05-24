//*********************************************************
//  Navbar

import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Badge, MenuBook, Search, ShoppingCart} from "@mui/icons-material";

const Container = styled.div`
  height: 100px;
  margin-bottom: 15px;
  background-color: #d9ffb3;
  color: #3973ac;
  font-weight: 1000;
  ${mobile({height: "100px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  font-weight: 1000;
  cursor: pointer;
  color: #999966;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid #a9a9a9;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: 0 solid transparent;
  padding: 5px;
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 30px;
  ${mobile({fontSize: "24px"})}
`;

const A = styled.a`
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <A href="../pages/Home">
                            <span>Online<br/></span>
                            සරසවිය
                            <MenuBook/>
                        </A>
                    </Logo>
                </Center>
                <Right>
                <A href="/">
                        <MenuItem>HOME</MenuItem>
                    </A>
                    <A href="../pages/Register">
                        <MenuItem>REGISTER</MenuItem>
                    </A>
                    <A href="../pages/Login">
                        <MenuItem>SIGN-IN</MenuItem>
                    </A>
                    <MenuItem>
                        <A href="../pages/Cart">
                            <ShoppingCart/>
                        </A>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
