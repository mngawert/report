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
      pageSize,
      totalPages,
      onPageChange,
      onPageSizeChange,
    } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <div id="dvTotalItems" className="row">
              <div className="col-8">
                ผลการค้นหา {Number(totalItems).toLocaleString()} รายการ
              </div>

              <div className="col-4 text-right">
                <label htmlFor="inputCity">
                  แสดงหน้าละ &nbsp;
                  <select value={pageSize || ""} onChange={onPageSizeChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                  &nbsp; รายการ
                </label>
              </div>
            </div>

            <div className="mt-1"></div>

            <table className="table table-sm table-striped" id="tblResults">
              <thead>
                <tr>
                  <th scope="col">Date and Time</th>
                  <th scope="col">Caller MO</th>
                  <th scope="col">Short Code</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((a, idx) => (
                  <tr key={a.transactionId + "_" + idx}>
                    <td>{a.deliveryTimeText}</td>
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
              pageSize={pageSize}
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
