import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Storage from "../../services/LocalStorage";
import { Routes, Route } from "react-router-dom";
import useConfig from "../../hooks/useConfig";
import AuthLayout from "../layouts/AuthLayouts";
import Home from "../containers/Home";
import Wishlist from "../containers/wishlist";
import Cart from "../containers/cart";
import { updateUserProfile } from "../../store/slices/user";
import Login from "../containers/login";
import Signup from "../containers/signup/Signup";

export default function CustomRoutes() {
  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  const { email } = useSelector((state) => state.user); 
  const {  basePath } = useConfig();
  const [token, setToken] = useState(false);

  useEffect(() => {
    checkSession();
    // eslint-disable-next-line
  }, []);

  const checkSession = () => {
    let session = Storage.get(config.sessionKey);  
    let authData = session ? JSON.parse(session) : {}; 
    let response = Storage.checkUserSession(authData);
    if (response.status) {
      let authData = response.data;
      dispatch(updateUserProfile(authData));
    } else {
    }
  };

  return !token ? (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  ) : (
    <AuthLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={`${basePath}/`} element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/whishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AuthLayout>
  );
}
