"use client";

import { Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PromptOptions from "./components/promptOptions";

const PromptsDetailPage = ({ params }: { params: { id: string } }) => {
  const { TextArea } = Input;
  const [modelForm] = Form.useForm();

  const handleSave = () => {
    console.log(modelForm.getFieldsValue());

  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1>Prompt Name</h1>
          <p>Prompt Id: {params.id}</p>
        </div>

        <Button
          type="primary"
          className="w-55"
          icon={<PlusOutlined />}
          size="large"
          onClick={handleSave}
        >
          Save Prompt
        </Button>
      </div>

      <div className="flex">
        <div className="flex flex-col w-full p-5">
          <div className="p-3">
            <TextArea rows={6} />
          </div>
          <div className="flex justify-center">
            <Button
              type="primary"
              className="w-64"
              icon={<PlusOutlined />}
              size="large"
            >
              Generate
            </Button>
          </div>

          <div className="p-3">
            <TextArea rows={6} />
          </div>
        </div>
        <div className="flex w-full p-5">
          <PromptOptions modelForm={modelForm} />
        </div>
      </div>
    </div>
  );
};

export default PromptsDetailPage;
