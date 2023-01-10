import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/AdminPanelSidebar.css";
import LinkWrapper from ".././LinkWrapper";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/client/userAction";
import { toast } from "react-toastify";

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

    const { isAuthenticated, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleExit = (e) => {
        dispatch(logoutUser());
        navigate("/");
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        toast("به امید دیدار");
    }, [dispatch, isAuthenticated, error, navigate]);

    return (
        <div>
            <SideBarDiv>
                <Right>
                    <LinkWrapper to="/userpanelreserves">
                        <MenuItem
                            style={
                                path === "/userpanelreserves"
                                    ? { fontWeight: "bold" }
                                    : {}
                            }
                        >
                            رزرو ها
                        </MenuItem>
                    </LinkWrapper>
                    <LinkWrapper to="/userpanelprofile">
                        <MenuItem
                            style={
                                path === "/userpanelprofile"
                                    ? { fontWeight: "bold" }
                                    : {}
                            }
                        >
                            پروفایل من
                        </MenuItem>
                    </LinkWrapper>
                    <MenuItem style={{ color: "red" }} onClick={handleExit}>
                        خروج
                    </MenuItem>
                </Right>
            </SideBarDiv>
        </div>
    );
};

export default SideBar;
