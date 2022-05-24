//*********************************************************
//  Newsletter

import styled from "styled-components";
import { mobile } from "../responsive";
import {Send} from "@mui/icons-material";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  font-weight: 1000;
  color: #3973ac;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 1000;
  color: #3973ac;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: 0 solid transparent;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #660066;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Get your offer!!</Title>
      <Desc>Subscribe & get discount coupons and offers....</Desc>
      <InputContainer>
        <Input placeholder="Your Email Address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
