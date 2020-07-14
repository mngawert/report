import React, { Component } from "react";

import DataService from "../services/DataService";
import { Link } from "react-router-dom";

class DestnAddrMapEdit extends Component {
  state = {
    data: {
      destnAddrId: null,
      destnAddrName: "",
      destnAddrValue: "",
      destnAddrStatus: null,
      destnAddrType: this.props.destnAddrType,
      createdDate: "",
      createdBy: 0,
      updatedDate: "",
      updatedBy: 0,
    },
    message: "",
  };

  componentDidMount() {
    this.GetDestnAddrMap();
  }

  GetDestnAddrMap = async () => {
    const response = await DataService.GetDestnAddrMapById(
      this.props.match.params.id
    );
    console.log("response", response);

    this.setState({ data: response.data });
  };

  UpdateDestnAddrMap = async () => {
    try {
      const response = await DataService.UpdateDestnAddrMap(this.state.data);
      console.log("response", response);

      this.setState({ message: "Data was updated successfully" });

      this.props.history.push(`/${this.props.destnAddrType}DestnAddrMaps`);
    } catch (error) {
      console.log(error);
    }
  };

  onSubmitData = (e) => {
    this.UpdateDestnAddrMap();

    e.preventDefault();
  };

  onNameChange = (e) => {
    this.setState({
      data: { ...this.state.data, destnAddrName: e.target.value },
    });
  };

  onValueChange = (e) => {
    this.setState({
      data: { ...this.state.data, destnAddrValue: e.target.value },
    });
  };

  onStatusChange = (e) => {
    console.log("onStatusChange", e.target.value);

    this.setState({
      data: { ...this.state.data, destnAddrStatus: parseInt(e.target.value) },
    });
  };

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            {this.props.destnAddrType} Destination Address - Edit
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmitData}>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">{this.state.message}</div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={this.state.data.destnAddrName}
                    onChange={this.onNameChange}
                  />
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Value</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={data.destnAddrValue}
                    onChange={this.onValueChange}
                  />
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">สถานะ</label>
                  <select
                    className="form-control"
                    value={data.destnAddrStatus}
                    onChange={this.onStatusChange}
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
                    to={`/${this.props.destnAddrType}DestnAddrMaps`}
                    className="btn btn-secondary"
                  >
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

export default DestnAddrMapEdit;
