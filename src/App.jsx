import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPass from "./pages/ForgotPass";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Reserves from "./pages/Reserves";
import Reserve from "./pages/Reserve";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./utils/scrollTotop";
import { useSelector } from "react-redux";

function App() {
    const { isAuthenticated } = useSelector((state) => state.user);
    console.log(isAuthenticated);
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route
                    path="/signin"
                    element={isAuthenticated ? <Navigate to="/" /> : <SignIn />}
                />
                <Route
                    path="/signup"
                    element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
                />
                <Route
                    path="/forgot-password"
                    element={
                        isAuthenticated ? <Navigate to="/" /> : <ForgotPass />
                    }
                />
                <Route path="/reserves" element={<Reserves />} />
                <Route path="/reserve/:id" element={<Reserve />} />
                <Route path="/news/:id" element={<News />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
