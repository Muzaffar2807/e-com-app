 import React from "react";
 import "./Footer.scss"; 
 import { NavLink as RouterLink } from "react-router-dom";

 export default function Footer() {
   return (
     <div className="footer-main">
       <div className="row footer-upper">
         <div className="col-12 col-lg-5">
           <div className="footer-logo-section">
             <div className="logo">
               <img alt="Logo" />
             </div>
             <div className="company-info">
               <p className="info">
                 SS Residency , Shop Number 8-1-351/A/42 , Opposite Galaxy
                 Theater, Aditya Nagar Colony, Aravind Nagar Colony, Toli
                 Chowki, Hyderabad, Telangana 500008
               </p>
             </div>
             <div className="contact-info">
               <p className="info">Contact: +91 00000 00000</p>
             </div>
             <div className="d-flex gap-5 social-links">
               <img alt="Facebook" />
               <img alt="Twitter" />
               <img alt="Insta" />
             </div>
           </div>
         </div>
         <div className="col-12 col-lg-7">
           <div className="row footer-menu-sections">
             <div className="col-12 col-lg-3">
               <div className="each-menu-section">
                 <h6 className="title mb-3">Explore Category</h6>
                 <ul className="each-menu-options">
                   <li className="each-menu-option">
                     <RouterLink>Kurta Pajamah</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Sherwani</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Tope</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Suits</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Party Wear</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Wedding Wear</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Festival Wear</RouterLink>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-12 col-lg-3">
               <div className="each-menu-section">
                 <h6 className="title mb-3">Noorani Libas</h6>
                 <ul className="each-menu-options">
                   <li className="each-menu-option">
                     <RouterLink to="/contactus">Contact Us</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Career</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink to="/aboutus">About Us</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Branches</RouterLink>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-12 col-lg-3">
               <div className="each-menu-section">
                 <h6 className="title mb-3">Customer Experience</h6>
                 <ul className="each-menu-options">
                   <li className="each-menu-option">
                     <RouterLink>Shopping Policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Privacy Policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Term & Conditions</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Refund Policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Track Order</RouterLink>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="col-12 col-lg-3">
               <div className="each-menu-section">
                 <h6 className="title mb-3">Legal</h6>
                 <ul className="each-menu-options">
                   <li className="each-menu-option">
                     <RouterLink to="/privacy">Privacy policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink to="/terms">terms and conditions</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink to="/refund-policy">Refund policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink to="/return-policy">Return policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink to="/cookie-policy">Cookie policy</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink to="/faqs">FAQ’s</RouterLink>
                   </li>
                   <li className="each-menu-option">
                     <RouterLink>Site Map</RouterLink>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
       <hr />
       <div className="footer-bottom d-flex justify-content-between align-items-center">
         <div className="copyright">
           <p>© 2020 Copyright Noorani Libas. All Rights Reserved.</p>
         </div>
         <div className="developer-info d-flex align-items-center gap-1">
           <p className="powered_by">Powered By </p>
           <div className="developer-logos d-flex gap-1 flex-column">
             <div className="logos d-flex"></div>
             <p>Brotocode</p>
             <p className="tagline"></p>
           </div>
         </div>
       </div>
     </div>
   );
 }
