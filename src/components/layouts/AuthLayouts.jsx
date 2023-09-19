import React from "react";
import Header from "./Header";
import "./Layout.scss";
import "./AuthLayouts.scss"
import Footer from "./Footer";

export default function AuthLayout(props) {
  return (
    <div className="auth-layout">
      <div className="content-main">
        <div className="header-layout">
          <Header />
        </div>
        <div className="content-layout">{props.children}</div>
        <div className="footer-layout">
          <Footer />
        </div>
      </div>
    </div>
  );
}
