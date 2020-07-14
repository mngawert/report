import React, { Component } from "react";

import DataService from "../services/DataService";
import { Link } from "react-router-dom";

class UserChangePwd extends Component {
  state = {
    data: {
      userId: -1,
      userName: "",
      userGroup: "",
      userStatus: null,
      password: "",
    },
    message: "",
  };

  componentDidMount() {
    console.log("componentDidMount");
    console.log("this.props.match.params.id", this.props.match.params.id);
    this.GetUserById(this.props.match.params.id);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    this.GetUserById(nextProps.match.params.id);
  }

  GetUserById = async (id) => {
    const response = await DataService.GetUserById(id);
    console.log("response", response);

    this.setState({ data: response.data, message: "" });
  };

  ChangePasswordUser = async () => {
    try {
      const response = await DataService.ChangePasswordUser(this.state.data);
      console.log("response", response);

      this.setState({ message: "Password has been changed." });
    } catch (error) {
      console.log(error);
    }
  };

  onSubmitData = (e) => {
    this.ChangePasswordUser();

    e.preventDefault();
  };

  onPasswordChange = (e) => {
    this.setState({
      data: { ...this.state.data, password: e.target.value },
    });
  };

  render() {
    if (
      this.props.requiredRole !== this.props.loggedUser.userGroup &&
      this.props.loggedUser.userId.toString() !==
        this.props.match.params.id.toString()
    ) {
      return (
        <React.Fragment>
          <div className="text-center mt-5">Permission Denied</div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            {this.props.userType} User - Change Password
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmitData}>
              {this.state.message !== "" ? (
                <div className="form-row justify-content-center">
                  <div className="form-group col-md-4">
                    {this.state.message}
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <div className="form-row justify-content-center">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">
                        Please enter New Password for "
                        {this.state.data.userName}"
                      </label>
                      <input
                        type="password"
                        required
                        className="form-control"
                        value={this.state.data.password}
                        onChange={this.onPasswordChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        ยืนยัน
                      </button>
                      &nbsp; &nbsp;
                      <Link to="/" className="btn btn-secondary">
                        ยกเลิก
                      </Link>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserChangePwd;
