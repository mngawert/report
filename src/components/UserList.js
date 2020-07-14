import React, { Component } from "react";
import UserListCriteria from "./UserListCriteria";
import UserListResult from "./UserListResult";
import DataService from "../services/DataService";

class UserList extends Component {
  state = {
    query: {
      userName: "",
      userGroup: "",
      userStatus: null,
    },
    result: {
      data: [],
      totalItems: 0,
      totalPages: 0,
      pageIndex: -1,
    },
  };

  componentDidMount() {
    this.GetUser();
  }

  GetUser = async (pageNumber = 1) => {
    const { query } = this.state;
    query.pageNumber = pageNumber;

    try {
      let response = await DataService.GetUser(query);
      console.log("response=", response);
      this.setState({ result: response.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  handleOnUserNameChange = (e) => {
    this.setState({
      query: { ...this.state.query, userName: e.target.value },
    });
  };

  handleOnUserGroupChange = (e) => {
    this.setState({
      query: { ...this.state.query, userGroup: e.target.value },
    });
  };

  handleOnUserStatusChange = (e) => {
    this.setState({
      query: { ...this.state.query, userStatus: parseInt(e.target.value) },
    });
  };

  handleOnSubmitQuery = (e) => {
    this.GetUser();

    e.preventDefault();
  };

  handleOnCancelClicked = (e) => {
    this.setState({
      query: {
        userName: "",
        userGroup: "",
        userStatus: null,
      },
    });
  };

  handleOnPageChange = (pageNumber) => {
    console.log("handleOnPageChange: ", pageNumber);
    this.GetUser(pageNumber);
  };

  render() {
    if (this.props.requiredRole !== this.props.loggedUser.userGroup) {
      return (
        <React.Fragment>
          <div className="text-center mt-5">Permission Denied</div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <UserListCriteria
          query={this.state.query}
          onUserNameChange={this.handleOnUserNameChange}
          onUserGroupChange={this.handleOnUserGroupChange}
          onUserStatusChange={this.handleOnUserStatusChange}
          onSubmitQuery={this.handleOnSubmitQuery}
          onCancelClicked={this.handleOnCancelClicked}
        />

        <div className="mt-4"></div>

        <UserListResult
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

export default UserList;
