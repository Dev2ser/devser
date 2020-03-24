import React, { Component } from "react";
import "../css/bootstrap.min.css";
import "../css/main.css";
import "../js/jquery-3.4.1.min.js";
import "../js/bootstrap.bundle.min.js";
import "../js/main-min.js";

export default class Dash extends Component {
  render() {
    return (
      <div className="page home-page">
        <div className="settings-box hide-settings">
          <div className="toggle-settings">
            <i className="fa fa-gear fa-lg" />
          </div>
          <div className="settings-content text-center">
            <div className="option-box color-options">
              <h4 className="option-title">Color Options</h4>
              <ul className="list-unstyled">
                <li data-theme="green-theme" />
                <li data-theme="blue-theme" />
                <li data-theme="red-theme" />
                <li data-theme="orange-theme" />
                <li data-theme="purple-theme" />
              </ul>
            </div>
            <div className="option-box font-options">
              <h4 className="option-title">Font Options</h4>
              <select className="form-control">
                <option value="open">open Font</option>
                <option value="public">public Font</option>
                <option value="roboto">roboto Font</option>
                <option value="source">source Font</option>
              </select>
            </div>
            <div className="option-box">
              <h4 className="option-title">Sidebar Options</h4>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="logo-area text-center">R-J</div>
          <ul className="links-area list-unstyled">
            <li>
              <a className="active" href="dashboard.html">
                Dashboard
              </a>
            </li>
            <li>
              <a className="toggle-submenu" href="#">
                Articles
                <i className="fa fa-angle-right" />
              </a>
              <ul className="child-links list-unstyled">
                <li>
                  <a href="featured.html">Featured</a>
                </li>
                <li>
                  <a href="mostfeatured.html">Most Viewed</a>
                </li>
                <li>
                  <a href="allfeatured.html">All</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="toggle-submenu" href="#">
                News
                <i className="fa fa-angle-right" />
              </a>
              <ul className="child-links list-unstyled">
                <li>
                  <a href="#">Team News</a>
                </li>
                <li>
                  <a href="#">Development News</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="info.html">Info</a>
            </li>
            <li>
              <a className="bottom" href="feedback.html">
                Feedback
              </a>
            </li>
            <li>
              <a className="bottom" href="settings.html">
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="content-area">
          <div className="header">
            <i className="fa fa-exchange fa-lg toggle-sidebar" />
            <div className="dropdown notifications-container">
              <i
                className="fa fa-bell fa-lg header-icon toggle-notifications"
                id="notifications"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div className="dropdown-menu" aria-labelledby="notifications">
                <div className="noti-head">
                  Notifications<span>5</span>
                </div>
                <div className="noti-content">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-rss fa-lg" />
                      Site Published
                    </li>
                    <li>
                      <i className="fa fa-level-up" />
                      v1.0.1 Is Out
                    </li>
                    <li>
                      <i className="fa fa-thumbs-o-up fa-lg" />
                      Feedback - Settings Pages Are Added
                    </li>
                    <li>
                      <i className="fa fa-envelope-o fa-lg" />
                      Development Team Says: "Please Leave A Feedback"
                    </li>
                  </ul>
                </div>
                <div className="noti-foot text-center">
                  <a href="#">View All Notifications</a>
                </div>
              </div>
            </div>
            <i className="fa fa-expand fa-lg toggle-fullscreen header-icon" />
            <div className="dropdown usermenu-container">
              <div
                className="username"
                id="usermenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="avatar rounded-circle"
                  src="imgs/default.png"
                  alt="User Avatar"
                />
                <span className="user">Yasser Almutairi</span>
                <i className="fa fa-angle-down fa-lg" />
              </div>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="usermenu"
              >
                <div className="user-info">
                  <h3>Yasser A</h3>
                  <p>Premium Member</p>
                </div>
                <hr />
                <ul className="activities-list list-unstyled">
                  <li>Added Comment on Post "How To Make Bla Bla Bla"</li>
                  <li>Created Post on Category "Science"</li>
                  <li>Created Chart on Charts Page</li>
                  <li>Added Comment on Post "How To Make Bla Bla Bla Two"</li>
                </ul>
                <hr />
                <div className="row usermenu-links">
                  <div className="col">
                    <div className="link-box">
                      <i className="fa fa-gear fa-lg fa-fw" />
                      <span>Settings</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="link-box">
                      <i className="fa fa-user fa-lg fa-fw" />
                      <span>My Profile</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="link-box">
                      <i className="fa fa-power-off fa-lg fa-fw" />
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="content">
              <div className="page-head">
                <h1 className="page-title">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
