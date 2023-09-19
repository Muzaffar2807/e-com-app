import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useConfig from "../../hooks/useConfig";
import AuthLayout from "../layouts/AuthLayouts";  
import Home from "../containers/Home";
import Wishlist from "../containers/wishlist";
import Cart from "../containers/cart";

export default function CustomRoutes() {
  const [loading, setLoading] = useState(false);
  const { sessionKey, basePath } = useConfig();

  useEffect(() => {
   // checkSession();
    // eslint-disable-next-line
  }, []);

  const checkSession = () => {
    setLoading(true);
    let session = Storage.get(sessionKey);
    // let session = localStorage.getItem('dms');
    // console.log(session)
    // console.log(user.token)
    if (session) {
      setLoading(false);
    } else {
      // navigate("/login");
      setLoading(false);
    }
  };

  return loading ? (
    <></> //LazyLoader
  ) : (
    <AuthLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={`${basePath}/`} element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/whishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart /> }/>
      </Routes>
    </AuthLayout>
  );
}
