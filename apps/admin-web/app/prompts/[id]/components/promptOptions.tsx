"use client";

import React from "react";
import { Form, Tabs } from "antd";
import type { FormInstance, TabsProps } from "antd";
import ModelOptions from "./modelOptions";

interface PromptOptionsProps {
  modelForm: FormInstance;
}

const PromptOptions: React.FC<PromptOptionsProps> = ({ modelForm }) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Model Options`,
      children: <ModelOptions form={modelForm} />,
    },
    {
      key: "2",
      label: `Variables`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <Tabs
      type="card"
      className="w-full"
      centered
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default PromptOptions;
