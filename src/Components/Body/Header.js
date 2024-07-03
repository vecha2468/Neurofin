import { useState } from "react";

function Header({
  activeTab = "chargers",
  setActiveTab = () => {},
  setViewData = () => {},
  setSearchValue=()=>{}
}) {
  const icons = ["i", "i", "i"];
  const tabs = [
    { label: "Chargers", value: "chargers" },
    { label: "Bookings", value: "bookings" },
  ];

  return (
    <div className="body_header">
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <div
              className={
                tab?.value === activeTab ? "active_tab__label" : "tab__label"
              }
              onClick={() => {
                setActiveTab(tab.value);
                setViewData({});
              }}
              key={tab.value}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="header__right">
        <div className="header__icon">
          {" "}
          {icons.map((icon) => {
            return <div className="icon">{icon}</div>;
          })}{" "}
        </div>
        <div className="header__select"> Charger UID </div>
        <div className="header__input">
          <input 
          placeholder="Search..."
          onChange={(event)=>{setSearchValue(event.target.value)}}
           />
        </div>
      </div>
    </div>
  );
}

export default Header;
