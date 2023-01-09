import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Template from "../Template";
import Title from "../Title/Title";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import LinkWrapper from "../../LinkWrapper";
import { mobile } from "../../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../actions/userAction";
import { toast } from "react-toastify";
import BackdropLoader from "../../Layouts/BackdropLoader";

const TermsContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: start;
    ${mobile({
        marginBottom: "20px",
    })}
`;

const TermsCheck = styled.input``;

const Terms = styled.div`
    font-size: 12px;
    ${mobile({
        fontSize: "16px",
    })}
`;

const AlreadySignedUpContainer = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    ${mobile({
        marginTop: "20px",
    })}
`;

const AlreadySignedUp = styled.div`
    margin-right: 5px;
    font-weight: bold;
`;

const SignUpSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated, error, registered } = useSelector(
        (state) => state.user
    );

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_Confirmation] = useState("");
    const [user, setUser] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    });

    //const [avatar, setAvatar] = useState();
    //const [avatarPreview, setAvatarPreview] = useState();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            toast.error("پسورد باید حداقل شامل 8 کاراکتر باشد");
            return;
        }
        //if (!avatar) {
        //    toast.error("Select Profile Pic");
        //    return;
        //}

        setUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        });
        dispatch(registerUser(user));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (isAuthenticated) {
            navigate("/");
        }
        if (registered) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setPassword_Confirmation("");
            toast.success("ثبت نام با موفقیت انجام شد.", {
                onClose: () => navigate("/signin"),
                autoClose: 5000,
            });
        }
    }, [dispatch, error, isAuthenticated, registered, navigate]);

    return (
        <>
            {loading && <BackdropLoader />}

            <Template onSubmit={handleRegister}>
                <Title>ثبت نام</Title>
                <Input
                    placeholder="نام"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                        console.log(firstName);
                    }}
                />
                <Input
                    placeholder="نام خانوادگی"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    placeholder="ایمیل"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                />
                <Input
                    placeholder="رمز عبور"
                    name="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                />
                <Input
                    placeholder="تکرار رمز عبور"
                    name="password_confirmation"
                    value={password_confirmation}
                    onChange={(e) => {
                        setPassword_Confirmation(e.target.value);
                    }}
                    type="password"
                />
                <TermsContainer>
                    <TermsCheck type="checkbox" />
                    <Terms>تمامی شرایط و قوانین را می‌پذیرم.</Terms>
                </TermsContainer>
                <SubmitButton>ثبت نام</SubmitButton>
                <AlreadySignedUpContainer>
                    آیا قبلا ثبت نام کرده‌اید؟
                    <AlreadySignedUp>
                        <LinkWrapper
                            to="/signin"
                            style={{
                                textDecoration: "underline",
                            }}
                        >
                            ورود
                        </LinkWrapper>
                    </AlreadySignedUp>
                </AlreadySignedUpContainer>
            </Template>
        </>
    );
};

export default SignUpSection;
