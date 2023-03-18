import React, { useContext } from "react";
import DataCard from "./DataCard";
import { CapsuleContext } from "../App";
import pic_5 from "/Users/shreywadmalwar/Downloads/space_x/src/images/pic_5.jpg"

export default function DataLayout() {
  // eslint-disable-next-line

  const { capsuleData} = useContext(CapsuleContext);

  return (
   
      <div className="m-6 p-6 bg-white rounded" style={{background: `url(${pic_5})`}}>
        <div className="flex flex-wrap justify-center">
          {capsuleData &&
            capsuleData.map((data, index) => {
              return <DataCard data={data} />;
            })}
        </div>
      </div>

  );
}
