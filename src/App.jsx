import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import AdminPanelRooms from "./pages/AdminPanelRooms";
import AdminPanelContacts from "./pages/AdminPanelContacts";
import AdminPanelNews from "./pages/AdminPanelNews";
import AdminPanelReserves from "./pages/AdminPanelReserves";
import AdminPanelUsers from "./pages/AdminPanelUsers";
import AdminPanelCreateNews from "./pages/AdminPanelCreateNews";
import AdminPanelCreateRoom from "./pages/AdminPanelCreateRoom";
import SignInAdmin from "./pages/SignInAdmin";
import SignUpAdmin from "./pages/SignUpAdmin";
import UserPanelReserves from "./pages/UserPanelReserves";
import UserPanelProfile from "./pages/UserPanelProfile";
function App() {
  const user = false;
  const admin = false;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/forgot-password"
          element={user ? <Navigate to="/" /> : <ForgotPass />}
        />
        <Route path="/reserves" element={<Reserves />} />
        <Route path="/reserve/:id" element={<Reserve />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/adminpanelrooms" element={<AdminPanelRooms />} />
        <Route path="/adminpanelcontacts" element={<AdminPanelContacts />} />
        <Route path="/adminpanelreserves" element={<AdminPanelReserves />} />
        <Route path="/adminpanelusers" element={<AdminPanelUsers />} />
        <Route
          path="/adminpanelcreatenews"
          element={<AdminPanelCreateNews />}
        />
        <Route
          path="/adminpanelcreateroom"
          element={<AdminPanelCreateRoom />}
        />
        <Route path="/adminpanelnews" element={<AdminPanelNews />} />

        <Route
          path="/signinadmin"
          element={!admin ? <Navigate to="/" /> : <SignInAdmin />}
        />
        <Route
          path="/signupadmin"
          element={!admin ? <Navigate to="/" /> : <SignUpAdmin />}
        />
        <Route
          path="/userpanelreserves"
          element={user ? <UserPanelReserves /> : <Navigate to="/" />}
        />
        <Route
          path="/userpanelprofile"
          element={user ? <UserPanelProfile /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
