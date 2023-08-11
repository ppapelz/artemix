"use client";

import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PromptOptions from "./components/promptOptions";

const PromptsDetailPage = ({ params }: { params: { id: string } }) => {
  const { TextArea } = Input;

  return (
    <div>
      <h1>Prompts Detail Page</h1>
      <p>id: {params.id}</p>
      <div className="flex">
        <div className="flex flex-col w-full p-5">
          <div className="p-3">
            <TextArea rows={6} />
          </div>
          <div className="flex justify-center">
            <Button type="primary" className="w-64" icon={<PlusOutlined />} size="large">
              Generate
            </Button>
          </div>

          <div className="p-3">
            <TextArea rows={6} />
          </div>
        </div>
        <div className="flex w-full p-5">
          <PromptOptions />
        </div>
      </div>
    </div>
  );
};

export default PromptsDetailPage;
