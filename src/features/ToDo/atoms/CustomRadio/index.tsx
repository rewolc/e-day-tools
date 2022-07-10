import "./index.scss";
import React from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";

export const CustomRadio = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <Form.Item name={"taskImportance"}>
      <Radio.Group buttonStyle="solid" className="radio" onChange={onChange}>
        <Radio.Button value="small">
          <div className="little_color" />
        </Radio.Button>
        <Radio.Button value="medium">
          <div className="medium_color" />
        </Radio.Button>
        <Radio.Button value="high">
          <div className="high_color" />
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};
