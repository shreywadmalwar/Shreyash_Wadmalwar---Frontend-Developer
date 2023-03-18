import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Navbars from "./components/Navbars";
import DataLayout from "./components/DataLayout";
import SearchBar from "./components/SearchBar";
import Carousels from "./carousel";

export const CapsuleContext = createContext();

function App() {
  const [capsuleData, setCapsuleData] = useState([]);
  const value = { capsuleData, setCapsuleData };

  const getData = async () => {
    const data = await axios.get("https://api.spacexdata.com/v3/capsules");
    setCapsuleData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "#DCF3F5" }}>
      <CapsuleContext.Provider value={value}>
        <Navbars />
        <Carousels />
        <SearchBar />
        <DataLayout />
      </CapsuleContext.Provider>
    </div>
  );
}

export default App;
