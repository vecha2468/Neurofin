import { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SortSharpIcon from '@mui/icons-material/SortSharp';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
function Header({
  activeTab = "chargers",
  setActiveTab = () => {},
  setViewData = () => {},
  setFilteredData=()=>{},
  chargerData=[]
}) {
  const [searchValue,setSearchValue]=useState("")
  const [filters,setFilters] =useState({sort:false,
    filtered:false
  })

  const sortData=()=>{
    const sortedData=chargerData.sort((a, b) => {
      const dateA = new Date(a.lastPing);
      const dateB = new Date(b.lastPing);
    
      return dateA - dateB;
    });
    setFilteredData(sortedData)
  }
  const onClick=(type)=>{
     if(type === 'filter'&&!(filters?.filtered))
     {
      setFilteredData((prev)=>prev.filter((item)=>item?.status==="Active"))
      setFilters((prev)=> ({...prev,filtered:true}))
     }
      else if(type === 'sort'&&!(filters?.sort))
      {
        sortData();
        setFilters((prev)=> ({...prev,sort:true}))
      }
      else
      {
        setFilteredData(chargerData)
        setFilters((prev)=> ({...prev,sort:false,filtered:false}))
      }
  }
  const icons = [
    {Component:FileDownloadOutlinedIcon,action:()=>setViewData({})},
    {Component:SortSharpIcon,action:()=>onClick('sort')},
    {Component:FilterAltOutlinedIcon,action:()=>onClick('filter')}];
  const tabs = [
    { label: "Chargers", value: "chargers" },
    { label: "Bookings", value: "bookings" },
  ];

  useEffect(()=>{
    setFilteredData(()=>chargerData.filter((item)=>item?.chargerUid.includes(searchValue)))
  },[searchValue])

  return (
    <div className="body_header">
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <div
              className={
                tab?.value === activeTab ? "active_tab__label" : "tab__label"
              }
              onClick={() => {
                setActiveTab(tab.value);
                setViewData({});
                setFilters((prev)=> ({...prev,sort:false,filtered:false}))
                setSearchValue("")
              }}
              key={tab.value}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="header__right">
        <div className="header__icon">
        {" "}
          {icons.map((Icon,index) => {
            const {Component,action=()=>{}}=Icon||{};
            return (<div 
              style={{cursor:"pointer"}}
              onClick={()=>{action()}}
            key={index}><Component /></div>);
          })}{" "}
        </div>
        <div className="header__select"> Charger UID </div>
        <div className="header__input">
          <input 
          placeholder="Search..."
          onChange={(event)=>{setSearchValue(event.target.value)}}
          value={searchValue}
           />
        </div>
      </div>
    </div>
  );
}

export default Header;
