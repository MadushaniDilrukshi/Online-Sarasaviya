//*********************************************************
//  Announcement

import styled from "styled-components";

const Container = styled.div`
  height: 45px;
  background-color: #006666;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Announcement = () => {
  return <Container>Free Shipping on Every 5 Books</Container>;
};

export default Announcement;
