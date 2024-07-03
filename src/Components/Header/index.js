import "./header.css";
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
function Header({ activeComponent = {} }) {
  const icons = [AppsSharpIcon , CodeSharpIcon,  AccountCircleTwoToneIcon, NotificationsNoneTwoToneIcon];
  return (
    <div className="header">
      <div className="topbar">
        <div className="topbar__input">
          <input placeholder="Jump to....." />
        </div>
        <div className="topbar__icon">
          {" "}
          {icons.map((Icon) => {
            return <div style={{cursor:"pointer"}} ><Icon/></div>;
          })}{" "}
        </div>
      </div>
      <div className="footer">
        <div className="footer__title"> {activeComponent}</div>
        <div className="footer__add">+ Add {activeComponent}</div>
      </div>
    </div>
  );
}

export default Header;
