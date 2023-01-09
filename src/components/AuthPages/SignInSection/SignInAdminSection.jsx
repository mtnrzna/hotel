import React, { useEffect, useState } from "react";
import Template from "../Template";
import Title from "../Title/Title";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginAdmin } from "../../../actions/admin/adminAction";
import { toast } from "react-toastify";
import BackdropLoader from "../../Layouts/BackdropLoader";

const SignInAdminSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAdmin, error, registered } = useSelector(
        (state) => state.admin
    );

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginAdmin(email, password));
        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (isAdmin) {
            navigate("/adminpanelrooms");
            toast.success("خوش آمدید.");
        }
    }, [dispatch, error, isAdmin, registered, navigate]);

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

                <SubmitButton>ورود</SubmitButton>
            </Template>
        </>
    );
};

export default SignInAdminSection;
