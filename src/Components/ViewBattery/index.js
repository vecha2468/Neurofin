import { useState } from "react";
import "./viewBattery.css";
import Empty from "../Common/Empty";
import Information from "./Information";
function ViewBattery({ item = {}, setViewData = () => {} }) {
  const [activeTab, setActiveTab] = useState("information");
  const tabs = [
    { label: "Information", value: "information" },
    { label: "Bookings", value: "bookings" },
    { label: "Stats", value: "stats" },
    { label: "Map View", value: "mapview" },
    { label: "suppport Logs", value: "supportLogs" },
  ];
  const icons = ["i", "i", "i", "i", "i"];
  const { chargerUid = "CU-0001" } = item || {};
  return (
    <div className="viewBattery">
      <div className="viewBattery__topbar">
        <div className="topbar__label"> {chargerUid}</div>
        <div className="topbar__icon">
          {" "}
          {icons.map((icon) => {
            return <div className="icon">{icon}</div>;
          })}{" "}
          <div onClick={() => setViewData({})}>{"X"}</div>
        </div>
      </div>
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <div
              style={{ fontSize: "15px" }}
              key={tab?.value}
              onClick={() => setActiveTab(tab?.value)}
              className={
                tab?.value === activeTab ? "active_tab__label" : "tab__label"
              }
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      {activeTab === "information" ? (
        <div>
          <Information title={"Charger info"} item={item} />
          <Information title={"Owner info"} item={item} />
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
export default ViewBattery;
