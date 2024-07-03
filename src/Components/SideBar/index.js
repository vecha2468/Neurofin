import "./sideBar.css";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AppsIcon from '@mui/icons-material/Apps';
import PowerIcon from '@mui/icons-material/Power';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GradingIcon from '@mui/icons-material/Grading';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
function SideBar({
  activeComponent = "",
  setViewData = () => {},
  setActiveComponent = () => {},
}) {
  const sideBarData = [
    {value: "Overview",Icon:AppsIcon },
   {value: "Chargers",Icon:PowerIcon},
   { value:"Users",Icon:PeopleOutlineIcon},
   {value: "Vendors",Icon:PersonIcon},
   {value: "KYC",Icon:GradingIcon},
    {value:  "Reports",Icon:AssessmentIcon},
    {value: "Admin",Icon:AdminPanelSettingsIcon},
  ];
  return (
    <div className="side_bar">
      <div className="side_bar__title">
        <OfflineBoltIcon />
        <div>BOLTEARTH</div> 
      </div>
      <div className="side_bar__data">
        {sideBarData.map((item) => {
          const {Icon}=item;
          return (
            <div
              className={
                item?.value === activeComponent
                  ? "active_side_bar__item"
                  : "side_bar__item"
              }
              key={item?.value}
              onClick={() => {
                setViewData({});
                setActiveComponent(item?.value);
              }}
            >
              <Icon/>
              <div> {item?.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
