import { Button, Space } from "antd";
import Search from "antd/es/input/Search";
import React, { useContext, useEffect, useState } from "react";
import { CapsuleContext } from "../App";

export default function SearchBar() {
  const { capsuleData, setCapsuleData } = useContext(CapsuleContext);
  const [ogCapsuleData, setogCapsuleData] = useState(capsuleData);

  const onSearch = (value, query) => {
    if (query === "status") {
      const data = capsuleData.filter((item) => item.status.includes(value));
      setCapsuleData(data);
    }
    if (query === "type") {
      const data = capsuleData.filter((item) => item.type.includes(value));
      setCapsuleData(data);
    }
    if (query === "landings") {
      // eslint-disable-next-line
      const data = capsuleData.filter((item) => item.landings == value);
      setCapsuleData(data);
    }
  };

  const handleClear = () => {
    setCapsuleData(ogCapsuleData);
  };

  useEffect(() => {
    if (ogCapsuleData.length === 0 && capsuleData.length > 0) {
      setogCapsuleData(capsuleData);
      console.log("done");
    }
    // eslint-disable-next-line
  }, [capsuleData]);
  return (
    <div className="container-fluid" style={{backgroundColor:'#DCF3F5'}}>
    <div className="m-6 p-6 rounded-lg flex justify-center" style={{backgroundColor:'#152d36'}}>
      <Space className="flex md:flex-row flex-col">
        <Search
          className="w-64 rounded-lg"
          placeholder="Search by Status"
          allowClear
          style={{ backgroundColor: "#E6F7FF" }}
          onSearch={(value) => {
            onSearch(value, "status");
          }}
        />
        <Search
          className="w-64 rounded-lg"
          placeholder="Search by Type"
          allowClear
          style={{ backgroundColor: "#E6F7FF" }}
          onSearch={(value) => {
            onSearch(value, "type");
          }}
        />
        <Search
          className="w-64 rounded-lg"
          placeholder="Search by Landings"
          allowClear
          style={{ backgroundColor: "#E6F7FF" }}
          onSearch={(value) => {
            onSearch(value, "landings");
          }}
        />
        <Button onClick={handleClear} style={{ backgroundColor: "#E6F7FF" }}>Reset</Button>
      </Space>
    </div>
    </div>
  );
}
