import "./header.css";
function Header({ activeComponent = {} }) {
  const icons = ["i", "i", "i", "i", "i"];
  return (
    <div className="header">
      <div className="topbar">
        <div className="topbar__input">
          <input placeholder="Jump to....." />
        </div>
        <div className="topbar__icon">
          {" "}
          {icons.map((icon) => {
            return <div className="icon">{icon}</div>;
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
