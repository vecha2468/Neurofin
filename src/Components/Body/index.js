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
  const [searchValue,setSearchValue]=useState("")
  const FilteredData=chargerData.filter((item)=>item?.chargerUid.includes(searchValue))
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
            setSearchValue={setSearchValue}
          />
          {activeTab === "chargers" ? (
            <Table
              columns={chargerColumnsData}
              data={FilteredData}
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
