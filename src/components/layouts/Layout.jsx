import React from "react";
import "./Layout.scss";

export default function Layout(props) {
  return (
    <div className="no-auth-layout">
      <div className="content-layout">{props.children}</div>
    </div>
  );
}
