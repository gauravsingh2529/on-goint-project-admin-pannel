import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Ensure Bootstrap JavaScript is loaded

const Sidebar = () => {
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
          <a href="index.html" className="logo">
            <img
              src="assets/img/kaiadmin/logo_light.svg"
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
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            {/* Dashboard */}
            <li className="nav-item active">
              <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="dashboard">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="../demo1/index.html">
                      <span className="sub-item">Dashboard 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Components Section */}
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Components</h4>
            </li>

            {/* Base */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#base">
                <i className="fas fa-layer-group"></i>
                <p>Base</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="base">
                <ul className="nav nav-collapse">
                  {['Avatars', 'Buttons', 'Grid System', 'Panels', 'Notifications', 'Sweet Alert', 'Font Awesome Icons', 'Simple Line Icons', 'Typography'].map((item, index) => (
                    <li key={index}>
                      <a href={`components/${item.toLowerCase().replace(/ /g, '-')}.html`}>
                        <span className="sub-item">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Sidebar Layouts */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#sidebarLayouts">
                <i className="fas fa-th-list"></i>
                <p>Sidebar Layouts</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  {['Sidebar Style 2', 'Icon Menu'].map((item, index) => (
                    <li key={index}>
                      <a href={`${item.toLowerCase().replace(/ /g, '-')}.html`}>
                        <span className="sub-item">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Forms */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#forms">
                <i className="fas fa-pen-square"></i>
                <p>Forms</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="forms">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="forms/forms.html">
                      <span className="sub-item">Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Tables */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#tables">
                <i className="fas fa-table"></i>
                <p>Tables</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav nav-collapse">
                  {['Basic Table', 'Datatables'].map((item, index) => (
                    <li key={index}>
                      <a href={`tables/${item.toLowerCase().replace(/ /g, '-')}.html`}>
                        <span className="sub-item">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Maps */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#maps">
                <i className="fas fa-map-marker-alt"></i>
                <p>Maps</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="maps">
                <ul className="nav nav-collapse">
                  {['Google Maps', 'Jsvectormap'].map((item, index) => (
                    <li key={index}>
                      <a href={`maps/${item.toLowerCase().replace(/ /g, '')}.html`}>
                        <span className="sub-item">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Charts */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#charts">
                <i className="far fa-chart-bar"></i>
                <p>Charts</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav nav-collapse">
                  {['Chart Js', 'Sparkline'].map((item, index) => (
                    <li key={index}>
                      <a href={`charts/${item.toLowerCase().replace(/ /g, '')}.html`}>
                        <span className="sub-item">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Widgets */}
            <li className="nav-item">
              <a href="widgets.html">
                <i className="fas fa-desktop"></i>
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </a>
            </li>

            {/* Documentation */}
            <li className="nav-item">
              <a href="../../documentation/index.html">
                <i className="fas fa-file"></i>
                <p>Documentation</p>
                <span className="badge badge-secondary">1</span>
              </a>
            </li>

            {/* Menu Levels */}
            <li className="nav-item">
              <a data-bs-toggle="collapse" href="#submenu">
                <i className="fas fa-bars"></i>
                <p>Menu Levels</p>
                <span className="caret"></span>
              </a>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav1">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </a>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        {['Level 2', 'Level 2'].map((item, index) => (
                          <li key={index}>
                            <a href="#">
                              <span className="sub-item">{item}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav2">
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </a>
                    <div className="collapse" id="subnav2">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className="sub-item">Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
