import React, { Component } from "react";

import DataService from "../services/DataService";
import { Link } from "react-router-dom";

class UserEdit extends Component {
  state = {
    data: {
      userId: -1,
      userName: "",
      userGroup: "",
      userStatus: null,
    },
    message: "",
  };

  componentDidMount() {
    this.GetUser();
  }

  GetUser = async () => {
    const response = await DataService.GetUserById(this.props.match.params.id);
    console.log("response", response);

    this.setState({ data: response.data });
  };

  UpdateUser = async () => {
    try {
      const response = await DataService.UpdateUser(this.state.data);
      console.log("response", response);

      this.setState({ message: "Data was updated successfully" });

      this.props.history.push("/Users");
    } catch (error) {
      console.log(error);
    }
  };

  onSubmitData = (e) => {
    this.UpdateUser();

    e.preventDefault();
  };

  onUserNameChange = (e) => {
    this.setState({
      data: { ...this.state.data, userName: e.target.value },
    });
  };

  onUserGroupChange = (e) => {
    this.setState({
      data: { ...this.state.data, userGroup: e.target.value },
    });
  };

  onUserStatusChange = (e) => {
    console.log("onStatusChange", e.target.value);

    this.setState({
      data: { ...this.state.data, userStatus: parseInt(e.target.value) },
    });
  };

  render() {
    if (this.props.requiredRole !== this.props.loggedUser.userGroup) {
      return (
        <React.Fragment>
          <div className="text-center mt-5">Permission Denied</div>
        </React.Fragment>
      );
    }

    const { data } = this.state;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">{this.props.userType} User - Edit</div>
          <div className="card-body">
            <form onSubmit={this.onSubmitData}>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">{this.state.message}</div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Username</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.data.userName}
                    onChange={this.onUserNameChange}
                  />
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Group</label>
                  <select
                    required
                    className="form-control"
                    value={this.state.data.userGroup || ""}
                    onChange={this.onUserGroupChange}
                  >
                    <option value="">เลือก</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">สถานะ</label>
                  <select
                    className="form-control"
                    value={data.userStatus}
                    onChange={this.onUserStatusChange}
                  >
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    ยืนยัน
                  </button>
                  &nbsp; &nbsp;
                  <Link
                    to={`/UserChangePwd/${this.state.data.userId}`}
                    className="btn btn-secondary"
                  >
                    Reset Password
                  </Link>
                  &nbsp; &nbsp;
                  <Link to="/Users" className="btn btn-secondary">
                    ยกเลิก
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserEdit;
