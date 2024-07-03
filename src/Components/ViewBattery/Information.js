function Information({ item = {}, title = "Charger Info" }) {
  const headers = [
    { header: "UID", accessor: "chargerUid" },
    { header: "Name", accessor: "name" },
    { header: "INTALIZED ON ", accessor: "intializedOn" },
    { header: "LAST PING", accessor: "lastPing" },
  ];

  return (
    <div>
      <div className="information__title"> {title}</div>
      <div className="information__info">
        {" "}
        {headers?.map((header) => {
          return (
            <div className="information__data">
              <div> {header.header}</div>
              <div className="information__accesor">
                {item[header?.accessor] || "-"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Information;
