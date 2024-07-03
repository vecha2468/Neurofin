function Information({ item = {}, title = "Charger Info" }) {
  const headers ={
     "Charger Info": [
    { header: "UID", accessor: "chargerUid" },
    { header: "Name", accessor: "chargerName" },
    { header: "Intialized On ", accessor: "intializedOn" },
    { header: "Last Ping", accessor: "lastPing" },
  ],
  "Owner Info":[
    { header: "Name", accessor: "personName" },
    { header: "Phone Number", accessor: "personPhoneNumber" },
    { header: "Alternate Phone Number 1 ", accessor: "personAlternatePhoneNumber" },
    { header: "Alternate Phone Number 2", accessor: "phoneNumber2" },
  ]};

  return (
    <div>
      <div className="information__title"> {title}</div>
      <div className="information__info">
        {" "}
        {headers[title]?.map((header) => {
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
