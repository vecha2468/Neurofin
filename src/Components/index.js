import SideBar from "./SideBar";
import Header from "./Header";
import Body from "./Body";
import useData from "../Data/useData";
import "./component.css";
import ViewBattery from "./ViewBattery";
import { useState } from "react";
function Components() {
  const {
    viewDataTabs=[],
  } = useData();
  const [viewData, setViewData] = useState({});
  const [activeComponent, setActiveComponent] = useState("Chargers");
  return (
    <div className="Component">
      <div className="component__sidebar">
        <SideBar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          setViewData={setViewData}
        />
      </div>
      <div className="active_component">
        <Header activeComponent={activeComponent} />
        <div className="active_body_component">
          <Body
            activeComponent={activeComponent}
            setViewData={setViewData}
            viewData={viewData}
          />
          {Object.keys(viewData).length !== 0 ? (
            <div className="view_component">
              <ViewBattery item={viewData} setViewData={setViewData} viewDataTabs={viewDataTabs} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Components;
