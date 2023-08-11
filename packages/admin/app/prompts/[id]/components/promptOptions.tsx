"use client";

import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const PromptOptions = (props: any) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Model Options`,
      children: `Content of Tab Pane 1`,
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
