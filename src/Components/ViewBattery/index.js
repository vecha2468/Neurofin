import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import AlignHorizontalLeftTwoToneIcon from '@mui/icons-material/AlignHorizontalLeftTwoTone';

import "./viewBattery.css";
import Empty from "../Common/Empty";
import Information from "./Information";
function ViewBattery({ item = {}, setViewData = () => {},viewDataTabs=[] }) {
  const [activeTab, setActiveTab] = useState("information");
  const icons = [
    {Component:VisibilityIcon },
    {Component:EmojiFlagsIcon},
    {Component:AlignHorizontalLeftTwoToneIcon} ,
    {Component:CloseIcon,action:()=>setViewData({})}];
  const { chargerUid = "CU-0001" } = item || {};
  return (
    <div className="viewBattery">
      <div className="viewBattery__topbar">
        <div className="topbar__label"> {chargerUid}</div>
        <div className="topbar__icon">
          {" "}
          {icons.map((Icon,index) => {
            const {Component,action=()=>{}}=Icon||{};
            return (<div 
              style={{cursor:"pointer"}}
              onClick={()=>{action()}}
            key={index}><Component /></div>);
          })}{" "}
        </div>
      </div>
      <div className="tabs">
        {viewDataTabs.map((tab) => {
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
          <Information title={"Charger Info"} item={item} />
          <Information title={"Owner Info"} item={item} />
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
export default ViewBattery;
