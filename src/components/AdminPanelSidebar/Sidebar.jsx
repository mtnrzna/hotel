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
          <LinkWrapper to="/adminpanelrooms">
            <MenuItem
              style={path === "/adminpanelrooms" ? { fontWeight: "bold" } : {}}
            >
              لیست اتاق ها
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/adminpanelnews">
            <MenuItem style={path === "/adminpanelnews" ? { fontWeight: "bold" } : {}}>
              لیست خبر ها
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/adminpanelusers">
            <MenuItem
              style={path === "/adminpanelusers" ? { fontWeight: "bold" } : {}}
            >
              لیست کاربر ها
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/adminpanelreserves">
            <MenuItem style={path === "/adminpanelreserves" ? { fontWeight: "bold" } : {}}>
              لیست رزرو ها
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/adminpanelcontacts">
            <MenuItem style={path === "/adminpanelcontacts" ? { fontWeight: "bold" } : {}}>
              لیست تماس ها
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/adminpanelcreateroom">
            <MenuItem style={path === "/adminpanelcreateroom" ? { fontWeight: "bold" } : {}}>
              اضافه کردن اتاق{" "}
            </MenuItem>
          </LinkWrapper>
          <LinkWrapper to="/adminpanelcreatenews">
            <MenuItem style={path === "/adminpanelcreatenews" ? { fontWeight: "bold" } : {}}>
              اضافه کردن خبر{" "}
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
