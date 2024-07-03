import { useState } from "react";
import Checkbox from "../Components/Common/Checkbox";
import Pill from "../Components/Common/Pill";
const useData = () => {
  const [checkedData, setCheckedData] = useState([]);
  const sideBarData = [
    "Overview",
    "Chargers",
    "Users",
    "Vendors",
    "KYC",
    "Reports",
    "Admin",
  ];
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
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-01-01",
      lastPing: "2024-07-01 10:00 AM",
      energyDispense: "150 kWh",
    },
    {
      chargerUid: "CU-0002",
      OpterationalStatus: "Maintenance",
      status: "Inactive",
      intializedOn: "2024-02-15",
      lastPing: "2024-07-01 09:00 AM",
      energyDispense: "200 kWh",
    },
    {
      chargerUid: "CU-0003",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-03-10",
      lastPing: "2024-07-01 08:30 AM",
      energyDispense: "180 kWh",
    },
    {
      chargerUid: "CU-0004",
      OpterationalStatus: "Fault",
      status: "Inactive",
      intializedOn: "2024-04-05",
      lastPing: "2024-07-01 07:45 AM",
      energyDispense: "120 kWh",
    },
    {
      chargerUid: "CU-0005",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-05-20",
      lastPing: "2024-07-01 07:15 AM",
      energyDispense: "160 kWh",
    },
    {
      chargerUid: "CU-0006",
      OpterationalStatus: "Maintenance",
      status: "Inactive",
      intializedOn: "2024-06-01",
      lastPing: "2024-07-01 06:50 AM",
      energyDispense: "140 kWh",
    },
    {
      chargerUid: "CU-0007",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-06-10",
      lastPing: "2024-07-01 06:00 AM",
      energyDispense: "130 kWh",
    },
    {
      chargerUid: "CU-0008",
      OpterationalStatus: "Fault",
      status: "Inactive",
      intializedOn: "2024-06-15",
      lastPing: "2024-07-01 05:45 AM",
      energyDispense: "110 kWh",
    },
    {
      chargerUid: "CU-0009",
      OpterationalStatus: "Operational",
      status: "Active",
      intializedOn: "2024-06-25",
      lastPing: "2024-07-01 05:30 AM",
      energyDispense: "170 kWh",
    },
    {
      chargerUid: "CU-0010",
      OpterationalStatus: "Maintenance",
      status: "Inactive",
      intializedOn: "2024-06-30",
      lastPing: "2024-07-01 05:00 AM",
      energyDispense: "90 kWh",
    },
  ];
  const chargerColumnsData = [
    {
      header: (
        <Checkbox
          isChecked={checkedData.length === chargerData.length}
          onChange={() =>
            checkedData.length === chargerData.length
              ? setCheckedData([])
              : setCheckedData(
                  chargerData?.map((data) => {
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

  return { sideBarData, chargerColumnsData, chargerData,viewDataTabs };
};

export default useData;
