import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

// Import images
import logoImage from "../../assets/img/kaiadmin/logo_light.svg";
import Footer from "../Footer";
import IndexContainer from "../Containers/IndexContainer.jsx";

const NavSide = () => {
  return (
    <>
      <div className="wrapper">
        {/* Sidebar start */}
        <Sidebar />
        {/* Sidebar end */}
        <div className="main-panel">
          <div className="main-header">
            <div className="main-header-logo">
              {/* Logo Header */}
              <div className="logo-header" data-background-color="dark">
                <a href="#" className="logo">
                  <img
                    src={logoImage}
                    alt="navbar brand"
                    className="navbar-brand"
                    height="20"
                  />
                </a>
                <div className="nav-toggle">
                  <button className="btn btn-toggle toggle-sidebar">
                    <i className="gg-menu-right"></i>
                  </button>
                  <button className="btn btn-toggle sidenav-toggler">
                    <i className="gg-menu-left"></i>
                  </button>
                </div>
                <button className="topbar-toggler more">
                  <i className="gg-more-vertical-alt"></i>
                </button>
              </div>
              {/* End Logo Header */}
            </div>
            {/* Navbar Header */}
            <Navbar />
            {/* End Navbar */}
          </div>
         

         <IndexContainer/>

           <Footer/>
        </div>
      </div>
    </>
  );
};

export default NavSide;
