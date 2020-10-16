import React, { Component } from "react";
import VASReportCriteria from "./VASReportCriteria";
import VASReportResult from "./VASReportResult";
import DataService from "../services/DataService";

class VASReport extends Component {
  state = {
    query: {
      vasType: this.props.vasType,
      originationAddress: "",
      destinationAddress: "",
      startDate: "",
      endDate: "",
      messageStatus: null,
      messageType:
        this.props.vasType === "USSD" && this.props.mode === "Normal"
          ? 1
          : null,
      pageSize: 20,
    },
    result: {
      data: [],
      totalItems: 0,
      totalPages: 0,
      pageIndex: -1,
    },
    destnAddrMap: [],
  };

  // static defaultProps = {
  //   mode: "Normal",
  //   vasType: "USSD",
  // };

  componentDidMount() {
    this.initData();
    this.fetchGetReport();
  }

  initData = async () => {
    const q = { destnAddrType: this.props.vasType, pageSize: 100 };
    let response = await DataService.GetDestnAddrMap(q);
    this.setState({
      destnAddrMap: response.data.data.filter((a) => a.destnAddrStatus === 1),
    });
  };

  fetchGetReport = async (pageNumber = 1) => {
    const { query } = this.state;
    query.pageNumber = pageNumber;

    try {
      let response = await DataService.GetReport(query);
      this.setState({ result: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleOriginationAddressChange = (e) => {
    console.log("handleOriginationAddressChange", e.target.value);
    this.setState({
      query: { ...this.state.query, originationAddress: e.target.value },
    });
  };

  handleOnDestinationAddressChange = (e) => {
    console.log("handleOnDestinationAddressChange", e.target.value);

    this.setState({
      query: { ...this.state.query, destinationAddress: e.target.value },
    });
  };

  handleOnStartDateChange = (e) => {
    console.log("handleOnStartDateChange", e.target.value);

    this.setState({
      query: { ...this.state.query, startDate: e.target.value },
    });
  };

  handleOnEndDateChange = (e) => {
    console.log("handleOnEndDateChange", e.target.value);

    this.setState({
      query: { ...this.state.query, endDate: e.target.value },
    });
  };

  handleOnMessageStatusChange = (e) => {
    console.log("handleOnMessageStatusChange", e.target.value);

    this.setState({
      query: { ...this.state.query, messageStatus: parseInt(e.target.value) },
    });
  };

  handleOnMessageTypeChange = (e) => {
    console.log("handleOnMessageTypeChange", e.target.value);

    this.setState({
      query: { ...this.state.query, messageType: parseInt(e.target.value) },
    });
  };

  handleOnPageSizeChange = (e) => {
    console.log("handleOnPageSizeChange", e.target.value);

    this.setState(
      {
        query: { ...this.state.query, pageSize: parseInt(e.target.value) },
      },
      () => {
        this.fetchGetReport();
      }
    );
  };

  handleOnSubmitQuery = (e) => {
    this.fetchGetReport();
    e.preventDefault();
  };

  handleOnCancelClicked = (e) => {
    this.setState({
      query: {
        vasType: this.props.vasType,
        originationAddress: "",
        destinationAddress: "",
        startDate: "",
        endDate: "",
        messageStatus: null,
      },
    });
  };

  handleOnPageChange = (pageNumber) => {
    console.log("handleOnPageChange: ", pageNumber);
    this.fetchGetReport(pageNumber);
  };

  render() {
    return (
      <React.Fragment>
        <VASReportCriteria
          query={this.state.query}
          destnAddrMap={this.state.destnAddrMap}
          onOriginationAddressChange={this.handleOriginationAddressChange}
          onDestinationAddressChange={this.handleOnDestinationAddressChange}
          onStartDateChange={this.handleOnStartDateChange}
          onEndDateChange={this.handleOnEndDateChange}
          onMessageStatusChange={this.handleOnMessageStatusChange}
          onMessageTypeChange={this.handleOnMessageTypeChange}
          onSubmitQuery={this.handleOnSubmitQuery}
          onCancelClicked={this.handleOnCancelClicked}
          mode={this.props.mode}
          vasType={this.props.vasType}
        />

        <div className="mt-4"></div>

        <VASReportResult
          data={this.state.result.data}
          destnAddrMap={this.state.destnAddrMap}
          totalItems={this.state.result.totalItems}
          pageIndex={this.state.result.pageIndex}
          pageSize={this.state.query.pageSize}
          totalPages={this.state.result.totalPages}
          onPageChange={this.handleOnPageChange}
          onPageSizeChange={this.handleOnPageSizeChange}
        />
      </React.Fragment>
    );
  }
}

export default VASReport;
