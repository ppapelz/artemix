"use client";

import React from "react";
import { Form, FormInstance, Input, Select } from "antd";
import ModelSlider from "./slider";

const models = [
  {
    name: "GPT-3.5 Turbo",
    api: "gpt-3.5-turbo",
    description:
      "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003.",
    maxTokens: 4096,
  },
  {
    name: "GPT-3.5 Turbo Long",
    api: "gpt-3.5-turbo-16k",
    description:
      "Same capabilities as the standard gpt-3.5-turbo model but with 4 times the context.",
    maxTokens: 16384,
  },
  {
    name: "GPT-3.5 Turbo function calling",
    api: "gpt-3.5-turbo-0613",
    description:
      "Snapshot of gpt-3.5-turbo from June 13th 2023 with function calling data. Unlike gpt-3.5-turbo, this model will not receive updates, and will be deprecated 3 months after a new version is released.",
    maxTokens: 4096,
  },
  {
    name: "GPT-3.5 Turbo function calling Long",
    api: "gpt-3.5-turbo-16k-0613",
    description:
      "Snapshot of gpt-3.5-turbo-16k from June 13th 2023. Unlike gpt-3.5-turbo-16k, this model will not receive updates, and will be deprecated 3 months after a new version is released.",
    maxTokens: 16384,
  },
  {
    name: "GPT-4",
    api: "gpt-4",
    description:
      "More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration 2 weeks after it is released.",
    maxTokens: 8192,
  },
  {
    name: "GPT-4 function calling",
    api: "gpt-4-0613",
    description:
      "Snapshot of gpt-4 from June 13th 2023 with function calling data. Unlike gpt-4, this model will not receive updates, and will be deprecated 3 months after a new version is released.",
    maxTokens: 8192,
  },
  {
    name: "GPT-4 Long",
    api: "gpt-4-32k",
    description:
      "	Same capabilities as the standard gpt-4 mode but with 4x the context length. Will be updated with our latest model iteration.",
    maxTokens: 32768,
  },
];

interface ModelOptionProps {
  form: FormInstance;
}

const ModelOptions: React.FC<ModelOptionProps> = ({ form }) => {
  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="vertical"
      size="middle"
      style={{ maxWidth: 800 }}
      name="model-options"
    >
      <Form.Item label="AI API" name="api">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="AI Model" name="model" initialValue="gpt-3.5-turbo">
        <Select>
          {models.map((model) => (
            <Select.Option key={model.api} value={model.api}>
              {model.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Temperature" name="temperature">
        <ModelSlider />
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Max length"
          name="maxLength"
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Tokens" />
        </Form.Item>
        <Form.Item
          label="Stop"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
          name="stop"
          initialValue=""
        >
          <Select>
            <Select.Option value="">None</Select.Option>
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Presence penalty"
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          name="presencePenalty"
        >
          <ModelSlider max={2} />
        </Form.Item>
        <Form.Item
          label="Frequency penalty"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
          name="frequencyPenalty"
        >
          <ModelSlider max={2} />
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default ModelOptions;
