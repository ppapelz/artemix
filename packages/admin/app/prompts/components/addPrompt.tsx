"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddPrompt = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        className="self-end"
        onClick={() => setModalOpen(true)}
      >
        Add Prompt
      </Button>

      <Modal
        title="20px to Top"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default AddPrompt;
