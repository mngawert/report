import React, { Component } from "react";
import DataService from "../services/DataService";

class VASMngmtReport extends Component {
  state = {
    destnAddrMap: [],
    query: {
      vasType: this.props.vasType,
      year: new Date().getFullYear().toString(),
      destinationAddress: "",
    },
    result: {
      destinationAddress: "",
      data: [],
    },
  };

  componentDidMount() {
    this.initData();
  }

  initData = async () => {
    const q = { destnAddrType: this.props.vasType, pageSize: 100 };
    let response = await DataService.GetDestnAddrMap(q);
    let data = response.data.data.filter((a) => a.destnAddrStatus === 1);

    this.setState({ destnAddrMap: data });
  };

  fetchGetMngmtReport = async () => {
    const { query } = this.state;

    try {
      let response = await DataService.GetMngmtReport(query);

      let obj = this.state.destnAddrMap.find(
        (a) => a.destnAddrValue === query.destinationAddress
      );

      this.setState({
        result: {
          data: response.data,
          destinationAddress: obj.destnAddrName,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleOnSubmitQuery = (e) => {
    this.fetchGetMngmtReport();
    e.preventDefault();
  };

  handleOnCancelClicked = (e) => {
    this.setState({
      query: {
        vasType: this.props.vasType,
        year: new Date().getFullYear().toString(),
        destinationAddress: "",
      },
    });
  };

  handleOnYearChange = (e) => {
    this.setState({
      query: { ...this.state.query, year: e.target.value },
    });
  };

  handleOnDestinationAddressChange = (e) => {
    this.setState({
      query: { ...this.state.query, destinationAddress: e.target.value },
    });
  };

  render() {
    const { data } = this.state.result;
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            {this.props.vasType} Management Report
          </div>
          <div className="card-body">
            <form onSubmit={this.handleOnSubmitQuery}>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">ปี</label>
                  <input
                    type="number"
                    required={true}
                    className="form-control"
                    value={this.state.query.year}
                    onChange={this.handleOnYearChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">หมายเลขบริการ</label>

                  <select
                    className="form-control"
                    required={true}
                    value={this.state.query.destinationAddress}
                    onChange={this.handleOnDestinationAddressChange}
                  >
                    <option value="" defaultValue>
                      เลือก
                    </option>
                    {this.state.destnAddrMap.map((i) => (
                      <option key={i.destnAddrId} value={i.destnAddrValue}>
                        {i.destnAddrName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    ค้นหา
                  </button>
                  &nbsp; &nbsp;
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.handleOnCancelClicked}
                  >
                    ล้าง
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-4"></div>

        <div className="card">
          <div className="card-body">
            <div id="dvTotalItems">
              ผลการค้นหา '{this.state.result.destinationAddress}'
            </div>
            <table className="table table-sm table-striped" id="tblResults">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Month</th>
                  <th scope="col">Total Count</th>
                  <th scope="col">Success Count</th>
                  <th scope="col">Fail Count</th>
                </tr>
              </thead>
              <tbody>
                {data.map((a, index) => (
                  <tr key={a.id}>
                    <td>{index + 1}</td>
                    <td>{a.month}</td>
                    <td>{a.totalCount}</td>
                    <td>{a.successCount}</td>
                    <td>{a.failCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VASMngmtReport;
