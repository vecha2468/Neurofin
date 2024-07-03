import { useState } from "react";
import Checkbox from "../Components/Common/Checkbox";
import Pill from "../Components/Common/Pill";
const useData = () => {
  const [checkedData, setCheckedData] = useState([]);
  const viewDataTabs = [
    { label: "Information", value: "information" },
    { label: "Bookings", value: "bookings" },
    { label: "Stats", value: "stats" },
    { label: "Map View", value: "mapview" },
    { label: "suppport Logs", value: "supportLogs" },
  ];
  const pillDataColours = {
    Active: {
      color: "#008000",
      backgroundColor: "#0080003f",
    },
    Inactive: {
      backgroundColor: "#ff000029",
      color: "#ff0000",
    },
  };
  const chargerData = [
    {
      chargerUid: "CU-0001",
      chargerName: "Charger One",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-01-01",
      lastPing: "2024-07-01 10:00 AM",
      energyDispense: "150 kWh",
      personName: "John Doe",
      personPhoneNumber: "+1234567890",
      personAlternatePhoneNumber: "+0987654321",
    },
    {
      chargerUid: "CU-0002",
      chargerName: "Charger Two",
      OpterationalStatus: "Maintenance",
      status: "Inactive",
      intializedOn: "2024-02-15",
      lastPing: "2024-07-01 09:00 AM",
      energyDispense: "200 kWh",
      personName: "Jane Smith",
      personPhoneNumber: "+1234567891",
      personAlternatePhoneNumber: "+0987654322",
    },
    {
      chargerUid: "CU-0003",
      chargerName: "Charger Three",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-03-10",
      lastPing: "2024-07-01 08:30 AM",
      energyDispense: "180 kWh",
      personName: "Alice Johnson",
      personPhoneNumber: "+1234567892",
      personAlternatePhoneNumber: "+0987654323",
    },
    {
      chargerUid: "CU-0004",
      chargerName: "Charger Four",
      OpterationalStatus: "Fault",
      status: "Inactive",
      intializedOn: "2024-04-05",
      lastPing: "2024-07-01 07:45 AM",
      energyDispense: "120 kWh",
      personName: "Bob Brown",
      personPhoneNumber: "+1234567893",
      personAlternatePhoneNumber: "+0987654324",
    },
    {
      chargerUid: "CU-0005",
      chargerName: "Charger Five",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-05-20",
      lastPing: "2024-07-01 07:15 AM",
      energyDispense: "160 kWh",
      personName: "Charlie Davis",
      personPhoneNumber: "+1234567894",
      personAlternatePhoneNumber: "+0987654325",
    },
    {
      chargerUid: "CU-0006",
      chargerName: "Charger Six",
      OpterationalStatus: "Maintenance",
      status: "Inactive",
      intializedOn: "2024-06-01",
      lastPing: "2024-07-01 06:50 AM",
      energyDispense: "140 kWh",
      personName: "Diana Evans",
      personPhoneNumber: "+1234567895",
      personAlternatePhoneNumber: "+0987654326",
    },
    {
      chargerUid: "CU-0007",
      chargerName: "Charger Seven",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-06-10",
      lastPing: "2024-07-01 06:00 AM",
      energyDispense: "130 kWh",
      personName: "Ethan Ford",
      personPhoneNumber: "+1234567896",
      personAlternatePhoneNumber: "+0987654327",
    },
    {
      chargerUid: "CU-0008",
      chargerName: "Charger Eight",
      OpterationalStatus: "Fault",
      status: "Inactive",
      intializedOn: "2024-06-15",
      lastPing: "2024-07-01 05:45 AM",
      energyDispense: "110 kWh",
      personName: "Fiona Green",
      personPhoneNumber: "+1234567897",
      personAlternatePhoneNumber: "+0987654328",
    },
    {
      chargerUid: "CU-0009",
      chargerName: "Charger Nine",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-06-25",
      lastPing: "2024-07-01 05:30 AM",
      energyDispense: "170 kWh",
      personName: "George Harris",
      personPhoneNumber: "+1234567898",
      personAlternatePhoneNumber: "+0987654329",
    },
    {
      chargerUid: "CU-0010",
      chargerName: "Charger Ten",
      OpterationalStatus: "Maintenance",
      status: "Inactive",
      intializedOn: "2024-06-30",
      lastPing: "2024-07-01 05:00 AM",
      energyDispense: "90 kWh",
      personName: "Hannah White",
      personPhoneNumber: "+1234567899",
      personAlternatePhoneNumber: "+0987654330",
    },
  ];
  
  
  const [filteredData,setFilteredData]=useState(chargerData)
  const isChecked=checkedData.length!==0&&filteredData.every((item)=>checkedData.some((id)=>item?.chargerUid===id))
  const chargerColumnsData = [
    {
      header: (
        <Checkbox
          isChecked={isChecked}
          onChange={() =>
            isChecked
              ? setCheckedData([])
              : setCheckedData(
                  filteredData?.map((data) => {
                    return data?.chargerUid;
                  })
                )
          }
        />
      ),
      accessor: (row) => {
        return (
          <Checkbox
            isChecked={checkedData.includes(row?.chargerUid)}
            onClick={(event) => event.stopPropagation()}
            onChange={() =>
              checkedData.includes(row?.chargerUid)
                ? setCheckedData((prev) =>
                    prev.filter((item) => item !== row?.chargerUid)
                  )
                : setCheckedData((prev) => [...prev, row?.chargerUid])
            }
          />
        );
      },
    },
    {
      header: "Charger UID",
      accessor: (row) => {
        return row?.chargerUid;
      },
    },
    { header: "Opterational STATUS", accessor: "OpterationalStatus" },
    {
      header: "STATUS",
      accessor: (row) => {
        return (
          <Pill
            item={row?.status}
            color={pillDataColours[row?.status]?.color}
            backgroundColor={pillDataColours[row?.status]?.backgroundColor}
          />
        );
      },
    },
    { header: "INTALIZED ON ", accessor: "intializedOn" },
    { header: "LAST PING", accessor: "lastPing" },
    { header: "ENERGY DISPENSE", accessor: "energyDispense" },
  ];

  return {  chargerColumnsData, chargerData,viewDataTabs,filteredData,setFilteredData };
};

export default useData;
