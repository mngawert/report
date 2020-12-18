import React, { Component } from "react";
import DataService from "../services/DataService";
import { Pie } from "react-chartjs-2";

class DashboardItem extends Component {
  state = {
    query: {
      vasType: this.props.vasType,
      year: new Date().getFullYear().toString(),
      month: "",
      messageStatus: this.props.messageStatus,
    },

    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#66d9ff",
            "#ff66ff",
            "#ffb366",
            "#ff8c66",
            "#66ffff",
            "#d966ff",
            "#ff66b3",
            "#8cff66",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#66d9ff",
            "#ff66ff",
            "#ffb366",
            "#ff8c66",
            "#66ffff",
            "#d966ff",
            "#ff66b3",
            "#8cff66",
          ],
        },
      ],
    },

    rawData: [],
  };

  componentDidMount() {
    this.GetUSSDDashboardReport1();
  }

  GetUSSDDashboardReport1 = async () => {
    const { query } = this.state;

    try {
      let response = await DataService.GetDashboardReport1(query);
      //console.log("response", response);

      this.setState({
        data: {
          labels: response.data.map((a) => a.destinationAddress),
          datasets: [
            {
              data: response.data.map((a) => a.totalCount),
            },
          ],
        },
        rawData: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleOnYearChange = (e) => {
    this.setState(
      {
        query: { ...this.state.query, year: e.target.value },
      },
      () => {
        this.GetUSSDDashboardReport1();
      }
    );
  };

  handleOnMonthChange = (e) => {
    this.setState(
      {
        query: { ...this.state.query, month: e.target.value },
      },
      () => {
        this.GetUSSDDashboardReport1();
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            Dashboard - {this.props.vasType} {this.props.messageStatus}
          </div>
          <div className="card-body">
            <div className="containner">
              <div className="row mb-2">
                <div className="col-8"></div>
                <div className="col-4">
                  <div className="row align-items-center">
                    <div className="col-7">
                      <select
                        onChange={this.handleOnMonthChange}
                        className="form-control"
                      >
                        <option value="">ทุกเดือน</option>
                        <option value="01">มกราคม </option>
                        <option value="02">กุมภาพันธ์ </option>
                        <option value="03">มีนาคม </option>
                        <option value="04">เมษายน </option>
                        <option value="05">พฤษภาคม </option>
                        <option value="06">มิถุนายน </option>
                        <option value="07">กรกฎาคม </option>
                        <option value="08">สิงหาคม </option>
                        <option value="09">กันยายน </option>
                        <option value="10">ตุลาคม </option>
                        <option value="11">พฤศจิกายน </option>
                        <option value="12">ธันวาคม </option>
                      </select>
                    </div>
                    <div className="col-1">ปี</div>

                    <div className="col-4">
                      <input
                        className="form-control"
                        type="number"
                        required={true}
                        value={this.state.query.year}
                        onChange={this.handleOnYearChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <Pie data={this.state.data} />
                </div>
                <div className="col">
                  <table
                    className="table table-sm table-striped"
                    id="tblResults"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Short Code</th>
                        <th scope="col">Total Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.rawData.map((a, index) => (
                        <tr key={a.destinationAddress}>
                          <td>{a.destinationAddress}</td>
                          <td>{a.totalCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardItem;
