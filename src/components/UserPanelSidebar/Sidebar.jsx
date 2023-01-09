import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import "../../css/AdminPanelSidebar.css";
import LinkWrapper from ".././LinkWrapper";

const MenuItem = styled.div`
  margin: 10px;
  font-size: 16px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;
`;
const SideBarDiv = styled.div`
  width: 277px;
  box-shadow: 0px 5px 10px 0px #dddddd;

  height: 100vh;
  position: fixed;
  right: 0;
  margin: 0 auto;
  top: 80px;
`;
const SideBar = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div>
      <SideBarDiv>
        <Right>
          <LinkWrapper to="/userpanelreserves">
            <MenuItem
              style={path === "/userpanelreserves" ? { fontWeight: "bold" } : {}}
            >
               رزرو ها
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/userpanelprofile">
            <MenuItem style={path === "/userpanelprofile" ? { fontWeight: "bold" } : {}}>
               پروفایل من
            </MenuItem>
          </LinkWrapper>

          <LinkWrapper to="/">
            <MenuItem style={{ color: "red" }}>خروج </MenuItem>
          </LinkWrapper>
        </Right>
      </SideBarDiv>
    </div>
  );
};

export default SideBar;
