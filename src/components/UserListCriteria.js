import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserListCriteria extends Component {
  state = {};
  render() {
    const {
      query,
      onUserNameChange,
      onUserGroupChange,
      onUserStatusChange,
      onSubmitQuery,
      onCancelClicked,
    } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">User Management</div>
          <div className="card-body">
            <form onSubmit={onSubmitQuery}>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">User</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    value={query.userName}
                    onChange={onUserNameChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Group</label>
                  <select
                    className="form-control"
                    value={query.userGroup || ""}
                    onChange={onUserGroupChange}
                  >
                    <option value="">ทั้งหมด</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">Status</label>
                  <select
                    className="form-control"
                    value={query.userStatus || ""}
                    onChange={onUserStatusChange}
                  >
                    <option value="">ทั้งหมด</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                </div>
                <div className="form-group col-md-4"></div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    ค้นหา
                  </button>
                  &nbsp; &nbsp;
                  <button
                    type="button"
                    onClick={onCancelClicked}
                    className="btn btn-secondary"
                  >
                    ล้าง
                  </button>
                  &nbsp; &nbsp;
                  <Link to={"UserAdd"} className="btn btn-success">
                    สร้างใหม่
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

export default UserListCriteria;
