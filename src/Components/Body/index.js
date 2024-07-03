import "./body.css";
import useData from "../../Data/useData";
import Table from "../Common/Table";
import Header from "./Header";
import Empty from "../Common/Empty";
import { useState } from "react";
function Body({
  activeComponent = "chargers",
  setViewData = () => {},
  viewData = {},
}) {
  const onRowClick = (row) => {
    setViewData(row);
  };
  const {
    chargerColumnsData = [],
    chargerData = [],
    filteredData=[],
    setFilteredData=()=>{},
  } = useData();
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
            setFilteredData={setFilteredData}
            chargerData={chargerData}
          />
          {activeTab === "chargers" ? (
            <Table
              columns={chargerColumnsData}
              data={filteredData}
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
