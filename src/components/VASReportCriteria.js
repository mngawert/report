import React, { Component } from "react";

class VASReportCriteria extends Component {
  render() {
    const {
      query,
      onOriginationAddressChange,
      onDestinationAddressChange,
      onStartDateChange,
      onEndDateChange,
      onMessageStatusChange,
      onSubmitQuery,
      onCancelClicked,
    } = this.props;

    const { destnAddrMap } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">
            รายงาน Log การใช้งาน {this.props.vasType}
          </div>
          <div className="card-body">
            <form onSubmit={onSubmitQuery}>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">หมายเลข</label>
                  <input
                    type="text"
                    className="form-control"
                    name="OriginationAddress"
                    value={query.originationAddress}
                    onChange={onOriginationAddressChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">หมายเลขบริการ</label>

                  {this.props.mode === "Normal" ? (
                    <select
                      className="form-control"
                      value={query.destinationAddress}
                      onChange={onDestinationAddressChange}
                    >
                      <option value="" defaultValue>
                        ทั้งหมด
                      </option>
                      {destnAddrMap.map((i) => (
                        <option key={i.destnAddrId} value={i.destnAddrValue}>
                          {i.destnAddrName}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      name="OriginationAddress"
                      value={query.destinationAddress}
                      onChange={onDestinationAddressChange}
                    />
                  )}
                </div>
              </div>
              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">วันที่เริ่มต้น</label>
                  <input
                    className="form-control"
                    type="date"
                    value={query.startDate}
                    onChange={onStartDateChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">วันที่สิ้นสุด</label>
                  <input
                    className="form-control"
                    type="date"
                    value={query.endDate}
                    onChange={onEndDateChange}
                  />
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">สถานะ</label>
                  <select
                    value={query.messageStatus || ""}
                    onChange={onMessageStatusChange}
                    className="form-control"
                  >
                    <option value="">ทั้งหมด</option>
                    <option value="1">Success</option>
                    <option value="2">Fail</option>
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
                    className="btn btn-secondary"
                    onClick={onCancelClicked}
                  >
                    ล้าง
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VASReportCriteria;
