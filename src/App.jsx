import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPass from "./pages/ForgotPass";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    const user = false;
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
                <Route path="about-us" element={<AboutUs />}></Route>
                <Route
                    path="/signin"
                    element={user ? <Navigate to="/" /> : <SignIn />}
                ></Route>
                <Route
                    path="/signup"
                    element={user ? <Navigate to="/" /> : <SignUp />}
                ></Route>
                <Route
                    path="/forgot-password"
                    element={user ? <Navigate to="/" /> : <ForgotPass />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
