import React from "react";
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './component/pages/Home';
import Category from './component/pages/Category';
import Details from './component/pages/Details';
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/raiden.css';
import Login from "./component/pages/Login";
// import FooterColor from "./component/context/FcolorContext";
import AuthCheck from "./component/context/UserAuth";
import UserDetails from "./component/context/UserDetails";
import Profile from "./component/pages/Profile";
import PrivateRoute from "./component/context/PrivateRoute";
import EditProfile from "./component/pages/EditProfile";
import NotFound from "./component/pages/NotFound";

const App =()=> {

  const location = useLocation();

  return (
    <React.Fragment>
      <AuthCheck>
        <UserDetails>
        {location.pathname !== "/login" ? <Header /> : null}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route to="/*" element={<PrivateRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="details" element={<Details />} />
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          {location.pathname !== "/login" ? <Footer /> : null}
          </UserDetails>
        </AuthCheck>
    </React.Fragment>
  );
}

export default App;
