import { Card, Space } from "antd";
import React from "react";
import MoreInfo from "./MoreInfo";

export default function DataCard({ data }) {
  return (
  
    <Card
      className="w-fit m-3"
      style={{backgroundColor:'#DCF3F5'}}
      // #9DE0E6
      
      title={
        <Space>
          <p style={{color:'black', fontFamily: 'Montserrat'}}><b>Serial :</b></p> <p style={{color:'black', fontFamily: 'Montserrat'}}>{data.capsule_serial}</p>
        </Space>}
        extra={<MoreInfo data={data}/>}>
      <div className="pr-10">
        <Space>
          <p style={{color:'black', fontFamily: 'Montserrat'}}><b>Status :</b></p> <p style={{color:'black', fontFamily: 'Montserrat'}}>{data.status}</p>
        </Space>
        <br />
        <Space>
          <p style={{color:'black', fontFamily: 'Montserrat'}}><b>Type :</b></p> <p style={{color:'black', fontFamily: 'Montserrat'}}>{data.type}</p>
        </Space>
        <br />
        <Space>
          <p style={{color:'black', fontFamily: 'Montserrat'}}><b>Landings :</b></p> <p style={{color:'black', fontFamily: 'Montserrat'}}>{data.landings}</p>
        </Space>
      </div>
    </Card>
  );
}
