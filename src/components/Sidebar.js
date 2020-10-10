import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <NavLink
            to="/"
            className="sidebar-brand d-flex align-items-center justify-content-center"
          >
            <div className="sidebar-brand-icon">
              <img
                src="./img/crop-1574178163015.jpg"
                alt="TOT"
                width="60"
                height="60"
              />
            </div>
            <div className="sidebar-brand-text mx-3">TOT Report</div>
          </NavLink>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <NavLink className="nav-link" to="/Dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">USSD Report</div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/USSDReport">
              <i className="fas fa-fw fa-table"></i>
              <span>USSD Report</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/USSDSystemReport">
              <i className="fas fa-fw fa-table"></i>
              <span>USSD System Report</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/USSDMngmtReport">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>USSD Management Report</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/USSDDestnAddrMaps">
              <i className="fas fa-fw fa-cog"></i>
              <span>USSD Destination Setting</span>
            </NavLink>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">IVR Report</div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/IVRReport">
              <i className="fas fa-fw fa-table"></i>
              <span>IVR Report</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/IVRSystemReport">
              <i className="fas fa-fw fa-table"></i>
              <span>IVR System Report</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/IVRMngmtReport">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>IVR Management Report</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/IVRDestnAddrMaps">
              <i className="fas fa-fw fa-cog"></i>
              <span>IVR Destination Setting</span>
            </NavLink>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">MCN Report</div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/MCNReport">
              <i className="fas fa-fw fa-table"></i>
              <span>MCN Report</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/MCNSystemReport">
              <i className="fas fa-fw fa-table"></i>
              <span>MCN System Report</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/MCNMngmtReport">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>MCN Management Report</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/MCNDestnAddrMaps">
              <i className="fas fa-fw fa-cog"></i>
              <span>MCN Destination Setting</span>
            </NavLink>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">User Settings</div>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={`/UserChangePwd/${this.props.loggedUser.userId}`}
            >
              <i className="fas fa-fw fa-table"></i>
              <span>Change Password</span>
            </NavLink>
          </li>

          {this.props.loggedUser.userGroup === "Admin" && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Users">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Users</span>
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Sidebar;
