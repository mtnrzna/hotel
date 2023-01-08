import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import LinkWrapper from ".././LinkWrapper";


const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px 0px #dddddd;
  position: relative;
`;

const Wrapper = styled.div`
  width: 80%;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const UserProfile = styled.button`
  width: 120px;
  margin-right: 20px;
  background-color: white;
  border-radius: 3px;
  color: black;
  font-weight: 500;
  border: 1px solid black;
  font-size: 1rem;
  padding:5px 10px;
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
`;

const Navbar = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <LinkWrapper to="/adminpanelrooms">
              <UserProfile> حساب کاربری</UserProfile>
            </LinkWrapper>
          </Left>

          <Right>
            <LinkWrapper to="/">
              <ImageContainer>
                <Logo src="/images/logo.png" />
              </ImageContainer>
            </LinkWrapper>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
