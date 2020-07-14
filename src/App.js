import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import VASReport from "./components/VASReport";
import VASMngmtReport from "./components/VASMngmtReport";
import DestnAddrMapList from "./components/DestnAddrMapList";
import DestnAddrMapEdit from "./components/DestnAddrMapEdit";
import DestnAddrMapAdd from "./components/DestnAddrMapAdd";

import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import UserAdd from "./components/UserAdd";

import Login from "./components/Login";
import DataService from "./services/DataService";
import UserChangePwd from "./components/UserChangePwd";

class App extends Component {
  state = {
    loggedUser: {
      userId: parseInt(localStorage.getItem("lastLoggedUser.userId")) || -1,
      userName: localStorage.getItem("lastLoggedUser.userName") || "",
      password: "",
      userGroup: localStorage.getItem("lastLoggedUser.userGroup") || "",
      userStatus: -1,
    },
    loginResult: localStorage.getItem("lastLoginResult") || "",
  };

  login = async () => {
    try {
      const response = await DataService.UserLogin(this.state.loggedUser);
      console.log("responseLogin", response);

      let loggedUser = response.data;

      this.setState({ loggedUser: loggedUser, loginResult: "LOGIN_OK" });
      localStorage.setItem("lastLoggedUser.userId", loggedUser.userId);
      localStorage.setItem("lastLoggedUser.userName", loggedUser.userName);
      localStorage.setItem("lastLoggedUser.userGroup", loggedUser.userGroup);
      localStorage.setItem("lastLoginResult", "LOGIN_OK");

      console.log("loggedUser", this.state.loggedUser);
    } catch (error) {
      this.setState({ loginResult: "Invalid Username or Password" });
      console.log(error);
    }
  };

  logout = async () => {
    this.setState({
      loggedUser: {
        userId: -1,
        userName: "",
        password: "",
      },
      loginResult: "",
    });

    localStorage.removeItem("lastLoggedUser.userId");
    localStorage.removeItem("lastLoggedUser.userName");
    localStorage.removeItem("lastLoggedUser.userGroup");
    localStorage.removeItem("lastLoginResult");
  };

  onSubmitLogin = (e) => {
    this.login();

    e.preventDefault();
  };

  onLogoutClicked = (e) => {
    this.logout();
  };

  onUserNameChanged = (e) => {
    this.setState({
      loggedUser: { ...this.state.loggedUser, userName: e.target.value },
    });
  };

  onPasswordChanged = (e) => {
    this.setState({
      loggedUser: { ...this.state.loggedUser, password: e.target.value },
    });
  };

  render() {
    console.log(
      "lastLoggedUser.userName",
      localStorage.getItem("lastLoggedUser.userName")
    );
    console.log("lastLoginResult", localStorage.getItem("lastLoginResult"));

    if (this.state.loginResult !== "LOGIN_OK")
      return (
        <Login
          loggedUser={this.state.loggedUser}
          loginResult={this.state.loginResult}
          onSubmitLogin={this.onSubmitLogin}
          onUserNameChanged={this.onUserNameChanged}
          onPasswordChanged={this.onPasswordChanged}
        />
      );

    return (
      <HashRouter>
        <React.Fragment>
          <Sidebar loggedUser={this.state.loggedUser} />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar
                loggedUser={this.state.loggedUser}
                onLogoutClicked={this.onLogoutClicked}
              />

              <div className="container-fluid">
                <div id="xxx">
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/dashboard" component={Dashboard} />

                  <Route
                    path="/USSDReport"
                    render={(props) => (
                      <VASReport {...props} mode="Normal" vasType="USSD" />
                    )}
                  />
                  <Route
                    path="/USSDSystemReport"
                    render={(props) => (
                      <VASReport {...props} mode="Admin" vasType="USSD" />
                    )}
                  />
                  <Route
                    path="/USSDMngmtReport"
                    render={(props) => (
                      <VASMngmtReport {...props} vasType="USSD" />
                    )}
                  />
                  <Route
                    path="/USSDDestnAddrMaps"
                    render={(props) => (
                      <DestnAddrMapList {...props} destnAddrType="USSD" />
                    )}
                  />
                  <Route
                    path="/USSDDestnAddrMap/:id"
                    render={(props) => (
                      <DestnAddrMapEdit {...props} destnAddrType="USSD" />
                    )}
                  />
                  <Route
                    path="/USSDDestnAddrMapAdd"
                    render={(props) => (
                      <DestnAddrMapAdd {...props} destnAddrType="USSD" />
                    )}
                  />

                  <Route
                    path="/IVRReport"
                    render={(props) => (
                      <VASReport {...props} mode="Normal" vasType="IVR" />
                    )}
                  />
                  <Route
                    path="/IVRSystemReport"
                    render={(props) => (
                      <VASReport {...props} mode="Admin" vasType="IVR" />
                    )}
                  />

                  <Route
                    path="/IVRMngmtReport"
                    render={(props) => (
                      <VASMngmtReport {...props} vasType="IVR" />
                    )}
                  />

                  <Route
                    path="/IVRDestnAddrMaps"
                    render={(props) => (
                      <DestnAddrMapList {...props} destnAddrType="IVR" />
                    )}
                  />
                  <Route
                    path="/IVRDestnAddrMap/:id"
                    render={(props) => (
                      <DestnAddrMapEdit {...props} destnAddrType="IVR" />
                    )}
                  />
                  <Route
                    path="/IVRDestnAddrMapAdd"
                    render={(props) => (
                      <DestnAddrMapAdd {...props} destnAddrType="IVR" />
                    )}
                  />

                  <Route
                    path="/MCNReport"
                    render={(props) => (
                      <VASReport {...props} mode="Normal" vasType="MCN" />
                    )}
                  />
                  <Route
                    path="/MCNSystemReport"
                    render={(props) => (
                      <VASReport {...props} mode="Admin" vasType="MCN" />
                    )}
                  />

                  <Route
                    path="/MCNMngmtReport"
                    render={(props) => (
                      <VASMngmtReport {...props} vasType="MCN" />
                    )}
                  />

                  <Route
                    path="/MCNDestnAddrMaps"
                    render={(props) => (
                      <DestnAddrMapList {...props} destnAddrType="MCN" />
                    )}
                  />
                  <Route
                    path="/MCNDestnAddrMap/:id"
                    render={(props) => (
                      <DestnAddrMapEdit {...props} destnAddrType="MCN" />
                    )}
                  />
                  <Route
                    path="/MCNDestnAddrMapAdd"
                    render={(props) => (
                      <DestnAddrMapAdd {...props} destnAddrType="MCN" />
                    )}
                  />

                  <Route
                    path="/Users"
                    render={(props) => (
                      <UserList
                        {...props}
                        requiredRole="Admin"
                        loggedUser={this.state.loggedUser}
                      />
                    )}
                  />
                  <Route
                    path="/User/:id"
                    render={(props) => (
                      <UserEdit
                        {...props}
                        requiredRole="Admin"
                        loggedUser={this.state.loggedUser}
                      />
                    )}
                  />
                  <Route
                    path="/UserAdd"
                    render={(props) => (
                      <UserAdd
                        {...props}
                        requiredRole="Admin"
                        loggedUser={this.state.loggedUser}
                      />
                    )}
                  />

                  <Route
                    path="/UserChangePwd/:id"
                    render={(props) => (
                      <UserChangePwd
                        {...props}
                        requiredRole="Admin"
                        loggedUser={this.state.loggedUser}
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; TOT 2020</span>
                </div>
              </div>
            </footer>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
