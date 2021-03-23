import React from "react";
import { Tabs } from "antd";
import DonationHistory from "./donation-history";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function UserHistory() {
  return (
    <div className="2">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Donations" key="1">
          <DonationHistory />
        </TabPane>
        <TabPane tab="Requests" key="2">
          <DonationHistory />
        </TabPane>
      </Tabs>
    </div>
  );
}
