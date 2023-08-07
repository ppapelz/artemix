"use client";

import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type FieldType = {
  name?: string;
  description?: string;
};

const { TextArea } = Input;

const AddPrompt = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);
      //router.push("/prompts/test");
    }, 3000);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

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
        title="Add Prompt"
        centered
        open={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          id="add-prompt-form"
        >
          <Form.Item<FieldType>
            label="Prompt Name"
            name="name"
            rules={[{ required: true, message: "Please input prompt name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input prompt description!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddPrompt;
