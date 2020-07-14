import React, { Component } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

class UserListResult extends Component {
  state = {};
  render() {
    const {
      data,
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
                  <th scope="col">User</th>
                  <th scope="col">Group</th>
                  {/* <th scope="col">Created Date</th> */}
                  {/* <th scope="col">Created By</th> */}
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((a) => (
                  <tr key={a.userId}>
                    <td>{a.userName}</td>
                    <td>{a.userGroup}</td>
                    {/* <td width="25%">{a.createdDate}</td> */}
                    {/* <td>{a.createdBy}</td> */}
                    <td>{a.userStatus === 1 ? "Active" : "Inactive"}</td>
                    <td width="15%">
                      <form method="post" asp-action="Delete">
                        <Link
                          to={`/User/` + a.userId}
                          className="btn-circle btn-sm btn-success"
                        >
                          แก้ไข
                        </Link>
                        {/* &nbsp;
                        <button
                          className="btn-circle btn-sm btn-warning"
                          type="button"
                        >
                          ลบ
                        </button> */}
                      </form>
                    </td>
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

export default UserListResult;
