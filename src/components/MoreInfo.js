import React, { useState } from "react";
import { Button, Descriptions, Modal } from "antd";

export default function MoreInfo({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={showModal} className="ml-4" style={{borderColor:'black', borderWidth: '2px'}}>
        <b>More</b>
      </Button>
      <Modal
        title={data.capsule_serial}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okType={"default"}
        width={1000}
      >
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Capsule Id">
            {data.capsule_id}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
          <Descriptions.Item label="Original Launch" span={3}>
            {Date(data.original_launch)}
          </Descriptions.Item>
          <Descriptions.Item label="Missions">
            {data.missions.map((item, key) => {
              return (
                <>
                  <div>Name: {item.name}</div>
                  <div>Flight: {item.flight}</div>
                  <br/>
                </>
              );
            })}
          </Descriptions.Item>
          <Descriptions.Item label="Landings">
            {data.landings}
          </Descriptions.Item>
          <Descriptions.Item label="Type">{data.type}</Descriptions.Item>
          <Descriptions.Item label="Details">{data.details}</Descriptions.Item>
          <Descriptions.Item label="Reuse Count">
            {data.reuse_count}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
      </div>
  );
}
