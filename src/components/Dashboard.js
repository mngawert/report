import React, { Component } from "react";
import DashboardItem from "./DashboardItem";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardItem vasType="USSD" messageStatus="Success" />

        <div className="mt-4"></div>

        <DashboardItem vasType="USSD" messageStatus="Fail" />

        <div className="mt-4"></div>

        <DashboardItem vasType="IVR" messageStatus="Success" />

        <div className="mt-4"></div>

        <DashboardItem vasType="IVR" messageStatus="Fail" />

        <div className="mt-4"></div>

        <DashboardItem vasType="MCN" messageStatus="Success" />

        <div className="mt-4"></div>

        <DashboardItem vasType="MCN" messageStatus="Fail" />

        <div className="mt-4"></div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
