import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Template from "../Template";
import Title from "../Title/Title";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import SignInWithGoogle from "../SignInWithGoogle/SignInWithGoogle";
import LinkWrapper from "../../LinkWrapper";
import { mobile } from "../../../responsive";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../../actions/client/userAction";
import BackdropLoader from "../../Layouts/BackdropLoader";

const ForgotPassContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
    ${mobile({
        marginBottom: "20px",
    })}
`;

const ForgotPass = styled.div`
    margin-right: 5px;
    font-weight: bold;
`;

const OrSec = styled.div`
    width: 100%;
    margin: 10px 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bar = styled.div`
    padding: 1px;
    width: 100%;
    background-color: #cbcbcb;
`;

const Or = styled.div`
    padding: 0 30px;
    color: #cbcbcb;
`;

const SignInSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated, error, registered } = useSelector(
        (state) => state.user
    );

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginUser(email, password));
        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (isAuthenticated) {
            navigate("/");
            toast.success("خوش آمدید.");
        }
    }, [dispatch, error, isAuthenticated, registered, navigate]);

    return (
        <>
            {loading && <BackdropLoader />}
            <Template onSubmit={handleLogin}>
                <Title>خوش آمدید</Title>
                <Input
                    placeholder="ایمیل"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <Input
                    placeholder="رمز عبور"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <ForgotPassContainer>
                    رمز عبور خود را فراموش کرده‌اید؟
                    <ForgotPass>
                        <LinkWrapper
                            to="/forgot-password"
                            style={{
                                textDecoration: "underline",
                            }}
                        >
                            فراموشی رمز عبور
                        </LinkWrapper>
                    </ForgotPass>
                </ForgotPassContainer>
                <SubmitButton>ورود</SubmitButton>
                <OrSec>
                    <Bar />
                    <Or>یا</Or>
                    <Bar />
                </OrSec>
                <SignInWithGoogle />
            </Template>
        </>
    );
};

export default SignInSection;
