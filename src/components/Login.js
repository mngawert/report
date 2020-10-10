import React, { Component } from "react";

class Login extends Component {
  state = { showPassword: false };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const {
      onSubmitLogin,
      onUserNameChanged,
      onPasswordChanged,
      loggedUser,
      loginResult,
    } = this.props;

    return (
      <React.Fragment>
        <div style={{ width: "100%" }}>
          <div
            style={{
              width: "500px",
              margin: "100px auto",
            }}
          >
            <div className="card">
              <div className="card-header">TOT VAS System Report - Login</div>
              <div className="card-body">
                <form onSubmit={onSubmitLogin}>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputState">
                        Username (Case Sensitive)
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={loggedUser.userName}
                        onChange={onUserNameChanged}
                      />
                    </div>
                  </div>

                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label htmlFor="inputState">Password</label>
                      <input
                        type={this.state.showPassword ? "text" : "password"}
                        required
                        className="form-control"
                        value={loggedUser.password}
                        onChange={onPasswordChanged}
                      />
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-8">
                      <label>
                        <input type="checkbox" onClick={this.togglePassword} />{" "}
                        Show Password
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-12 text-center">
                      <span className="text-danger">{loginResult}</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
