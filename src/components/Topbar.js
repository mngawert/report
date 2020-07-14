import React, { Component } from "react";

class Topbar extends Component {
  state = {};
  render() {
    const { loggedUser, onLogoutClicked } = this.props;

    return (
      <React.Fragment>
        {/* <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars"></i>
          </button>

          <ul className="navbar-nav ml-auto">
            <button className="dropdown-item">
              <i className="fas fa-user fa-sm fa-fw text-gray-400"></i>
              {loggedUser.userName}
            </button>
            <button className="dropdown-item" onClick={onLogoutClicked}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw text-gray-400"></i>
              Logout
            </button>
          </ul>
        </nav>
        {/* <!-- End of Topbar --> */}
      </React.Fragment>
    );
  }
}

export default Topbar;
