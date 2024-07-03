import "./sideBar.css";
function SideBar({
  sideBarData = [],
  activeComponent = "",
  setViewData = () => {},
  setActiveComponent = () => {},
}) {
  return (
    <div className="side_bar">
      <div className="side_bar__title">BOLTEARTH</div>
      <div className="side_bar__data">
        {sideBarData.map((item) => {
          return (
            <div
              className={
                item === activeComponent
                  ? "active_side_bar__item"
                  : "side_bar__item"
              }
              key={item}
              onClick={() => {
                setViewData({});
                setActiveComponent(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
