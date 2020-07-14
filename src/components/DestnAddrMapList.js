import React, { Component } from "react";
import DestnAddrMapListCriteria from "./DestnAddrMapListCriteria";
import DestnAddrMapListResult from "./DestnAddrMapListResult";
import DataService from "../services/DataService";

class DestnAddrMapList extends Component {
  state = {
    query: {
      destnAddrName: "",
      destnAddrValue: "",
      destnAddrStatus: null,
      destnAddrType: this.props.destnAddrType,
    },
    result: {
      data: [],
      totalItems: 0,
      totalPages: 0,
      pageIndex: -1,
    },
  };

  componentDidMount() {
    this.GetDestnAddrMap();
  }

  GetDestnAddrMap = async (pageNumber = 1) => {
    const { query } = this.state;
    query.pageNumber = pageNumber;

    try {
      let response = await DataService.GetDestnAddrMap(query);
      console.log("response=", response);
      this.setState({ result: response.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  handleOnDestnAddrNameChange = (e) => {
    this.setState({
      query: { ...this.state.query, destnAddrName: e.target.value },
    });
  };

  handleOnDestnAddrValueChange = (e) => {
    this.setState({
      query: { ...this.state.query, destnAddrValue: e.target.value },
    });
  };

  handleOnStatusChange = (e) => {
    this.setState({
      query: { ...this.state.query, destnAddrStatus: parseInt(e.target.value) },
    });
  };

  handleOnSubmitQuery = (e) => {
    this.GetDestnAddrMap();

    e.preventDefault();
  };

  handleOnCancelClicked = (e) => {
    this.setState({
      query: {
        destnAddrName: "",
        destnAddrValue: "",
        destnAddrStatus: null,
        destnAddrType: this.props.destnAddrType,
      },
    });
  };

  handleOnPageChange = (pageNumber) => {
    console.log("handleOnPageChange: ", pageNumber);
    this.GetDestnAddrMap(pageNumber);
  };

  render() {
    return (
      <React.Fragment>
        <DestnAddrMapListCriteria
          destnAddrType={this.props.destnAddrType}
          query={this.state.query}
          onNameChange={this.handleOnDestnAddrNameChange}
          onValueChange={this.handleOnDestnAddrValueChange}
          onStatusChange={this.handleOnStatusChange}
          onSubmitQuery={this.handleOnSubmitQuery}
          onCancelClicked={this.handleOnCancelClicked}
        />

        <div className="mt-4"></div>

        <DestnAddrMapListResult
          destnAddrType={this.props.destnAddrType}
          data={this.state.result.data}
          totalItems={this.state.result.totalItems}
          pageIndex={this.state.result.pageIndex}
          totalPages={this.state.result.totalPages}
          onPageChange={this.handleOnPageChange}
        />
      </React.Fragment>
    );
  }
}

export default DestnAddrMapList;
