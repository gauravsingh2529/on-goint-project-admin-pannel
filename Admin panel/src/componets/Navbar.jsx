import React from 'react';
// import './Navbar.css'; // Import custom styles if you have any
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
      <div className="container-fluid">
        {/* Search Bar for Large Screens */}
        <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
          <div className="input-group">
            <div className="input-group-prepend">
              <button type="submit" className="btn btn-search pe-1">
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
                <span className="visually-hidden">Search</span>
              </button>
            </div>
            <input
              type="text"
              placeholder="Search ..."
              className="form-control"
              aria-label="Search"
            />
          </div>
        </nav>

        <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
          {/* Mobile Search Dropdown */}
          <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
              <span className="visually-hidden">Search</span>
            </a>
            <ul className="dropdown-menu dropdown-search animated fadeIn">
              <form className="navbar-left navbar-form nav-search">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                    aria-label="Search"
                  />
                </div>
              </form>
            </ul>
          </li>

          {/* Messages Dropdown */}
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messageDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span className="visually-hidden">Messages</span>
            </a>
            <ul
              className="dropdown-menu messages-notif-box animated fadeIn"
              aria-labelledby="messageDropdown"
            >
              <li>
                <div className="dropdown-title d-flex justify-content-between align-items-center">
                  Messages
                  <a href="#" className="small">Mark all as read</a>
                </div>
              </li>
              <li>
                <div className="message-notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-img">
                        <img src="assets/img/jm_denis.jpg" alt="Jimmy Denis" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jimmy Denis</span>
                        <span className="block">How are you?</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    {/* Additional messages here */}
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="javascript:void(0);">
                  See all messages<i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </li>

          {/* Notifications Dropdown */}
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="notifDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-bell" aria-hidden="true"></i>
              <span className="notification">4</span>
              <span className="visually-hidden">Notifications</span>
            </a>
            <ul
              className="dropdown-menu notif-box animated fadeIn"
              aria-labelledby="notifDropdown"
            >
              <li>
                <div className="dropdown-title">You have 4 new notifications</div>
              </li>
              <li>
                <div className="notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary">
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                      </div>
                      <div className="notif-content">
                        <span className="block">New user registered</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    {/* Additional notifications here */}
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="javascript:void(0);">
                  See all notifications<i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </li>

          {/* Quick Actions Dropdown */}
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i className="fas fa-layer-group" aria-hidden="true"></i>
              <span className="visually-hidden">Quick Actions</span>
            </a>
            <div className="dropdown-menu quick-actions animated fadeIn">
              <div className="quick-actions-header">
                <span className="title mb-1">Quick Actions</span>
                <span className="subtitle op-7">Shortcuts</span>
              </div>
              <div className="quick-actions-scroll scrollbar-outer">
                <div className="quick-actions-items">
                  <div className="row m-0">
                    <a className="col-6 col-md-4 p-0" href="#">
                      <div className="quick-actions-item">
                        <div className="avatar-item bg-danger rounded-circle">
                          <i className="far fa-calendar-alt" aria-hidden="true"></i>
                        </div>
                        <span className="text">Calendar</span>
                      </div>
                    </a>
                    {/* Additional quick actions here */}
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* User Profile Dropdown */}
          <li className="nav-item topbar-user dropdown hidden-caret">
            <a
              className="dropdown-toggle profile-pic"
              data-bs-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <div className="avatar-sm">
                <img
                  src="assets/img/profile.jpg"
                  alt="Profile Picture"
                  className="avatar-img rounded-circle"
                />
              </div>
              <span className="profile-username">
                <span className="op-7">Hi,</span>
                <span className="fw-bold">Hizrian</span>
              </span>
            </a>
            <ul className="dropdown-menu dropdown-user animated fadeIn">
              <div className="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div className="user-box">
                    <div className="avatar-lg">
                      <img
                        src="assets/img/profile.jpg"
                        alt="Profile Picture"
                        className="avatar-img rounded"
                      />
                    </div>
                    <div className="u-text">
                      <h4>Hizrian</h4>
                      <p className="text-muted">hello@example.com</p>
                      <a
                        href="profile.html"
                        className="btn btn-xs btn-secondary btn-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">My Profile</a>
                  <a className="dropdown-item" href="#">My Balance</a>
                  <a className="dropdown-item" href="#">Inbox</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Account Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
