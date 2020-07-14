import React, { Component } from "react";
import Pagination from "./Pagination";

class VASReportResult extends Component {
  state = {};

  findAddrName(list, value) {
    let q = list.find((b) => b.destnAddrValue === value);

    if (q !== undefined) return q.destnAddrName;

    return "N/A";
  }

  render() {
    console.log("propsQQQ:", this.props);

    const {
      data,
      destnAddrMap,
      totalItems,
      pageIndex,
      totalPages,
      onPageChange,
    } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <div id="dvTotalItems">
              ผลการค้นหา {Number(totalItems).toLocaleString()} รายการ
            </div>
            <table className="table table-sm table-striped" id="tblResults">
              <thead>
                <tr>
                  <th scope="col">Date and Time</th>
                  <th scope="col">Caller MO</th>
                  <th scope="col">Destination Number</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((a) => (
                  <tr key={a.transactionId}>
                    <td>{a.deliveryTime}</td>
                    <td>{a.originationAddress}</td>
                    <td>{a.destinationAddress}</td>
                    <td>
                      {this.findAddrName(destnAddrMap, a.destinationAddress)}
                    </td>
                    <td>{a.messageStatus === 1 ? "Success" : "Fail"}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination
              totalItems={totalItems}
              activePage={pageIndex}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VASReportResult;
