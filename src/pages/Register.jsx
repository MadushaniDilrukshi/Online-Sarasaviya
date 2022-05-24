//*********************************************************
//  Register

import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: #3973ac;
  font-weight: 1000;
  background: linear-gradient(rgba(255, 255, 255, 0.1),
  rgba(255, 255, 255, 0.1)),
  url("https://cdn.wallpapersafari.com/0/80/KIiEkW.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 5%;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  color: #3973ac;
  font-weight: 1000;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #660066;
  color: aliceblue;
  font-weight: 1000;
  cursor: pointer;
  border-radius: 20%;
`;

const Register = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>CREATE YOUR ACCOUNT</Title>
                    <Form>
                        <Input placeholder="First name"/>
                        <Input placeholder="Last name"/>
                        <Input placeholder="Username"/>
                        <Input placeholder="Email address"/>
                        <Input placeholder="Password"/>
                        <Input placeholder="Confirm password"/>
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE ACCOUNT</Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Register;
