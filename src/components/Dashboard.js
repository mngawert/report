import React, { Component } from "react";
import DashboardItem from "./DashboardItem";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <DashboardItem vasType="USSD" />

        <div className="mt-4"></div>

        <DashboardItem vasType="IVR" />

        <div className="mt-4"></div>

        <DashboardItem vasType="MCN" />
      </React.Fragment>
    );
  }
}

export default Dashboard;
