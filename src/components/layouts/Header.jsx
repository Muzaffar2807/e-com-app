import React, { useState } from "react";
import "./Header.scss"; 
import { Router, NavLink as RouterLink } from "react-router-dom";

import * as Storage from "../../store/LocalStorage"; 
import Logo from "../../assets/images/color_logo.png";
import Search from "../../assets/images/icons/search.svg";
import User from "../../assets/images/icons/user.svg";
import Order from "../../assets/images/icons/order.svg";
import Logout from "../../assets/images/icons/logout.svg";
import Cart from "../../assets/images/icons/cart.svg";
import Heart from "../../assets/images/icons/heart.svg";
import Perfume from "../../assets/images/perfume.png"; 
export default function Header() {
  const [showMenu, setShowMenu] = useState({});
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);

  const handleMouseEnter = (id) => {
    setShowMenu({ [id]: true });
  };

  const handleMouseLeave = () => {
    setShowMenu({});
  };

  const onLogout = () => {
    Storage.clear();
    window.location.reload();
  };

  return (
    <div className="header-main">
      <div className="upper-header d-flex justify-content-between">
        <div className="logo">
          <RouterLink to="home">
            <img src={Logo} alt="Logo" />
          </RouterLink>
        </div>
        <div className="upper-menu-options">
          <ul className="options d-flex align-items-center">
            <li className="each-option search">
              <img src={Search} alt="Search" />
            </li>
            <li className="each-option">
              <RouterLink to="/whishlist">
                <img src={Heart} alt="Heart" />
              </RouterLink>
            </li>
            <li className="each-option">
              <RouterLink to="/cart">
                <img src={Cart} alt="cart" />
              </RouterLink>
            </li>
            <li
              className={`each-option  dropdown  ${userDropdown ? "show" : ""}`}
              onClick={() => setuserDropdown(!userDropdown)}
            >
              <RouterLink
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={User} alt="user" />
              </RouterLink>
              <div
                className={`dropdown-menu user-menu  ${
                  userDropdown ? "show" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                <ul className="user-options ">
                  <li className="each-user-option">
                    <RouterLink
                      to="/settings"
                      onClick={() => setuserDropdown(false)}
                    >
                      <img src={User} alt="user" />
                      <span>My Account</span>
                    </RouterLink>
                  </li>
                  <li className="each-user-option">
                    <RouterLink
                      to="/orders"
                      onClick={() => setuserDropdown(false)}
                    >
                      <img src={Order} alt="user" /> <span>Orders</span>
                    </RouterLink>
                  </li>

                  <li className="each-user-option" onClick={() => onLogout()}>
                    <RouterLink>
                      <img src={Logout} alt="user" />
                      <span>Logout</span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-menu">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${mobileMenu ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li
                className={`nav-item each-bt-menu dropdown mega-menu ${
                  showMenu.mens ? "show" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("mens")}
                onMouseLeave={handleMouseLeave}
              >
                <RouterLink
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mens's Wear
                </RouterLink>
                <div
                  className={`dropdown-menu mega-menu-content mega-menu-dropdown ${
                    showMenu.mens ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="row sub-menu-content-list">
                    <div className="col-12 col-lg-3">
                      <h6 className="sub-title">Kurtas</h6>
                      <hr />
                      <ul className="sub-menus">
                        <li className="each-sub-option">
                          <RouterLink>Full Kurta</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Short Kurta</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Printed Kurta</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Modern Kurta</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>All Kurta</RouterLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                      <h6 className="sub-title">Suits</h6>
                      <hr />
                      <ul className="sub-menus">
                        <li className="each-sub-option">
                          <RouterLink>2 Piece</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>3 Piece</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>4 Piece</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>5 Piece</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>All Suits</RouterLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                      <h6 className="sub-title">Wedding Wear</h6>
                      <hr />
                      <ul className="sub-menus">
                        <li className="each-sub-option">
                          <RouterLink>Sherwani</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Full Sherwani</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Pathani</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>View All</RouterLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                      <h6 className="sub-title">Festival Wear</h6>
                      <hr />
                      <ul className="sub-menus">
                        <li className="each-sub-option">
                          <RouterLink>Black Kurta</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Ehram</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Tope</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Tope</RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item each-bt-menu">
                <RouterLink className="nav-link">Kid's Wear</RouterLink>
              </li>
              <li className="nav-item each-bt-menu">
                <RouterLink className="nav-link">New Arrival</RouterLink>
              </li>
              <li className="nav-item each-bt-menu">
                <RouterLink className="nav-link">Best Seller</RouterLink>
              </li>
              <li className="nav-item each-bt-menu">
                <RouterLink className="nav-link">Customizable</RouterLink>
              </li>
              <li
                className={`nav-item each-bt-menu dropdown mega-menu ${
                  showMenu.accessories ? "show" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("accessories")}
                onMouseLeave={handleMouseLeave}
              >
                <RouterLink
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accessories
                </RouterLink>
                <div
                  className={`dropdown-menu mega-menu-content mega-menu-dropdown ${
                    showMenu.accessories ? "show" : ""
                  }`}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="row sub-menu-content-list">
                    <div className="col-12 col-lg-3">
                      <h6 className="sub-title">Accessories</h6>
                      <hr />
                      <ul className="sub-menus">
                        <li className="each-sub-option">
                          <RouterLink>Bags & Watch</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Belts</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Perfumes</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Hand Clips</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Buttons</RouterLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                      <h6 className="sub-title">Footwear</h6>
                      <hr />
                      <ul className="sub-menus">
                        <li className="each-sub-option">
                          <RouterLink>Juttis</RouterLink>
                        </li>
                        <li className="each-sub-option">
                          <RouterLink>Flats</RouterLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="d-flex justify-content-center">
                        <img className="option-img" alt="Perfume" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item each-bt-menu">
                <RouterLink to="/aboutus" className="nav-link">
                  About Us
                </RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
