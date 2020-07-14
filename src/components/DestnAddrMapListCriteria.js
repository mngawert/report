import React, { Component } from "react";
import { Link } from "react-router-dom";

class DestnAddrMapListCriteria extends Component {
  state = {};
  render() {
    const {
      query,
      onNameChange,
      onValueChange,
      onStatusChange,
      onSubmitQuery,
      onCancelClicked,
    } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            {this.props.destnAddrType} Destination Address Setting
          </div>
          <div className="card-body">
            <form onSubmit={onSubmitQuery}>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    value={query.destnAddrName}
                    onChange={onNameChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Value</label>
                  <input
                    type="text"
                    className="form-control"
                    name="value"
                    value={query.destnAddrValue}
                    onChange={onValueChange}
                  />
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">Status</label>
                  <select
                    className="form-control"
                    value={query.destnAddrStatus || ""}
                    onChange={onStatusChange}
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
                  <Link
                    to={`/${this.props.destnAddrType}DestnAddrMapAdd`}
                    className="btn btn-success"
                  >
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

export default DestnAddrMapListCriteria;
