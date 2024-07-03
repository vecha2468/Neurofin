import "./body.css";
import Table from "../Common/Table";
import Header from "./Header";
import Empty from "../Common/Empty";
import { useState } from "react";
function Body({
  chargerColumnsData = [],
  activeComponent = "chargers",
  chargerData = [],
  setViewData = () => {},
  viewData = {},
}) {
  const onRowClick = (row) => {
    setViewData(row);
  };
  const [activeTab, setActiveTab] = useState("chargers");
  return (
    <div
      className={
        Object.keys(viewData).length !== 0
          ? "body_view_container"
          : "body_container"
      }
    >
      {activeComponent === "Chargers" ? (
        <div className="body">
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setViewData={setViewData}
          />
          {/* <div className="table_container"> */}
          {activeTab === "chargers" ? (
            <Table
              columns={chargerColumnsData}
              data={chargerData}
              onRowClick={onRowClick}
            />
          ) : (
            <Empty />
          )}
          {/* </div> */}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Body;
