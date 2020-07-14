import React, { Component } from "react";
import DataService from "../services/DataService";
import { Pie } from "react-chartjs-2";

class DashboardItem extends Component {
  state = {
    query: {
      vasType: this.props.vasType,
      year: new Date().getFullYear().toString(),
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
      console.log("response", response);

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

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">Dashboard {this.props.vasType}</div>
          <div className="card-body">
            <div className="containner">
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
                        <th scope="col">Destination Address</th>
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
