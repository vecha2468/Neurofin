function Checkbox({
  id = "",
  isChecked = false,
  name = "",
  onChange = () => {},
  onClick = () => {},
}) {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      onClick={(event) => {
        onClick(event);
      }}
      checked={isChecked}
      onChange={(event) => onChange(event)}
    />
  );
}
export default Checkbox;
