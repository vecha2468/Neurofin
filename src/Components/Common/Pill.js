import "./styles.css";
function Pill({ item = "", color = "", backgroundColor = "" }) {
  return (
    <div
      style={{
        color: color,
        border: `1px solid${color} `,
        backgroundColor: backgroundColor,
      }}
      className="pill"
    >
      {" "}
      {item}
    </div>
  );
}
export default Pill;
