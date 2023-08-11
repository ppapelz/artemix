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
  const [form] = Form.useForm();

  const handleOk = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        setTimeout(() => {
          setLoading(false);
          setModalOpen(false);
          form.resetFields();
          router.push("/prompts/test");
        }, 3000);
      })
      .catch((info) => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    form.resetFields();
    setModalOpen(true);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        className="self-end"
        onClick={openModal}
      >
        Add Prompt
      </Button>

      <Modal
        title="Add Prompt"
        centered
        open={modalOpen}
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
            Create
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
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
